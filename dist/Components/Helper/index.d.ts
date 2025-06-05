/// <reference types="react" />
import { AxiosError } from 'axios';
import { ModelBase } from 'partner-local-lib/GridTable';
import { FormValidator, PartialError } from 'partner-local-lib/helper';
export declare const Sleep: (sec: number) => Promise<unknown>;
export declare const FetchDelay: <TModel>(action: () => Promise<TModel>, sec: number) => Promise<TModel>;
export declare const isPromise: (object: any) => object is Promise<unknown>;
export declare const humanFileSize: (bytes: number, si?: boolean, dp?: number) => string;
export declare const humanFileSizeNoExtension: (bytes: number, si?: boolean, dp?: number) => string;
export declare const ConvertFormDataToJson: <TModel>(form: FormData) => Partial<TModel>;
export declare const getErrorMessage: <TModel>(MessageErrors: PartialError<TModel> | undefined, key: string) => any;
export declare const SingleValidate: <TModel, TPartial = TModel>(key: string, modelState: TPartial, MessageErrors: PartialError<TModel>, Validator: FormValidator<TPartial>) => {
    [key: string]: any;
} | null;
export declare const GetErrorFromResponse: <TModel>(error: AxiosError, ModelRender: TModel) => PartialError<TModel> | undefined;
export declare const ClearFieldEmpty: <TModel>(model: Extract<TModel, ModelBase>) => void;
export declare const FormatNumber: Intl.NumberFormat;
export declare const FormatterVN: (value: number) => string;
export declare function stringToColor(string: string): string;
export declare function stringAvatar(name: string): {
    sx: {
        bgcolor: string;
    };
    children: string;
};
export declare const DeepClone: <TModel>(obj: TModel) => TModel;
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export declare function isObject(item: any): any;
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export declare function mergeDeep<TModel = any>(target: any, ...sources: any[]): TModel;
export declare const humannumber: (bytes: number, dp?: number) => string;
export declare const SignalMerge: (...signals: (AbortSignal | undefined)[]) => AbortSignal;
export declare const GetSvgExtensionUri: (key: string, element: JSX.Element) => string;
