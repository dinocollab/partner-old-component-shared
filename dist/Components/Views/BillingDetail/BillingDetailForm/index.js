import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Box } from '@mui/material';
import { Component } from 'react';
import { BillingDetailInfo } from '../SubComponent/index.js';
import { ErrorAll, BoxInfo } from '../../../SubComponent/index.js';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

var BillingDetailForm = /*#__PURE__*/function (_Component) {
  function BillingDetailForm() {
    _classCallCheck(this, BillingDetailForm);
    return _callSuper(this, BillingDetailForm, arguments);
  }
  _inherits(BillingDetailForm, _Component);
  return _createClass(BillingDetailForm, [{
    key: "render",
    value: function render() {
      return jsx(Box, {
        sx: {
          flex: 1,
          display: 'flex'
        },
        children: jsx(ErrorAll, {
          MessageError: this.props.MessageError,
          children: jsx(BoxInfo, {
            icon: jsx(RequestQuoteIcon, {
              color: 'info'
            }),
            mb: false,
            title: this.props.Name || 'BillingDetail',
            children: jsx(BillingDetailInfo, {
              IdForm: 'FormKey.Personal',
              Report: this.props.Report,
              IsForm: false,
              Model: this.props.data,
              onBlur: this.props.onBlur,
              MessageError: this.props.MessageError,
              Actions: this.props.Actions,
              fetchData: this.props.fetchData
            })
          })
        })
      });
    }
  }]);
}(Component);

export { BillingDetailForm as default };
//# sourceMappingURL=index.js.map
