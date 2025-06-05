import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, objectSpread2 as _objectSpread2, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Box, Typography } from '@mui/material';
import { createContext, Component } from 'react';
import { CreateTable } from 'partner-local-lib/GridTable';
import InputFormModal from './InputFormModal/index.js';
import { DeepClone as _DeepClone } from '../Helper/index.js';

var TableTemplateContext = /*#__PURE__*/createContext({});
var TemplateTableBase = /*#__PURE__*/function (_Component) {
  function TemplateTableBase() {
    _classCallCheck(this, TemplateTableBase);
    return _callSuper(this, TemplateTableBase, arguments);
  }
  _inherits(TemplateTableBase, _Component);
  return _createClass(TemplateTableBase);
}(Component);
var CreateTemplateTable = function CreateTemplateTable(optionTables, OptionExtends) {
  //define table
  var TemplateTable = /*#__PURE__*/function (_Component2) {
    function TemplateTable(props) {
      var _this;
      _classCallCheck(this, TemplateTable);
      _this = _callSuper(this, TemplateTable, [props]);
      _defineProperty(_this, "OpenModal", function (Type, Model) {
        var _this$refInputModel;
        var IsFull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        (_this$refInputModel = _this.refInputModel) === null || _this$refInputModel === void 0 || _this$refInputModel.open(Type, Model, IsFull);
      });
      _defineProperty(_this, "CloseModal", function () {
        var _this$refInputModel2;
        (_this$refInputModel2 = _this.refInputModel) === null || _this$refInputModel2 === void 0 || _this$refInputModel2.handleClose();
      });
      // static defaultProps: Partial<TemplateTableProps> = {
      //     PanelAction, ItemRowMenu,
      //     CreateForm: FormTest,
      //     EditForm: FormTest
      // }
      _defineProperty(_this, "InitialTable", function () {
        var tempOptions = _DeepClone(optionTables);
        if (OptionExtends) {
          Object.assign(tempOptions.ConfigTable.Options, OptionExtends);
        }
        if (tempOptions.MenuField) {
          var FieldConfig = tempOptions.ConfigTable.Options[tempOptions.MenuField];
          var ItemMenu = _this.props.ItemRowMenu;
          if (FieldConfig && ItemMenu) {
            var renderCell = FieldConfig.renderCell;
            FieldConfig.renderCell = function (params) {
              return jsx(ItemMenu, {
                data: params.row,
                onDelete: function onDelete() {
                  return _this.onDelete(params.row);
                },
                onEdit: function onEdit() {
                  return _this.onEdit(params.row);
                },
                onDetailModal: function onDetailModal() {
                  return _this.OpenModal('DETAIL', params.row);
                },
                children: renderCell ? renderCell(params) : params.value
              });
            };
          }
        }
        return CreateTable(tempOptions.ConfigTable);
      });
      _defineProperty(_this, "Table", void 0);
      _defineProperty(_this, "GridState", void 0);
      _defineProperty(_this, "refApiTable", void 0);
      _defineProperty(_this, "onStateChange", function (GridState) {
        _this.GridState = GridState;
      });
      _defineProperty(_this, "getSelectedRows", function () {
        if (_this.GridState) {
          return _this.GridState.selection.map(function (id) {
            var _this$GridState;
            return (_this$GridState = _this.GridState) === null || _this$GridState === void 0 ? void 0 : _this$GridState.rows.idRowsLookup[id];
          });
        }
        return [];
      });
      _defineProperty(_this, "onSelectionModelChange", function (selectionModel, details) {
        // const selections = this.getSelectedRows()
        // this.props.UpsetUserSelected(this.getSelectedRows())
      });
      _defineProperty(_this, "onCreate", function () {
        var _this$refInputModel3;
        (_this$refInputModel3 = _this.refInputModel) === null || _this$refInputModel3 === void 0 || _this$refInputModel3.open('CREATE');
      });
      _defineProperty(_this, "onEdit", function (data) {
        var _this$refInputModel4;
        (_this$refInputModel4 = _this.refInputModel) === null || _this$refInputModel4 === void 0 || _this$refInputModel4.open('EDIT', data);
      });
      _defineProperty(_this, "onDelete", function (data) {
        var _this$refInputModel5;
        // this.props.onDelete && this.props.onDelete(data)
        (_this$refInputModel5 = _this.refInputModel) === null || _this$refInputModel5 === void 0 || _this$refInputModel5.open('DELETE', data);
      });
      _defineProperty(_this, "OpenDetailModal", function (Model) {
        var _this$refInputModel6;
        // this.props.onDelete && this.props.onDelete(data)
        (_this$refInputModel6 = _this.refInputModel) === null || _this$refInputModel6 === void 0 || _this$refInputModel6.open('DETAIL', Model, true);
      });
      _defineProperty(_this, "refInputModel", null);
      _defineProperty(_this, "renderModal", function () {
        var _this$props = _this.props,
          CreateForm = _this$props.CreateForm,
          EditForm = _this$props.EditForm,
          ConfirmDelete = _this$props.ConfirmDelete,
          DetailPage = _this$props.DetailPage,
          ModelView = _this$props.ModelView;
        if (CreateForm || EditForm || DetailPage || ConfirmDelete || ModelView) {
          return jsx(InputFormModal, {
            ref: function ref(_ref) {
              return _this.refInputModel = _ref;
            },
            MapForm: {
              CREATE: CreateForm,
              EDIT: EditForm,
              DELETE: ConfirmDelete,
              DETAIL: DetailPage,
              MODAL: ModelView
            }
          });
        }
        return '';
      });
      _this.Table = _this.InitialTable();
      return _this;
    }
    _inherits(TemplateTable, _Component2);
    return _createClass(TemplateTable, [{
      key: "render",
      value: function render() {
        var _this$props$InnerProp;
        var Table = this.Table;
        var _this$props2 = this.props,
          PanelActionItem = _this$props2.PanelAction;
          _this$props2.CreateForm;
          _this$props2.EditForm;
        return jsx(Box, {
          sx: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          },
          children: jsxs(TableTemplateContext.Provider, {
            value: this,
            children: [this.props.TableName || PanelActionItem ? jsxs(Box, {
              sx: {
                display: 'flex',
                justifyContent: 'flex-end',
                margin: '5px',
                flexWrap: 'wrap',
                pt: '6px'
              },
              children: [jsx(Box, {
                sx: {
                  display: 'flex',
                  flex: 1,
                  alignItems: 'center'
                },
                children: typeof this.props.TableName === 'string' ? jsx(Typography, {
                  variant: 'h5',
                  children: this.props.TableName
                }) : this.props.TableName
              }), PanelActionItem ? jsx(Box, {
                sx: {
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  flex: 1
                },
                children: jsx(PanelActionItem, {
                  onCreate: this.onCreate,
                  ButtonText: 'Create'
                })
              }) : '']
            }) : jsx(Fragment, {}), jsx(Table, {
              InnerProps: _objectSpread2({
                checkboxSelection: true,
                disableSelectionOnClick: true,
                onStateChange: this.onStateChange,
                onSelectionModelChange: this.onSelectionModelChange,
                sx: {
                  border: 0,
                  '& .MuiTablePagination-root .MuiToolbar-root > p': {
                    margin: 0
                  },
                  '& .MuiDataGrid-columnHeaderTitle': {
                    fontWeight: 700,
                    color: '#3c3c3c'
                  }
                }
              }, (_this$props$InnerProp = this.props.InnerProps) !== null && _this$props$InnerProp !== void 0 ? _this$props$InnerProp : {}),
              data: this.props.data
            }), this.renderModal()]
          })
        });
      }
    }]);
  }(Component);
  return TemplateTable;
};

export { CreateTemplateTable, TableTemplateContext, TemplateTableBase };
//# sourceMappingURL=index.js.map
