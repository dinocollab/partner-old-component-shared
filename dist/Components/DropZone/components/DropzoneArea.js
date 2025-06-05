import { objectSpread2 as _objectSpread2, inherits as _inherits, createClass as _createClass, slicedToArray as _slicedToArray, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty, asyncToGenerator as _asyncToGenerator, regenerator as _regenerator, objectWithoutProperties as _objectWithoutProperties } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import PropTypes from 'prop-types';
import * as React from 'react';
import { readFile, createFileFromUrl } from '../helpers.js';
import DropzoneAreaBase from './DropzoneAreaBase.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["clearOnUnmount", "initialFiles", "onChange", "onDelete"];
var splitDropzoneAreaProps = function splitDropzoneAreaProps(props) {
  var clearOnUnmount = props.clearOnUnmount,
    initialFiles = props.initialFiles,
    onChange = props.onChange,
    onDelete = props.onDelete,
    dropzoneAreaProps = _objectWithoutProperties(props, _excluded);
  return [{
    clearOnUnmount: clearOnUnmount,
    initialFiles: initialFiles,
    onChange: onChange,
    onDelete: onDelete
  }, dropzoneAreaProps];
};

/**
 * This components creates an uncontrolled Material-UI Dropzone, with previews and snackbar notifications.
 *
 * It supports all props of `DropzoneAreaBase` but keeps the files state internally.
 *
 * **Note** To listen to file changes use `onChange` event handler and notice that `onDelete` returns a `File` instance instead of `FileObject`.
 */
var DropzoneArea = /*#__PURE__*/function (_React$PureComponent) {
  function DropzoneArea() {
    var _this;
    _classCallCheck(this, DropzoneArea);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DropzoneArea, [].concat(args));
    _defineProperty(_this, "state", {
      fileObjects: []
    });
    _defineProperty(_this, "notifyFileChange", function () {
      var onChange = _this.props.onChange;
      var fileObjects = _this.state.fileObjects;
      if (onChange) {
        onChange(fileObjects.map(function (fileObject) {
          return fileObject.file;
        }));
      }
    });
    _defineProperty(_this, "loadInitialFiles", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var initialFiles, fileObjs, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            initialFiles = _this.props.initialFiles;
            _context2.p = 1;
            _context2.n = 2;
            return Promise.all(initialFiles.map(/*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(initialFile) {
                var file, data;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      if (!(typeof initialFile === "string")) {
                        _context.n = 2;
                        break;
                      }
                      _context.n = 1;
                      return createFileFromUrl(initialFile);
                    case 1:
                      file = _context.v;
                      _context.n = 3;
                      break;
                    case 2:
                      file = initialFile;
                    case 3:
                      _context.n = 4;
                      return readFile(file);
                    case 4:
                      data = _context.v;
                      return _context.a(2, {
                        file: file,
                        data: data
                      });
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()));
          case 2:
            fileObjs = _context2.v;
            _this.setState(function (state) {
              return {
                fileObjects: [].concat(state.fileObjects, fileObjs)
              };
            }, _this.notifyFileChange);
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t = _context2.v;
            console.log(_t);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    })));
    _defineProperty(_this, "addFiles", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(newFileObjects) {
        var filesLimit;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              filesLimit = _this.props.filesLimit; // Update component state
              _this.setState(function (state) {
                // Handle a single file
                if (filesLimit <= 1) {
                  return {
                    fileObjects: [].concat(newFileObjects[0])
                  };
                }

                // Handle multiple files
                return {
                  fileObjects: [].concat(state.fileObjects, newFileObjects)
                };
              }, _this.notifyFileChange);
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "deleteFile", function (removedFileObj, removedFileObjIdx) {
      global.event.stopPropagation();
      var onDelete = _this.props.onDelete;
      var fileObjects = _this.state.fileObjects;

      // Calculate remaining fileObjects array
      var remainingFileObjs = fileObjects.filter(function (fileObject, i) {
        return i !== removedFileObjIdx;
      });

      // Notify removed file
      if (onDelete) {
        onDelete(removedFileObj.file);
      }

      // Update local state
      _this.setState({
        fileObjects: remainingFileObjs
      }, _this.notifyFileChange);
    });
    return _this;
  }
  _inherits(DropzoneArea, _React$PureComponent);
  return _createClass(DropzoneArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInitialFiles();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var clearOnUnmount = this.props.clearOnUnmount;
      if (clearOnUnmount) {
        this.setState({
          fileObjects: []
        }, this.notifyFileChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _splitDropzoneAreaPro = splitDropzoneAreaProps(this.props),
        _splitDropzoneAreaPro2 = _slicedToArray(_splitDropzoneAreaPro, 2),
        dropzoneAreaProps = _splitDropzoneAreaPro2[1];
      var fileObjects = this.state.fileObjects;
      return /*#__PURE__*/jsx(DropzoneAreaBase, _objectSpread2(_objectSpread2({}, dropzoneAreaProps), {}, {
        fileObjects: fileObjects,
        onAdd: this.addFiles,
        onDelete: this.deleteFile
      }));
    }
  }]);
}(React.PureComponent);
DropzoneArea.defaultProps = {
  clearOnUnmount: true,
  filesLimit: 3,
  initialFiles: []
};
DropzoneArea.propTypes = _objectSpread2(_objectSpread2({}, DropzoneAreaBase.propTypes), {}, {
  /** Clear uploaded files when component is unmounted. */
  clearOnUnmount: PropTypes.bool,
  /** List containing File objects or URL strings.<br/>
   * **Note:** Please take care of CORS.
   */
  initialFiles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.any])),
  /** Maximum number of files that can be loaded into the dropzone. */
  filesLimit: PropTypes.number,
  /**
   * Fired when the files inside dropzone change.
   *
   * @param {File[]} loadedFiles All the files currently loaded into the dropzone.
   */
  onChange: PropTypes.func,
  /**
   * Fired when a file is deleted from the previews panel.
   *
   * @param {File} deletedFile The file that was removed.
   */
  onDelete: PropTypes.func
});

export { DropzoneArea as default };
//# sourceMappingURL=DropzoneArea.js.map
