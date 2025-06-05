import { objectSpread2 as _objectSpread2 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import Chip from '@mui/material/Chip';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import clsx from 'clsx';
import { createElement } from 'react';
import PropTypes from 'prop-types';
import { defaultTheme } from '../helpers.js';
import { jsx } from 'react/jsx-runtime';

var styles = function styles(_ref) {
  var palette = _ref.palette,
    shape = _ref.shape,
    spacing = _ref.spacing;
  return {
    root: {},
    imageContainer: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      '&:hover $image': {
        opacity: 0.3
      },
      '&:hover $removeButton': {
        opacity: 1
      }
    },
    image: {
      height: 100,
      width: 'initial',
      maxWidth: '100%',
      color: palette.text.primary,
      transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      boxSizing: 'border-box',
      boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px',
      borderRadius: shape.borderRadius,
      zIndex: 5,
      opacity: 1
    },
    removeButton: {
      transition: '.5s ease',
      position: 'absolute',
      opacity: 0,
      top: spacing(-1),
      right: spacing(-1),
      width: 40,
      height: 40,
      '&:focus': {
        opacity: 1
      }
    }
  };
};
function PreviewList(_ref2) {
  var fileObjects = _ref2.fileObjects,
    handleRemove = _ref2.handleRemove,
    showFileNames = _ref2.showFileNames,
    useChipsForPreview = _ref2.useChipsForPreview,
    previewChipProps = _ref2.previewChipProps,
    previewGridClasses = _ref2.previewGridClasses,
    previewGridProps = _ref2.previewGridProps,
    classes = _ref2.classes,
    getPreviewIcon = _ref2.getPreviewIcon;
  if (useChipsForPreview) {
    return /*#__PURE__*/jsx(Grid, _objectSpread2(_objectSpread2({
      spacing: 1,
      direction: "row"
    }, previewGridProps.container), {}, {
      container: true,
      className: clsx(classes.root, previewGridClasses.container),
      children: fileObjects.map(function (fileObject, i) {
        var _fileObject$file$name, _fileObject$file;
        return /*#__PURE__*/createElement(Grid, _objectSpread2(_objectSpread2({}, previewGridProps.item), {}, {
          item: true,
          key: "".concat((_fileObject$file$name = (_fileObject$file = fileObject.file) === null || _fileObject$file === void 0 ? void 0 : _fileObject$file.name) !== null && _fileObject$file$name !== void 0 ? _fileObject$file$name : 'file', "-").concat(i),
          className: classes.imageContainer
        }), /*#__PURE__*/jsx(Chip, _objectSpread2(_objectSpread2({
          variant: "outlined"
        }, previewChipProps), {}, {
          label: fileObject.file.name,
          onDelete: handleRemove(i)
        })));
      })
    }));
  }
  return /*#__PURE__*/jsx(Grid, _objectSpread2(_objectSpread2({
    spacing: 8
  }, previewGridProps.container), {}, {
    container: true,
    className: clsx(classes.root, previewGridClasses.container),
    children: fileObjects.map(function (fileObject, i) {
      var _fileObject$file$name2, _fileObject$file2;
      return /*#__PURE__*/createElement(Grid, _objectSpread2(_objectSpread2({
        xs: 4
      }, previewGridProps.item), {}, {
        item: true,
        key: "".concat((_fileObject$file$name2 = (_fileObject$file2 = fileObject.file) === null || _fileObject$file2 === void 0 ? void 0 : _fileObject$file2.name) !== null && _fileObject$file$name2 !== void 0 ? _fileObject$file$name2 : 'file', "-").concat(i),
        className: clsx(classes.imageContainer, previewGridClasses.item)
      }), getPreviewIcon(fileObject, classes), showFileNames && /*#__PURE__*/jsx(Typography, {
        variant: "body1",
        component: "p",
        children: fileObject.file.name
      }), /*#__PURE__*/jsx(Fab, {
        onClick: handleRemove(i),
        "aria-label": "Delete",
        className: classes.removeButton,
        children: /*#__PURE__*/jsx(DeleteIcon, {})
      }));
    })
  }));
}
PreviewList.propTypes = {
  classes: PropTypes.object.isRequired,
  fileObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPreviewIcon: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  previewChipProps: PropTypes.object,
  previewGridClasses: PropTypes.object,
  previewGridProps: PropTypes.object,
  showFileNames: PropTypes.bool,
  useChipsForPreview: PropTypes.bool
};
var PreviewList$1 = withStyles(styles, {
  name: 'MuiDropzonePreviewList',
  defaultTheme: defaultTheme
})(PreviewList);

export { PreviewList$1 as default };
//# sourceMappingURL=PreviewList.js.map
