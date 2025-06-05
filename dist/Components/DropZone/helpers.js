import { asyncToGenerator as _asyncToGenerator, regenerator as _regenerator } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { createTheme } from '@mui/material';

function isImage(file) {
  if (file.type.split("/")[0] === "image") {
    return true;
  }
}
function convertBytesToMbsOrKbs(filesize) {
  var size = "";
  if (filesize >= 1048576) {
    size = filesize / 1048576 + " megabytes";
  } else if (filesize >= 1024) {
    size = filesize / 1024 + " kilobytes";
  } else {
    size = filesize + " bytes";
  }
  return size;
}
function createFileFromUrl(_x) {
  return _createFileFromUrl.apply(this, arguments);
}
function _createFileFromUrl() {
  _createFileFromUrl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url) {
    var response, data, metadata, filename;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return fetch(url);
        case 1:
          response = _context.v;
          _context.n = 2;
          return response.blob();
        case 2:
          data = _context.v;
          metadata = {
            type: data.type
          };
          filename = url.replace(/\?.+/, "").split("/").pop();
          return _context.a(2, new File([data], filename, metadata));
      }
    }, _callee);
  }));
  return _createFileFromUrl.apply(this, arguments);
}
function readFile(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function (event) {
      var _event$target;
      resolve(event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result);
    };
    reader.onerror = function (event) {
      reader.abort();
      reject(event);
    };
    reader.readAsDataURL(file);
  });
}
var defaultTheme = createTheme();

export { convertBytesToMbsOrKbs, createFileFromUrl, defaultTheme, isImage, readFile };
//# sourceMappingURL=helpers.js.map
