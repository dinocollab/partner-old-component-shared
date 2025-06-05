import { objectSpread2 as _objectSpread2, inherits as _inherits, createClass as _createClass, slicedToArray as _slicedToArray, classCallCheck as _classCallCheck, callSuper as _callSuper, objectWithoutProperties as _objectWithoutProperties } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import * as React from 'react';
import DropzoneAreaBase from './DropzoneAreaBase.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var _excluded = ["cancelButtonText", "dialogProps", "dialogTitle", "fullWidth", "maxWidth", "onClose", "onSave", "open", "submitButtonText"];
function splitDropzoneDialogProps(allProps) {
  var cancelButtonText = allProps.cancelButtonText,
    dialogProps = allProps.dialogProps,
    dialogTitle = allProps.dialogTitle,
    fullWidth = allProps.fullWidth,
    maxWidth = allProps.maxWidth,
    onClose = allProps.onClose,
    onSave = allProps.onSave,
    open = allProps.open,
    submitButtonText = allProps.submitButtonText,
    dropzoneAreaProps = _objectWithoutProperties(allProps, _excluded);
  return [{
    cancelButtonText: cancelButtonText,
    dialogProps: dialogProps,
    dialogTitle: dialogTitle,
    fullWidth: fullWidth,
    maxWidth: maxWidth,
    onClose: onClose,
    onSave: onSave,
    open: open,
    submitButtonText: submitButtonText
  }, dropzoneAreaProps];
}

/**
 * This component provides the DropzoneArea inside of a Material-UI Dialog.
 *
 * It supports all the Props and Methods from `DropzoneAreaBase`.
 */
var DropzoneDialogBase = /*#__PURE__*/function (_React$PureComponent) {
  function DropzoneDialogBase() {
    _classCallCheck(this, DropzoneDialogBase);
    return _callSuper(this, DropzoneDialogBase, arguments);
  }
  _inherits(DropzoneDialogBase, _React$PureComponent);
  return _createClass(DropzoneDialogBase, [{
    key: "render",
    value: function render() {
      var _splitDropzoneDialogP = splitDropzoneDialogProps(this.props),
        _splitDropzoneDialogP2 = _slicedToArray(_splitDropzoneDialogP, 2),
        dropzoneDialogProps = _splitDropzoneDialogP2[0],
        dropzoneAreaProps = _splitDropzoneDialogP2[1];
      var cancelButtonText = dropzoneDialogProps.cancelButtonText,
        dialogProps = dropzoneDialogProps.dialogProps,
        dialogTitle = dropzoneDialogProps.dialogTitle,
        fullWidth = dropzoneDialogProps.fullWidth,
        maxWidth = dropzoneDialogProps.maxWidth,
        onClose = dropzoneDialogProps.onClose,
        onSave = dropzoneDialogProps.onSave,
        open = dropzoneDialogProps.open,
        submitButtonText = dropzoneDialogProps.submitButtonText;

      // Submit button state
      var submitDisabled = dropzoneAreaProps.fileObjects.length === 0;
      return /*#__PURE__*/jsxs(Dialog, _objectSpread2(_objectSpread2({}, dialogProps), {}, {
        fullWidth: fullWidth,
        maxWidth: maxWidth,
        onClose: onClose,
        open: open,
        children: [/*#__PURE__*/jsx(DialogTitle, {
          children: dialogTitle
        }), /*#__PURE__*/jsx(DialogContent, {
          children: /*#__PURE__*/jsx(DropzoneAreaBase, _objectSpread2({}, dropzoneAreaProps))
        }), /*#__PURE__*/jsxs(DialogActions, {
          children: [/*#__PURE__*/jsx(Button, {
            color: "primary",
            onClick: onClose,
            children: cancelButtonText
          }), /*#__PURE__*/jsx(Button, {
            color: "primary",
            disabled: submitDisabled,
            onClick: onSave,
            children: submitButtonText
          })]
        })]
      }));
    }
  }]);
}(React.PureComponent);
DropzoneDialogBase.defaultProps = {
  open: false,
  dialogTitle: "Upload file",
  dialogProps: {},
  fullWidth: true,
  maxWidth: "sm",
  cancelButtonText: "Cancel",
  submitButtonText: "Submit",
  showPreviews: true,
  showPreviewsInDropzone: false,
  showFileNamesInPreview: true
};
DropzoneDialogBase.propTypes = _objectSpread2(_objectSpread2({}, DropzoneAreaBase.propTypes), {}, {
  /** Sets whether the dialog is open or closed. */
  open: PropTypes.bool,
  /** The Dialog title. */
  dialogTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Props to pass to the Material-UI Dialog components.
   * @see See [Material-UI Dialog](https://material-ui.com/api/dialog/#props) for available values.
   */
  dialogProps: PropTypes.object,
  /**
   * If `true`, the dialog stretches to `maxWidth`.<br/>
   * Notice that the dialog width grow is limited by the default margin.
   */
  fullWidth: PropTypes.bool,
  /**
   * Determine the max-width of the dialog. The dialog width grows with the size of the screen.<br/>
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: PropTypes.string,
  /** Cancel button text in dialog. */
  cancelButtonText: PropTypes.string,
  /** Submit button text in dialog. */
  submitButtonText: PropTypes.string,
  /**
   * Fired when the modal is closed.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onClose: PropTypes.func,
  /**
   * Fired when the user clicks the Submit button.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onSave: PropTypes.func,
  /**
   * Shows previews **BELOW** the dropzone.<br/>
   * **Note:** By default previews show up under in the Dialog and inside in the standalone.
   */
  showPreviews: PropTypes.bool,
  /** Shows preview **INSIDE** the dropzone area. */
  showPreviewsInDropzone: PropTypes.bool,
  /** Shows file name under the image. */
  showFileNamesInPreview: PropTypes.bool
});

export { DropzoneDialogBase as default };
//# sourceMappingURL=DropzoneDialogBase.js.map
