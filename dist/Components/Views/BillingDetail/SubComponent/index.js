import { objectSpread2 as _objectSpread2 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Box, FormControl, FormGroup } from '@mui/material';
import * as SubLocal from 'partner-local-lib/SubComponents';
import { WrapFrom, CreateSelect2 } from '../../../SubComponent/index.js';
import { getErrorMessage } from '../../../Helper/index.js';

// const SelectMetaFile = SubCommon.CreateSelect2<ISelectModel>()
var SelectAsset = CreateSelect2();
var BillingDetailInfo = function BillingDetailInfo(props) {
  var _props$Model, _props$Model2, _props$Model4, _props$Model5, _props$Model$Percenta, _props$Model6;
  var fetchAllAsset = function fetchAllAsset(labelName) {
    // return (value: string) => props.fetchAssetSelects_V2(value, labelName)
    return function (value) {
      return props.fetchData(value, labelName);
    };
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
      children: [jsx("input", {
        hidden: true,
        defaultValue: (_props$Model = props.Model) === null || _props$Model === void 0 ? void 0 : _props$Model.Id,
        name: 'Id'
      }), jsx(FormControl, {
        fullWidth: true,
        sx: {
          m: 1
        },
        variant: 'outlined',
        children: jsx(FormGroup, {
          className: 'group-input',
          children: jsx(SelectAsset, _objectSpread2(_objectSpread2({
            title: 'AssetId',
            fetchData: fetchAllAsset(props.Report.ResourceId),
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
            defaultValue: (_props$Model2 = props.Model) === null || _props$Model2 === void 0 ? void 0 : _props$Model2.ResourceId,
            searchInitial: function searchInitial(model) {
              var _props$Model3;
              return ((_props$Model3 = props.Model) === null || _props$Model3 === void 0 ? void 0 : _props$Model3.ResourceId) === model.Id;
            }
          }, getErrorMessage(props.MessageError, 'ResourceId')), {}, {
            onBlur: function onBlur() {
              props.onBlur && props.onBlur('ResourceId');
            },
            name: 'ResourceId'
          }))
        })
      }), jsx(FormControl, {
        sx: {
          m: 1,
          width: '40ch'
        },
        variant: 'outlined',
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          defaultValue: (_props$Model4 = props.Model) === null || _props$Model4 === void 0 ? void 0 : _props$Model4.TotalMoney,
          MaxLength: 250,
          Title: 'TotalMoney',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('TotalMoney');
          }
        }, getErrorMessage(props.MessageError, 'TotalMoney')), {}, {
          inputProps: {
            multiline: false,
            name: 'TotalMoney',
            type: 'number',
            inputProps: {
              maxLength: 250,
              step: '0.01'
            }
          }
        }))
      }), jsx(FormControl, {
        sx: {
          m: 1,
          width: '40ch'
        },
        variant: 'outlined',
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          defaultValue: (_props$Model5 = props.Model) === null || _props$Model5 === void 0 ? void 0 : _props$Model5.Views,
          MaxLength: 250,
          Title: 'Views',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('Views');
          }
        }, getErrorMessage(props.MessageError, 'Views')), {}, {
          inputProps: {
            multiline: false,
            name: 'Views',
            type: 'number'
          }
        }))
      }), jsx(FormControl, {
        sx: {
          m: 1,
          width: '40ch'
        },
        variant: 'outlined',
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          defaultValue: (_props$Model$Percenta = (_props$Model6 = props.Model) === null || _props$Model6 === void 0 ? void 0 : _props$Model6.Percentage) !== null && _props$Model$Percenta !== void 0 ? _props$Model$Percenta : 25,
          MaxLength: 250,
          Title: 'Percentage',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('Percentage');
          }
        }, getErrorMessage(props.MessageError, 'Percentage')), {}, {
          inputProps: {
            multiline: false,
            name: 'Percentage',
            type: 'number'
          }
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

export { BillingDetailInfo };
//# sourceMappingURL=index.js.map
