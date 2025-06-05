import { inherits as _inherits, createClass as _createClass, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty, asyncToGenerator as _asyncToGenerator, regenerator as _regenerator } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Fragment } from 'react';
import Dropzone from 'react-dropzone';
import { defaultTheme, isImage, convertBytesToMbsOrKbs } from '../helpers.js';
import PreviewList from './PreviewList.js';
import SnackbarContentWrapper from './SnackbarContentWrapper.js';
import { jsx, jsxs } from 'react/jsx-runtime';

var styles = function styles(_ref) {
  var palette = _ref.palette,
    shape = _ref.shape,
    spacing = _ref.spacing;
  return {
    "@keyframes progress": {
      "0%": {
        backgroundPosition: "0 0"
      },
      "100%": {
        backgroundPosition: "-70px 0"
      }
    },
    root: {
      position: "relative",
      width: "100%",
      minHeight: "250px",
      backgroundColor: palette.background.paper,
      border: "dashed",
      borderColor: palette.divider,
      borderRadius: shape.borderRadius,
      boxSizing: "border-box",
      cursor: "pointer",
      overflow: "hidden"
    },
    active: {
      animation: "$progress 2s linear infinite !important",
      // eslint-disable-next-line max-len
      backgroundImage: "repeating-linear-gradient(-45deg, ".concat(palette.background.paper, ", ").concat(palette.background.paper, " 25px, ").concat(palette.divider, " 25px, ").concat(palette.divider, " 50px)"),
      backgroundSize: "150% 100%",
      border: "solid",
      borderColor: palette.primary.light
    },
    invalid: {
      // eslint-disable-next-line max-len
      backgroundImage: "repeating-linear-gradient(-45deg, ".concat(palette.error.light, ", ").concat(palette.error.light, " 25px, ").concat(palette.error.dark, " 25px, ").concat(palette.error.dark, " 50px)"),
      borderColor: palette.error.main
    },
    textContainer: {
      textAlign: "center"
    },
    text: {
      marginBottom: spacing(3),
      marginTop: spacing(3)
    },
    icon: {
      width: 51,
      height: 51,
      color: palette.text.primary
    }
  };
};
var defaultSnackbarAnchorOrigin = {
  horizontal: "left",
  vertical: "bottom"
};
var defaultGetPreviewIcon = function defaultGetPreviewIcon(fileObject, classes) {
  if (isImage(fileObject.file)) {
    return /*#__PURE__*/jsx("img", {
      className: classes.image,
      role: "presentation",
      alt: "",
      src: fileObject.data
    });
  }
  return /*#__PURE__*/jsx(AttachFileIcon, {
    className: classes.image
  });
};

/**
 * This components creates a Material-UI Dropzone, with previews and snackbar notifications.
 */
