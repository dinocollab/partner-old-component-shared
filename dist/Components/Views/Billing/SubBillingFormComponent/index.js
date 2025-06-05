import { slicedToArray as _slicedToArray, objectSpread2 as _objectSpread2 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { Box, FormControl, FormGroup, FormControlLabel, Checkbox, MenuItem } from '@mui/material';
import * as SubLocal from 'partner-local-lib/SubComponents';
import { WrapFrom, CreateSelect2, DatePickers } from '../../../SubComponent/index.js';
import { getErrorMessage } from '../../../Helper/index.js';
import { AssetResourceType } from '../../../Models/index.js';

var SelectUser = CreateSelect2();
var BillingInfo = function BillingInfo(props) {
  var _props$Model$NoDetail, _props$Model, _props$Model2, _props$Model3, _props$Model5, _props$Model6, _props$Model7, _props$Model8, _props$Model9, _props$Model0, _props$Model1, _props$Model$Resource, _props$Model10, _props$Model11;
  var _useState = useState((_props$Model$NoDetail = (_props$Model = props.Model) === null || _props$Model === void 0 ? void 0 : _props$Model.NoDetails) !== null && _props$Model$NoDetail !== void 0 ? _props$Model$NoDetail : false),
    _useState2 = _slicedToArray(_useState, 2),
    NoDetails = _useState2[0],
    setNoDetails = _useState2[1];
  var handleChange = function handleChange(event) {
    setNoDetails(event.target.checked);
  };
  return jsx(WrapFrom, {
    Id: props.IdForm,
    onSubmit: props.onSubmit,
    IsForm: props.IsForm,
    children: jsxs(Box, {
      sx: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '800px',
        justifyContent: 'space-between'
      },
      children: [jsx(FormControl, {
        fullWidth: true,
        sx: {
          m: 1
        },
        variant: 'outlined',
        children: jsxs(FormGroup, {
          className: 'group-input',
          children: [jsx("input", {
            hidden: true,
            defaultValue: (_props$Model2 = props.Model) === null || _props$Model2 === void 0 ? void 0 : _props$Model2.Id,
            name: 'Id'
          }), jsx(SelectUser, _objectSpread2(_objectSpread2({
            title: 'LabelName',
            // fetchData={props.fetchLabelSelects}
            fetchData: props.fetchData,
            disabled: props.IsEdit,
            SelectValue: function SelectValue(m) {
              return m.Id;
            },
            GenerateLabel: function GenerateLabel(m) {
              return m.Name;
            },
            selectedItem: {
              Id: '',
              Name: ''
            },
            isOptionEqualToValue: function isOptionEqualToValue(m1, m2) {
              return m1.Id === m2.Id;
            },
            defaultValue: (_props$Model3 = props.Model) === null || _props$Model3 === void 0 ? void 0 : _props$Model3.ResourceId,
            searchInitial: function searchInitial(model) {
              var _props$Model4;
              return ((_props$Model4 = props.Model) === null || _props$Model4 === void 0 ? void 0 : _props$Model4.ResourceId) === model.Id;
            }
          }, getErrorMessage(props.MessageError, 'ResourceId')), {}, {
            onBlur: function onBlur() {
              props.onBlur && props.onBlur('ResourceId');
            },
            name: 'ResourceId'
          }))]
        })
      }), jsx(FormControl, {
        fullWidth: true,
        sx: {
          m: 1
        },
        variant: 'outlined',
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 250,
          Title: 'Name',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('Name');
          }
        }, getErrorMessage(props.MessageError, 'Name')), {}, {
          inputProps: {
            multiline: false,
            name: 'Name'
          },
          defaultValue: (_props$Model5 = props.Model) === null || _props$Model5 === void 0 ? void 0 : _props$Model5.Name
        }))
      }), jsx(FormControl, {
        sx: {
          m: 1,
          width: '40ch'
        },
        variant: 'outlined',
        children: jsx(DatePickers, _objectSpread2(_objectSpread2({
          MaxLength: 250,
          Title: 'Start time',
          name: 'StartTime',
          inputFormat: 'dd/MM/yyyy',
          // onBlur={() => props.onBlur && props.onBlur("ForMonth")}
          Onchange: function Onchange() {
            return props.onBlur && props.onBlur('StartTime');
          }
        }, getErrorMessage(props.MessageError, 'StartTime')), {}, {
          defaultValue: (_props$Model6 = props.Model) !== null && _props$Model6 !== void 0 && _props$Model6.StartTime ? new Date((_props$Model7 = props.Model) === null || _props$Model7 === void 0 ? void 0 : _props$Model7.StartTime) : new Date()
        }))
      }), jsx(FormControl, {
        sx: {
          m: 1,
          width: '40ch'
        },
        variant: 'outlined',
        children: jsx(DatePickers, _objectSpread2(_objectSpread2({
          MaxLength: 250,
          Title: 'End time',
          name: 'EndTime',
          inputFormat: 'dd/MM/yyyy',
          // onBlur={() => props.onBlur && props.onBlur("ForMonth")}
          Onchange: function Onchange() {
            return props.onBlur && props.onBlur('EndTime');
          }
        }, getErrorMessage(props.MessageError, 'EndTime')), {}, {
          defaultValue: (_props$Model8 = props.Model) !== null && _props$Model8 !== void 0 && _props$Model8.EndTime ? new Date((_props$Model9 = props.Model) === null || _props$Model9 === void 0 ? void 0 : _props$Model9.EndTime) : new Date()
        }))
      }), jsxs(FormControl, {
        sx: {
          m: 1,
          width: '40ch'
        },
        fullWidth: true,
        children: [jsx("input", {
          name: 'NoDetails',
          hidden: true,
          value: NoDetails.toString()
        }), jsx(FormControlLabel, {
          disabled: props.IsEdit,
          control: jsx(Checkbox, {
            defaultChecked: (_props$Model0 = props.Model) === null || _props$Model0 === void 0 ? void 0 : _props$Model0.NoDetails,
            onChange: handleChange
          }),
          label: 'No details'
        })]
      }), jsxs(FormControl, {
        sx: {
          m: 1,
          width: '40ch'
        },
        fullWidth: true,
        children: [props.IsEdit ? jsx("input", {
          hidden: true,
          defaultValue: (_props$Model1 = props.Model) === null || _props$Model1 === void 0 ? void 0 : _props$Model1.ResourceType,
          name: 'ResourceType'
        }) : jsx(Fragment, {}), jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 250,
          disabled: props.IsEdit,
          // disabled={!props.IsAdmin}
          Title: 'ResourceType',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('ResourceType');
          }
        }, getErrorMessage(props.MessageError, 'ResourceType')), {}, {
          inputProps: {
            multiline: false,
            name: 'ResourceType',
            select: true,
            children: Object.keys(AssetResourceType).map(function (option) {
              return jsx(MenuItem, {
                value: option,
                children: option
              }, option);
            })
          },
          defaultValue: (_props$Model$Resource = (_props$Model10 = props.Model) === null || _props$Model10 === void 0 ? void 0 : _props$Model10.ResourceType) !== null && _props$Model$Resource !== void 0 ? _props$Model$Resource : AssetResourceType.AudioLabel
        }))]
      }), !NoDetails ? jsx("input", {
        name: 'Payout',
        hidden: true,
        value: 0
      }) : jsx(FormControl, {
        fullWidth: true,
        sx: {
          m: 1
        },
        variant: 'outlined',
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          Title: 'Payout',
          MaxLength: 250,
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('Payout');
          }
        }, getErrorMessage(props.MessageError, 'Payout')), {}, {
          inputProps: {
            multiline: false,
            name: 'Payout',
            type: 'number',
            inputProps: {
              maxLength: 250,
              step: '0.01'
            }
          },
          defaultValue: (_props$Model11 = props.Model) === null || _props$Model11 === void 0 ? void 0 : _props$Model11.Payout
        }))
      }), jsx(FormControl, {
        fullWidth: true,
        sx: {
          m: 1
        },
        variant: 'outlined',
        children: props.Actions
      })]
    })
  });
};
var PaymentInfo = function PaymentInfo(props) {
  var _props$Model12, _props$Model13, _props$Model14, _props$Model15, _props$Model16, _props$Model17;
  return jsx(WrapFrom, {
    Id: props.IdForm,
    onSubmit: props.onSubmit,
    IsForm: props.IsForm,
    children: jsxs(Box, {
      sx: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '800px',
        justifyContent: 'space-between'
      },
      children: [jsx("input", {
        hidden: true,
        name: 'ReportId',
        defaultValue: (_props$Model12 = props.Model) === null || _props$Model12 === void 0 ? void 0 : _props$Model12.ReportId
      }), jsx("input", {
        hidden: true,
        name: 'Name',
        defaultValue: (_props$Model13 = props.Model) === null || _props$Model13 === void 0 ? void 0 : _props$Model13.Name
      }), jsx("input", {
        hidden: true,
        name: 'USDRate',
        defaultValue: (_props$Model14 = props.Model) === null || _props$Model14 === void 0 ? void 0 : _props$Model14.USDRate
      }), jsx("input", {
        hidden: true,
        name: 'Payout',
        defaultValue: (_props$Model15 = props.Model) === null || _props$Model15 === void 0 ? void 0 : _props$Model15.Payout
      }), jsx(FormControl, {
        fullWidth: true,
        sx: {
          m: 1
        },
        variant: 'outlined',
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 250,
          Title: 'TransactionId',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('TransactionId');
          }
        }, getErrorMessage(props.MessageError, 'TransactionId')), {}, {
          inputProps: {
            multiline: false,
            name: 'TransactionId'
          },
          defaultValue: (_props$Model16 = props.Model) === null || _props$Model16 === void 0 ? void 0 : _props$Model16.TransactionId
        }))
      }), jsx(FormControl, {
        fullWidth: true,
        sx: {
          m: 1
        },
        variant: 'outlined',
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 500,
          Title: 'Description',
          maxRows: 3,
          minRows: 3,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('Description');
          }
        }, getErrorMessage(props.MessageError, 'Description')), {}, {
          inputProps: {
            name: 'Description'
          },
          defaultValue: (_props$Model17 = props.Model) === null || _props$Model17 === void 0 ? void 0 : _props$Model17.Description
        }))
      }), jsx(FormControl, {
        fullWidth: true,
        sx: {
          m: 1
        },
        variant: 'outlined',
        children: props.Actions
      })]
    })
  });
};

export { BillingInfo, PaymentInfo };
//# sourceMappingURL=index.js.map
