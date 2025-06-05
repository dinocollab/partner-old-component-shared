import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Box } from '@mui/material';
import { Component } from 'react';
import { BillingInfo } from '../SubBillingFormComponent/index.js';
import { ErrorAll, BoxInfo } from '../../../SubComponent/index.js';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

var BillingForm = /*#__PURE__*/function (_Component) {
  function BillingForm() {
    _classCallCheck(this, BillingForm);
    return _callSuper(this, BillingForm, arguments);
  }
  _inherits(BillingForm, _Component);
  return _createClass(BillingForm, [{
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
            title: this.props.Name || 'Billing',
            children: jsx(BillingInfo, {
              IdForm: 'FormKey.Personal',
              IsEdit: this.props.IsEdit,
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

export { BillingForm as default };
//# sourceMappingURL=index.js.map