var DropzoneAreaBase = /*#__PURE__*/function (_React$PureComponent) {
  function DropzoneAreaBase() {
    var _this;
    _classCallCheck(this, DropzoneAreaBase);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DropzoneAreaBase, [].concat(args));
    _defineProperty(_this, "state", {
      openSnackBar: false,
      snackbarMessage: "",
      snackbarVariant: "success"
    });
    _defineProperty(_this, "handleDropAccepted", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(acceptedFiles, evt) {
        var _this$props, fileObjects, filesLimit, getFileAddedMessage, getFileLimitExceedMessage, onAdd, onDrop, fileObjs, message;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this$props = _this.props, fileObjects = _this$props.fileObjects, filesLimit = _this$props.filesLimit, getFileAddedMessage = _this$props.getFileAddedMessage, getFileLimitExceedMessage = _this$props.getFileLimitExceedMessage, onAdd = _this$props.onAdd, onDrop = _this$props.onDrop;
              if (!(filesLimit > 1 && fileObjects.length + acceptedFiles.length > filesLimit)) {
                _context.n = 1;
                break;
              }
              _this.setState({
                openSnackBar: true,
                snackbarMessage: getFileLimitExceedMessage(filesLimit),
                snackbarVariant: "error"
              }, _this.notifyAlert);
              return _context.a(2);
            case 1:
              // Notify Drop event
              if (onDrop) {
                onDrop(acceptedFiles, evt);
              }

              // Retrieve fileObjects data
              // const fileObjs = await Promise.all(
              //   acceptedFiles.map(async (file) => {
              //     const data = await readFile(file);
              //     return {
              //       file,
              //       data,
              //     };
              //   })
              // );
              fileObjs = acceptedFiles.map(function (file) {
                return {
                  file: file
                };
              }); // Notify added files
              if (onAdd) {
                onAdd(fileObjs);
              }

              // Display message
              message = fileObjs.reduce(function (msg, fileObj) {
                return msg + getFileAddedMessage(fileObj.file.name);
              }, "");
              _this.setState({
                openSnackBar: true,
                snackbarMessage: message,
                snackbarVariant: "success"
              }, _this.notifyAlert);
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "handleDropRejected", function (rejectedFiles, evt) {
      var _this$props2 = _this.props,
        acceptedFiles = _this$props2.acceptedFiles,
        filesLimit = _this$props2.filesLimit,
        fileObjects = _this$props2.fileObjects,
        getDropRejectMessage = _this$props2.getDropRejectMessage,
        getFileLimitExceedMessage = _this$props2.getFileLimitExceedMessage,
        maxFileSize = _this$props2.maxFileSize,
        onDropRejected = _this$props2.onDropRejected;
      var message = "";
      if (fileObjects.length + rejectedFiles.length > filesLimit) {
        message = getFileLimitExceedMessage(filesLimit);
      } else {
        rejectedFiles.forEach(function (rejectedFile) {
          message = getDropRejectMessage(rejectedFile.file, acceptedFiles, maxFileSize);
        });
      }
      if (onDropRejected) {
        onDropRejected(rejectedFiles, evt);
      }
      _this.setState({
        openSnackBar: true,
        snackbarMessage: message,
        snackbarVariant: "error"
      }, _this.notifyAlert);
    });
    _defineProperty(_this, "handleRemove", function (fileIndex) {
      return function (event) {
        event.stopPropagation();
        var _this$props3 = _this.props,
          fileObjects = _this$props3.fileObjects,
          getFileRemovedMessage = _this$props3.getFileRemovedMessage,
          onDelete = _this$props3.onDelete;

        // Find removed fileObject
        var removedFileObj = fileObjects[fileIndex];

        // Notify removed file
        if (onDelete) {
          onDelete(removedFileObj, fileIndex);
        }
        _this.setState({
          openSnackBar: true,
          snackbarMessage: getFileRemovedMessage(removedFileObj.file.name),
          snackbarVariant: "info"
        }, _this.notifyAlert);
      };
    });
    _defineProperty(_this, "handleCloseSnackbar", function () {
      _this.setState({
        openSnackBar: false
      });
    });
    return _this;
  }
  _inherits(DropzoneAreaBase, _React$PureComponent);
  return _createClass(DropzoneAreaBase, [{
    key: "notifyAlert",
    value: function notifyAlert() {
      var onAlert = this.props.onAlert;
      var _this$state = this.state,
        openSnackBar = _this$state.openSnackBar,
        snackbarMessage = _this$state.snackbarMessage,
        snackbarVariant = _this$state.snackbarVariant;
      if (openSnackBar && onAlert) {
        onAlert(snackbarMessage, snackbarVariant);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        acceptedFiles = _this$props4.acceptedFiles,
        alertSnackbarProps = _this$props4.alertSnackbarProps,
        classes = _this$props4.classes,
        disableRejectionFeedback = _this$props4.disableRejectionFeedback,
        dropzoneClass = _this$props4.dropzoneClass,
        dropzoneParagraphClass = _this$props4.dropzoneParagraphClass,
        dropzoneProps = _this$props4.dropzoneProps,
        dropzoneText = _this$props4.dropzoneText,
        fileObjects = _this$props4.fileObjects,
        filesLimit = _this$props4.filesLimit,
        getPreviewIcon = _this$props4.getPreviewIcon,
        Icon = _this$props4.Icon,
        inputProps = _this$props4.inputProps,
        maxFileSize = _this$props4.maxFileSize,
        previewChipProps = _this$props4.previewChipProps,
        previewGridClasses = _this$props4.previewGridClasses,
        previewGridProps = _this$props4.previewGridProps,
        previewText = _this$props4.previewText,
        showAlerts = _this$props4.showAlerts,
        showFileNames = _this$props4.showFileNames,
        showFileNamesInPreview = _this$props4.showFileNamesInPreview,
        showPreviews = _this$props4.showPreviews,
        showPreviewsInDropzone = _this$props4.showPreviewsInDropzone,
        useChipsForPreview = _this$props4.useChipsForPreview;
      var _this$state2 = this.state,
        openSnackBar = _this$state2.openSnackBar,
        snackbarMessage = _this$state2.snackbarMessage,
        snackbarVariant = _this$state2.snackbarVariant;

      // const acceptFiles = acceptedFiles?.join(",");
      var isMultiple = filesLimit > 1;
      var previewsVisible = showPreviews && fileObjects.length > 0;
      var previewsInDropzoneVisible = showPreviewsInDropzone && fileObjects.length > 0;
      return /*#__PURE__*/jsxs(Fragment, {
        children: [/*#__PURE__*/jsx(Dropzone, _objectSpread2(_objectSpread2({}, dropzoneProps), {}, {
          accept: acceptedFiles,
          onDropAccepted: this.handleDropAccepted,
          onDropRejected: this.handleDropRejected,
          maxSize: maxFileSize,
          multiple: isMultiple,
          children: function children(_ref3) {
            var getRootProps = _ref3.getRootProps,
              getInputProps = _ref3.getInputProps,
              isDragActive = _ref3.isDragActive,
              isDragReject = _ref3.isDragReject;
            return /*#__PURE__*/jsxs("div", _objectSpread2(_objectSpread2({}, getRootProps({
              className: clsx(classes.root, dropzoneClass, isDragActive && classes.active, !disableRejectionFeedback && isDragReject && classes.invalid)
            })), {}, {
              children: [/*#__PURE__*/jsx("input", _objectSpread2({}, getInputProps(inputProps))), /*#__PURE__*/jsxs("div", {
                className: classes.textContainer,
                children: [/*#__PURE__*/jsx(Typography, {
                  variant: "h5",
                  component: "p",
                  className: clsx(classes.text, dropzoneParagraphClass),
                  children: dropzoneText
                }), Icon ? /*#__PURE__*/jsx(Icon, {
                  className: classes.icon
                }) : /*#__PURE__*/jsx(CloudUploadIcon, {
                  className: classes.icon
                })]
              }), previewsInDropzoneVisible && /*#__PURE__*/jsx(PreviewList, {
                fileObjects: fileObjects,
                handleRemove: _this2.handleRemove,
                getPreviewIcon: getPreviewIcon,
                showFileNames: showFileNames,
                useChipsForPreview: useChipsForPreview,
                previewChipProps: previewChipProps,
                previewGridClasses: previewGridClasses,
                previewGridProps: previewGridProps
              })]
            }));
          }
        })), previewsVisible && /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsx(Typography, {
            variant: "subtitle1",
            component: "span",
            children: previewText
          }), /*#__PURE__*/jsx(PreviewList, {
            fileObjects: fileObjects,
            handleRemove: this.handleRemove,
            getPreviewIcon: getPreviewIcon,
            showFileNames: showFileNamesInPreview,
            useChipsForPreview: useChipsForPreview,
            previewChipProps: previewChipProps,
            previewGridClasses: previewGridClasses,
            previewGridProps: previewGridProps
          })]
        }), (typeof showAlerts === "boolean" && showAlerts || Array.isArray(showAlerts) && showAlerts.includes(snackbarVariant)) && /*#__PURE__*/jsx(Snackbar, _objectSpread2(_objectSpread2({
          anchorOrigin: defaultSnackbarAnchorOrigin,
          autoHideDuration: 6000
        }, alertSnackbarProps), {}, {
          open: openSnackBar,
          onClose: this.handleCloseSnackbar,
          children: /*#__PURE__*/jsx(SnackbarContentWrapper, {
            onClose: this.handleCloseSnackbar,
            variant: snackbarVariant,
            message: snackbarMessage
          })
        }))]
      });
    }
  }]);
}(React.PureComponent);
DropzoneAreaBase.defaultProps = {
  acceptedFiles: [],
  filesLimit: 3,
  fileObjects: [],
  maxFileSize: 3000000,
  dropzoneText: "Drag and drop a file here or click",
  previewText: "Preview:",
  disableRejectionFeedback: false,
  showPreviews: false,
  // By default previews show up under in the dialog and inside in the standalone
  showPreviewsInDropzone: true,
  showFileNames: false,
  showFileNamesInPreview: false,
  useChipsForPreview: false,
  previewChipProps: {},
  previewGridClasses: {},
  previewGridProps: {},
  showAlerts: true,
  alertSnackbarProps: {
    anchorOrigin: {
      horizontal: "left",
      vertical: "bottom"
    },
    autoHideDuration: 6000
  },
  getFileLimitExceedMessage: function getFileLimitExceedMessage(filesLimit) {
    return "Maximum allowed number of files exceeded. Only ".concat(filesLimit, " allowed");
  },
  getFileAddedMessage: function getFileAddedMessage(fileName) {
    return "File ".concat(fileName, " successfully added.");
  },
  getPreviewIcon: defaultGetPreviewIcon,
  getFileRemovedMessage: function getFileRemovedMessage(fileName) {
    return "File ".concat(fileName, " removed.");
  },
  getDropRejectMessage: function getDropRejectMessage(rejectedFile, acceptedFiles, maxFileSize) {
    var message = "File ".concat(rejectedFile.name, " was rejected. ");
    if (!acceptedFiles.includes(rejectedFile.type)) {
      message += "File type not supported. ";
    }
    if (rejectedFile.size > maxFileSize) {
      message += "File is too big. Size limit is " + convertBytesToMbsOrKbs(maxFileSize) + ". ";
    }
    return message;
  }
};
var FileObjectShape = PropTypes.shape({
  file: PropTypes.object,
  data: PropTypes.any
});
DropzoneAreaBase.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** A list of file types to accept.
   * @see See [here](https://react-dropzone.js.org/#section-accepting-specific-file-types) for more details.
   */
  acceptedFiles: PropTypes.object,
  /** Maximum number of files that can be loaded into the dropzone. */
  filesLimit: PropTypes.number,
  /** Icon to be displayed inside the dropzone area. */
  Icon: PropTypes.elementType,
  /** Currently loaded files. */
  fileObjects: PropTypes.arrayOf(FileObjectShape),
  /** Maximum file size (in bytes) that the dropzone will accept. */
  maxFileSize: PropTypes.number,
  /** Text inside the dropzone. */
  dropzoneText: PropTypes.string,
  /** Custom CSS class name for dropzone container. */
  dropzoneClass: PropTypes.string,
  /** Custom CSS class name for text inside the container. */
  dropzoneParagraphClass: PropTypes.string,
  /** Disable feedback effect when dropping rejected files. */
  disableRejectionFeedback: PropTypes.bool,
  /** Shows previews **BELOW** the dropzone. */
  showPreviews: PropTypes.bool,
  /** Shows preview **INSIDE** the dropzone area. */
  showPreviewsInDropzone: PropTypes.bool,
  /** Shows file name under the dropzone image. */
  showFileNames: PropTypes.bool,
  /** Shows file name under the image. */
  showFileNamesInPreview: PropTypes.bool,
  /** Uses deletable Material-UI Chip components to display file names. */
  useChipsForPreview: PropTypes.bool,
  /**
   * Props to pass to the Material-UI Chip components.<br/>Requires `useChipsForPreview` prop to be `true`.
   *
   * @see See [Material-UI Chip](https://material-ui.com/api/chip/#props) for available values.
   */
  previewChipProps: PropTypes.object,
  /**
   * Custom CSS classNames for preview Grid components.<br/>
   * Should be in the form {container: string, item: string, image: string}.
   */
  previewGridClasses: PropTypes.object,
  /**
   * Props to pass to the Material-UI Grid components.<br/>
   * Should be in the form {container: GridProps, item: GridProps}.
   *
   * @see See [Material-UI Grid](https://material-ui.com/api/grid/#props) for available GridProps values.
   */
  previewGridProps: PropTypes.object,
  /** The label for the file preview section. */
  previewText: PropTypes.string,
  /**
   * Shows styled Material-UI Snackbar when files are dropped, deleted or rejected.
   *
   * - can be a boolean ("global" `true` or `false` for all alerts).
   * - can be an array, with values 'error', 'info', 'success' to select to view only certain alerts:
   *  - showAlerts={['error']} for only errors.
   *  - showAlerts={['error', 'info']} for both errors and info.
   *  - showAlerts={['error', 'success', 'info']} is same as showAlerts={true}.
   *  - showAlerts={[]} is same as showAlerts={false}.
   */
  showAlerts: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.oneOf(["error", "success", "info"]))]),
  /**
   * Props to pass to the Material-UI Snackbar components.<br/>Requires `showAlerts` prop to be `true`.
   *
   * @see See [Material-UI Snackbar](https://material-ui.com/api/snackbar/#props) for available values.
   */
  alertSnackbarProps: PropTypes.object,
  /**
   * Props to pass to the Dropzone component.
   *
   * @see See [Dropzone props](https://react-dropzone.js.org/#src) for available values.
   */
  dropzoneProps: PropTypes.object,
  /**
   * Attributes applied to the input element.
   *
   * @see See [MDN Input File attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Additional_attributes) for available values.
   */
  inputProps: PropTypes.object,
  /**
   * Get alert message to display when files limit is exceed.
   *
   * *Default*: "Maximum allowed number of files exceeded. Only ${filesLimit} allowed"
   *
   * @param {number} filesLimit The `filesLimit` currently set for the component.
   */
  getFileLimitExceedMessage: PropTypes.func,
  /**
   * Get alert message to display when a new file is added.
   *
   * *Default*: "File ${fileName} successfully added."
   *
   * @param {string} fileName The newly added file name.
   */
  getFileAddedMessage: PropTypes.func,
  /**
   * Get alert message to display when a file is removed.
   *
   * *Default*: "File ${fileName} removed."
   *
   * @param {string} fileName The name of the removed file.
   */
  getFileRemovedMessage: PropTypes.func,
  /**
   * Get alert message to display when a file is rejected onDrop.
   *
   * *Default*: "File ${rejectedFile.name} was rejected."
   *
   * @param {Object} rejectedFile The file that got rejected
   * @param {Object} acceptedFiles The `acceptedFiles` prop currently set for the component
   * @param {number} maxFileSize The `maxFileSize` prop currently set for the component
   */
  getDropRejectMessage: PropTypes.func,
  /**
   * A function which determines which icon to display for a file preview.
   *
   * *Default*: If its an image then displays a preview the image, otherwise it will display an attachment icon
   *
   * @param {FileObject} objectFile The file which the preview will belong to
   * @param {Object} classes The classes for the file preview icon, in the default case we use the 'image' className.
   */
  getPreviewIcon: PropTypes.func,
  /**
   * Fired when new files are added to dropzone.
   *
   * @param {FileObject[]} newFiles The new files added to the dropzone.
   */
  onAdd: PropTypes.func,
  /**
   * Fired when a file is deleted from the previews panel.
   *
   * @param {FileObject} deletedFileObject The file that was removed.
   * @param {number} index The index of the removed file object.
   */
  onDelete: PropTypes.func,
  /**
   * Fired when the user drops files into the dropzone.
   *
   * @param {File[]} droppedFiles All the files dropped into the dropzone.
   * @param {Event} event The react-dropzone drop event.
   */
  onDrop: PropTypes.func,
  /**
   * Fired when a file is rejected because of wrong file type, size or goes beyond the filesLimit.
   *
   * @param {File[]} rejectedFiles All the rejected files.
   * @param {Event} event The react-dropzone drop event.
   */
  onDropRejected: PropTypes.func,
  /**
   * Fired when an alert is triggered.
   *
   * @param {string} message Alert message.
   * @param {string} variant One of "error", "info", "success".
   */
  onAlert: PropTypes.func
};
var DropzoneAreaBase$1 = withStyles(styles, {
  name: "MuiDropzoneArea",
  defaultTheme: defaultTheme
})(DropzoneAreaBase);

export { FileObjectShape, DropzoneAreaBase$1 as default };
//# sourceMappingURL=DropzoneAreaBase.js.map
