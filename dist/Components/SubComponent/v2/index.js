import { objectSpread2 as _objectSpread2 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Box, Typography } from '@mui/material';
import * as SubLocal from 'partner-local-lib/SubComponents';
import { getErrorMessage } from '../../Helper/index.js';

var ErrorAll = function ErrorAll(props) {
  return jsx(SubLocal.ErrorBox, _objectSpread2(_objectSpread2({
    position: 'Top'
  }, getErrorMessage(props.MessageError, 'All')), {}, {
    children: props.children
  }));
};
var BoxInfo = function BoxInfo(props) {
  var _props$TitleExtends;
  return jsx(Box, {
    sx: _objectSpread2({
      flex: 1,
      padding: '10px',
      marginBottom: props.mb === false ? '0' : '20px'
    }, props.sx || {}),
    className: props.IsBorder === false ? '' : 'card',
    children: jsxs(ErrorAll, {
      MessageError: props.MessageError,
      children: [jsxs(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [jsxs(Box, {
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [jsx(Box, {
            sx: {
              margin: 1
            },
            children: props.icon
          }), jsx(Typography, {
            variant: props.variant || 'h5',
            component: 'div',
            children: props.title
          })]
        }), jsx(Box, {
          sx: {
            marginTop: '-30px'
          },
          children: (_props$TitleExtends = props.TitleExtends) !== null && _props$TitleExtends !== void 0 ? _props$TitleExtends : ''
        })]
      }), props.children]
    })
  });
};

export { BoxInfo, ErrorAll };
//# sourceMappingURL=index.js.map
