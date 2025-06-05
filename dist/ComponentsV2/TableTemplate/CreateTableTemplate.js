import { inherits as _inherits, createClass as _createClass, objectSpread2 as _objectSpread2, asyncToGenerator as _asyncToGenerator, defineProperty as _defineProperty, classCallCheck as _classCallCheck, callSuper as _callSuper, regenerator as _regenerator } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Component } from 'react';
import { styled, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { CustomerGridToolbar } from './CustomerGridToolbar.js';
import { CustomGridFilterPanel } from './CustomGridFilterPanel.js';
import { TableTemplateContext } from './TableTemplateContext.js';
import NoRowsOverlay from './NoRowsOverlay.js';

var CreateTableTemplate = function CreateTableTemplate(mode, option) {
  var _TableTemplate;
  return _TableTemplate = /*#__PURE__*/function (_Component) {
    function TableTemplate(props) {
      var _this;
      _classCallCheck(this, TableTemplate);
      _this = _callSuper(this, TableTemplate, [props]);
      _defineProperty(_this, "AbortController", void 0);
      _defineProperty(_this, "generateColumns", function () {
        return Object.keys(option.config).map(function (key) {
          var opt = _objectSpread2(_objectSpread2({}, option.config[key]), {}, {
            field: key
          });
          if (mode === 'Server' && !opt.type && opt.filterable !== false) throw new Error("When mode is Server you need set type for '".concat(key, "' column in 'GridColDef'"));
          if (option.filterOperators) {
            opt.filterOperators = option.filterOperators(opt);
          }
          return opt;
        });
      });
      _defineProperty(_this, "columns", void 0);
      _defineProperty(_this, "getPageInfo", function () {
        if ('PageInfo' in _this.props && _this.props.PageInfo) {
          return _this.props.PageInfo;
        }
        return _this.state.PageInfo;
      });
      _defineProperty(_this, "getPagination", function () {
        var pageInfo = _this.getPageInfo();
        return {
          page: pageInfo.page,
          pageSize: pageInfo.pageSize
        };
      });
      _defineProperty(_this, "GetDataGridProp", function () {
        var _DataGridProp;
        if (mode === 'Server') {
          var _pageInfo$rowTotal;
          var pageInfo = _this.getPageInfo();
          _DataGridProp = {
            initialState: {
              pagination: _this.getPagination()
            },
            rowCount: (_pageInfo$rowTotal = pageInfo.rowTotal) !== null && _pageInfo$rowTotal !== void 0 ? _pageInfo$rowTotal : 0,
            rows: pageInfo.data,
            loading: _this.state.isLoading,
            onPageChange: _this.onPageChange,
            onPageSizeChange: _this.onPageSizeChange,
            onFilterModelChange: _this.onServerFilterChange,
            onSortModelChange: _this.onSortModelChange,
            filterMode: 'server',
            paginationMode: 'server',
            sortingMode: 'server',
            filterModel: _this.state.FilterModel,
            sortModel: _this.state.GridSortModel
          };
        } else if (mode === 'Client' && 'data' in _this.props) {
          _DataGridProp = {
            rows: _this.props.data,
            componentsProps: {
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: {
                  debounceMs: 500
                }
              }
            }
          };
        } else {
          _DataGridProp = {
            rows: []
          };
        }
        return _DataGridProp;
      });
      _defineProperty(_this, "onRowSelectionModelChange", function (rowSelectionModel, details) {
        _this.setState({
          details: details,
          selectionIds: rowSelectionModel
        });
      });
      _defineProperty(_this, "onServerFilterChange", function (model, details) {
        _this.setState({
          FilterModel: model,
          isLoading: true
        }, function () {
          return _this.FetchData({
            FilterModel: model,
            details: details
          });
        });
      });
      _defineProperty(_this, "onPageChange", function (page, details) {
        _this.PageInfoCache.page = page;
        _this.PageNavidateFetch(details);
      });
      _defineProperty(_this, "onPageSizeChange", function (pageSize, details) {
        _this.PageInfoCache.pageSize = pageSize;
        _this.PageNavidateFetch(details);
      });
      _defineProperty(_this, "timer", 0);
      _defineProperty(_this, "PageInfoCache", {});
      _defineProperty(_this, "PageNavidateFetch", function (details) {
        clearTimeout(_this.timer);
        _this.timer = setTimeout(function () {
          _this.setState({
            PaginationModel: _this.PageInfoCache,
            isLoading: true
          });
          _this.FetchData({
            PaginationModel: _this.PageInfoCache,
            details: details
          });
        }, 250);
      });
      _defineProperty(_this, "onSortModelChange", function (model, details) {
        _this.setState({
          GridSortModel: model,
          isLoading: true
        });
        _this.FetchData({
          GridSortModel: model,
          details: details
        });
      });
      _defineProperty(_this, "FetchData", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(model) {
          var _this$AbortController;
          var data;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                (_this$AbortController = _this.AbortController) === null || _this$AbortController === void 0 || _this$AbortController.abort();
                if (!(mode === 'Server' && 'ServerOption' in _this.props)) {
                  _context.n = 4;
                  break;
                }
                _context.p = 1;
                _this.AbortController = new AbortController();
                _context.n = 2;
                return _this.props.ServerOption.FetchFilterData(Object.assign({}, {
                  PaginationModel: _this.state.PaginationModel,
                  FilterModel: _this.state.FilterModel,
                  GridSortModel: _this.state.GridSortModel,
                  abort: _this.AbortController.signal
                }, model));
              case 2:
                data = _context.v;
                if (_this.props.IsInnerState === true) {
                  _this.setState({
                    isLoading: false,
                    PageInfo: data !== null && data !== void 0 ? data : TableTemplate.defaultState.PageInfo
                  });
                } else {
                  _this.setState({
                    isLoading: false
                  });
                }
                _context.n = 4;
                break;
              case 3:
                _context.p = 3;
                _context.v;
                _this.setState({
                  isLoading: false
                });
              case 4:
                return _context.a(2);
            }
          }, _callee, null, [[1, 3]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      _defineProperty(_this, "isServerSide", function () {
        return mode === 'Server';
      });
      _this.state = TableTemplate.defaultState;
      _this.columns = _this.initial();
      return _this;
    }
    _inherits(TableTemplate, _Component);
    return _createClass(TableTemplate, [{
      key: "initial",
      value: function initial() {
        if (option.MenuField) {
          var MenuField = typeof option.MenuField === 'function' ? option.MenuField(option) : option.MenuField;
          var FieldConfig = option.config[MenuField];
          var ItemMenu = this.props.ItemRowMenu;
          if (FieldConfig && ItemMenu) {
            var renderCell = FieldConfig.renderCell;
            FieldConfig.renderCell = function (params) {
              return jsx(ItemMenu, {
                data: params.row,
                children: renderCell ? renderCell(params) : params.value
              });
            };
          }
        }
        return this.generateColumns();
      }
    }, {
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var _this$AbortController2, data;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                if (!(mode === 'Server' && 'ServerOption' in this.props)) {
                  _context2.n = 4;
                  break;
                }
                (_this$AbortController2 = this.AbortController) === null || _this$AbortController2 === void 0 || _this$AbortController2.abort();
                if (!(mode === 'Server' && 'ServerOption' in this.props)) {
                  _context2.n = 4;
                  break;
                }
                _context2.p = 1;
                this.AbortController = new AbortController();
                _context2.n = 2;
                return this.props.ServerOption.FetchInitialData();
              case 2:
                data = _context2.v;
                this.setState({
                  isLoading: false,
                  PageInfo: data !== null && data !== void 0 ? data : TableTemplate.defaultState.PageInfo
                });
                _context2.n = 4;
                break;
              case 3:
                _context2.p = 3;
                _context2.v;
                this.setState({
                  isLoading: false
                });
              case 4:
                return _context2.a(2);
            }
          }, _callee2, this, [[1, 3]]);
        }));
        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }
        return componentDidMount;
      }()
    }, {
      key: "render",
      value: function render() {
        var _this$props$InnerProp;
        var CRUDPannel = this.props.CRUDPannel || function () {
          return jsx(Fragment, {});
        };
        return jsx(TableTemplateContext.Provider, {
          value: this,
          children: jsxs(Wrapper, {
            sx: this.props.sxWrapper,
            children: [jsx(CRUDPannel, {}), jsx(DataGrid
            // row
            , _objectSpread2(_objectSpread2({
              // row
              pagination: true,
              getRowId: option.getRowId,
              columns: this.columns
            }, this.GetDataGridProp()), {}, {
              components: {
                Toolbar: CustomerGridToolbar,
                FilterPanel: function FilterPanel(props) {
                  return jsx(CustomGridFilterPanel, _objectSpread2({}, props));
                },
                NoRowsOverlay: NoRowsOverlay
              },
              componentsProps: {
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: {
                    debounceMs: 500
                  }
                }
              },
              style: {
                border: 0
              },
              checkboxSelection: true,
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
            }, (_this$props$InnerProp = this.props.InnerProps) !== null && _this$props$InnerProp !== void 0 ? _this$props$InnerProp : {}))]
          })
        });
      }
    }]);
  }(Component), _defineProperty(_TableTemplate, "defaultState", {
    PageInfo: {
      data: [],
      rowTotal: 0,
      page: 0,
      pageSize: 0
    },
    isLoading: true
  }), _TableTemplate;
};
var Wrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #e0e0e0',
  borderRadius: '5px'
});

export { CreateTableTemplate };
//# sourceMappingURL=CreateTableTemplate.js.map
