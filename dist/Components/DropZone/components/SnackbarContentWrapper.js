import { objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import IconButton from '@mui/material/IconButton';
import SnackbarContent from '@mui/material/SnackbarContent';
import { withStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { defaultTheme } from '../helpers.js';
import { jsx, jsxs } from 'react/jsx-runtime';

var _excluded = ["classes", "className", "message", "onClose", "variant"];
var variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};
var styles = function styles(theme) {
  return {
    successAlert: {
      backgroundColor: theme.palette.success.main
    },
    errorAlert: {
      backgroundColor: theme.palette.error.main
    },
    infoAlert: {
      backgroundColor: theme.palette.info.main
    },
    warningAlert: {
      backgroundColor: theme.palette.warning.main
    },
    message: {
      display: "flex",
      alignItems: "center",
      "& > svg": {
        marginRight: theme.spacing(1)
      }
    },
    icon: {
      fontSize: 20,
      opacity: 0.9
    },
    closeButton: {}
  };
};
var SnackbarContentWrapper = /*#__PURE__*/React.forwardRef(function (props, refObject) {
  var classes = props.classes,
    className = props.className,
    message = props.message,
    onClose = props.onClose,
    variant = props.variant,
    other = _objectWithoutProperties(props, _excluded);
  var Icon = variantIcon[variant];
  return /*#__PURE__*/jsx(SnackbarContent, _objectSpread2({
    ref: refObject,
    className: clsx(classes["".concat(variant, "Alert")], className),
    "aria-describedby": "client-snackbar",
    message: /*#__PURE__*/jsxs("span", {
      id: "client-snackbar",
      className: classes.message,
      children: [/*#__PURE__*/jsx(Icon, {
        className: classes.icon
      }), message]
    }),
    action: [/*#__PURE__*/jsx(IconButton, {
      "aria-label": "Close",
      color: "inherit",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/jsx(CloseIcon, {
        className: classes.icon
      })
    }, "close")]
  }, other));
});
SnackbarContentWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};
var SnackbarContentWrapper$1 = withStyles(styles, {
  name: "MuiDropzoneSnackbar",
  defaultTheme: defaultTheme
})(SnackbarContentWrapper);

export { SnackbarContentWrapper$1 as default };
//# sourceMappingURL=SnackbarContentWrapper.js.map
