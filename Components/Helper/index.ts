import { AxiosError } from "axios";
import { ModelBase } from "local-lib/src/GridTable";
import { FormValidator, PartialError } from "local-lib/src/helper/entry";
import NoSleep from "nosleep.js";
import ReactDOMServer from 'react-dom/server';

export const Sleep = (sec: number) => new Promise((resolve) => setTimeout(resolve, sec))
export const FetchDelay = async function <TModel>(action: () => Promise<TModel>, sec: number) {
  const [res] = await Promise.all([action(), Sleep(sec)])
  return res
}

export const isPromise = (object: any): object is Promise<unknown> => {
  return typeof object === "object" && typeof object.then === "function";
};
export const humanFileSize = (bytes: number, si = false, dp = 1) => {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
};
export const humanFileSizeNoExtension = (bytes: number, si = false, dp = 1) => {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp);
};

export const ConvertFormDataToJson = function <TModel>(
  form: FormData
): Partial<TModel> {
  const data = Array.from(form).reduce<Partial<TModel>>((a: any, b: any[]) => {
    if (!a[b[0]]) {
      a[b[0]] = b[1];
    } else if (Array.isArray(a[b[0]])) {
      a[b[0]].push(b[1]);
    } else {
      a[b[0]] = [a[b[0]], b[1]];
    }
    return a;
  }, {} as any) as any;

  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (
      typeof value === "string" &&
      (value.toString().toLocaleLowerCase() === "true" ||
        value.toString().toLocaleLowerCase() === "false")
    ) {
      data[key] = value.toString().toLocaleLowerCase() === "true";
    }
  });
  return data;
};
export const getErrorMessage = function <TModel>(
  MessageErrors: PartialError<TModel> | undefined,
  key: string
) {
  return MessageErrors && (MessageErrors as any)[key]
    ? {
      ...(MessageErrors as any)[key][0],
      error: true,
    }
    : { error: false };
};
export const SingleValidate = function <TModel, TPartial = TModel>(
  key: string,
  modelState: TPartial,
  MessageErrors: PartialError<TModel>,
  Validator: FormValidator<TPartial>
) {
  const messageErrors = Validator.run(modelState) as { [key: string]: any };
  if (messageErrors) {
    let errors = (MessageErrors || {}) as { [key: string]: any };
    const keys = Object.keys(modelState as any).filter(
      (key) => !!(modelState as any)[key]
    );
    keys.push(key);
    keys.forEach((key) => {
      if (messageErrors[key]) {
        errors[key] = messageErrors[key];
      } else {
        delete errors[key];
      }
    });
    return errors;
  }
  return null;
};
export const GetErrorFromResponse = function <TModel>(
  error: AxiosError,
  ModelRender: TModel
) {
  const data = error.response?.data as any;
  if (data) {
    const keys = Object.keys(ModelRender as any);
    const MessageErrors: PartialError<TModel> | undefined = {};
    keys.forEach((key) => {
      const messages = data[key];
      if (Array.isArray(messages) && messages.length > 0) {
        (MessageErrors as any)[key] = [
          {
            message: messages[0],
          },
        ];
      }
    });
    return MessageErrors;
  }
};

export const ClearFieldEmpty = <TModel>(model: Extract<TModel, ModelBase>) => {
  Object.keys(model).forEach((key: keyof Extract<TModel, ModelBase>) => {
    if (!model[key]) delete model[key];
  });
};

export const FormatNumber = new Intl.NumberFormat("en-US");

export const FormatterVN = (value: number) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })
    .format(value)
    .replace("$", "") + " vnđ";

export function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name: string) {
  let tmps = name?.split(" ") ?? ["@"]
  const name1 = tmps[0] && tmps[0][0] ? tmps[0][0] : "@"
  const name2 = tmps[0] && tmps[1][0] ? tmps[1][0] : ""
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name1}${name2}`,
  };
}
export const DeepClone = <TModel>(obj: TModel): TModel => {
  if (Array.isArray(obj)) {
    return obj.map(DeepClone) as TModel;
  } else if (typeof obj === "object" && obj) {
    return Object.keys(obj).reduce((a, b) => {
      a[b] = DeepClone((obj as any)[b] as any);
      return a;
    }, {} as any);
  } else {
    return obj;
  }
};
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
* Deep merge two objects.
* @param target
* @param ...sources
*/
export function mergeDeep<TModel = any>(target: any, ...sources: any[]): TModel {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export const humannumber = (bytes: number, dp = 1) => {
  const thresh = 1000;

  if (Math.abs(bytes) < thresh) {
    return bytes + "";
  }

  const units = ['k', 'M', 'B']
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}


export const SignalMerge = (...signals: (AbortSignal | undefined)[]) => {
  const controller = new AbortController()
  signals.forEach(x => x?.addEventListener("abort", () => controller.abort()))
  return controller.signal
}

const mapExtensionUri: { [key: string]: string } = {}

const b64toBlob = (b64Data: string, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}
export const GetSvgExtensionUri = (key: string, element: JSX.Element) => {
  let value = mapExtensionUri[key]
  if (!value) {
    const temp = ReactDOMServer.renderToStaticMarkup(element)
    value = URL.createObjectURL(new Blob([temp], { type: 'image/svg+xml' }));
    mapExtensionUri[key] = value
  }
  return value;
}