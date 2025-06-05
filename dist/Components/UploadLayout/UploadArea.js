import { inherits as _inherits, createClass as _createClass, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { styled, Box } from '@mui/material';
import { Component } from 'react';
import DropzoneArea from '../DropZone/components/DropzoneArea.js';
import '../DropZone/components/DropzoneAreaBase.js';
import '../DropZone/components/DropzoneDialog.js';
import '../DropZone/components/DropzoneDialogBase.js';

var UploadArea = /*#__PURE__*/function (_Component) {
  function UploadArea() {
    _classCallCheck(this, UploadArea);
    return _callSuper(this, UploadArea, arguments);
  }
  _inherits(UploadArea, _Component);
  return _createClass(UploadArea, [{
    key: "render",
    value: function render() {
      return jsx(Wrapper, {
        children: jsx(DropzoneArea, _objectSpread2({
          dropzoneText: "Drag and drop files here or click",
          showPreviewsInDropzone: false,
          maxFileSize: 50 * Math.pow(1024, 3),
          showAlerts: ['error'],
          filesLimit: 2000,
          onDrop: this.props.OnDroneChange
        }, this.props))
      });
    }
  }]);
}(Component);
var Wrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  margin: '10px',
  '& .MuiDropzoneArea-root': {
    minHeight: 'auto',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1976d2'
  },
  '& .MuiSvgIcon-root': {
    color: '#1976d2'
  },
  '& .MuiDropzoneArea-active.MuiDropzoneArea-invalid': {
    borderColor: '#979797',
    backgroundImage: 'repeating-linear-gradient(-45deg, #dedede, #dedede 25px, #979797 25px, #979797 50px)',
    color: '#fff'
  },
  '& .MuiDropzoneArea-active.MuiDropzoneArea-invalid .MuiSvgIcon-root': {
    color: '#fff'
  }
});

export { UploadArea as default };
//# sourceMappingURL=UploadArea.js.map
