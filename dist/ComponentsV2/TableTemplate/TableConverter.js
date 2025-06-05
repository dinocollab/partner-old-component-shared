import { createClass as _createClass, classCallCheck as _classCallCheck, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { GridLinkOperator } from '@mui/x-data-grid';
import { EOperator } from './type.js';

var TableConverterBase = /*#__PURE__*/_createClass(function TableConverterBase() {
  var _this = this;
  _classCallCheck(this, TableConverterBase);
  _defineProperty(this, "graphql", function (model, config) {
    var _ref, _model$PaginationMode, _model$PaginationMode2, _config$pagination, _ref2, _model$PaginationMode3, _model$PaginationMode4, _config$pagination2;
    var key = _this.graphqlKey(model, config);
    var page = (_ref = (_model$PaginationMode = (_model$PaginationMode2 = model.PaginationModel) === null || _model$PaginationMode2 === void 0 ? void 0 : _model$PaginationMode2.page) !== null && _model$PaginationMode !== void 0 ? _model$PaginationMode : (_config$pagination = config.pagination) === null || _config$pagination === void 0 ? void 0 : _config$pagination.page) !== null && _ref !== void 0 ? _ref : 0;
    var take = (_ref2 = (_model$PaginationMode3 = (_model$PaginationMode4 = model.PaginationModel) === null || _model$PaginationMode4 === void 0 ? void 0 : _model$PaginationMode4.pageSize) !== null && _model$PaginationMode3 !== void 0 ? _model$PaginationMode3 : (_config$pagination2 = config.pagination) === null || _config$pagination2 === void 0 ? void 0 : _config$pagination2.pageSize) !== null && _ref2 !== void 0 ? _ref2 : 0;
    var filterResult = {
      skip: page * take,
      take: take
    };
    var filter = _this.convertFilterModel(model, config);
    var sort = _this.convertSortModel(model.GridSortModel);
    if (filter) filterResult.filter = filter;
    if (sort && sort.length > 0) filterResult.sort = sort;
    return {
      filter: filterResult,
      key: key
    };
  });
  _defineProperty(this, "graphqlKey", function (model, config) {
    var _ref3, _model$PaginationMode5, _model$PaginationMode6, _config$pagination3, _ref4, _model$PaginationMode7, _model$PaginationMode8, _config$pagination4, _model$FilterModel;
    var page = (_ref3 = (_model$PaginationMode5 = (_model$PaginationMode6 = model.PaginationModel) === null || _model$PaginationMode6 === void 0 ? void 0 : _model$PaginationMode6.page) !== null && _model$PaginationMode5 !== void 0 ? _model$PaginationMode5 : (_config$pagination3 = config.pagination) === null || _config$pagination3 === void 0 ? void 0 : _config$pagination3.page) !== null && _ref3 !== void 0 ? _ref3 : 0;
    var take = (_ref4 = (_model$PaginationMode7 = (_model$PaginationMode8 = model.PaginationModel) === null || _model$PaginationMode8 === void 0 ? void 0 : _model$PaginationMode8.pageSize) !== null && _model$PaginationMode7 !== void 0 ? _model$PaginationMode7 : (_config$pagination4 = config.pagination) === null || _config$pagination4 === void 0 ? void 0 : _config$pagination4.pageSize) !== null && _ref4 !== void 0 ? _ref4 : 0;
    var searchKeys = (_model$FilterModel = model.FilterModel) === null || _model$FilterModel === void 0 ? void 0 : _model$FilterModel.quickFilterValues;
    var filter = TableConverter.convertFilterOperator(model.FilterModel);
    var sort = TableConverter.convertSortModel(model.GridSortModel);
    var keys = {
      skip: page * take,
      take: take
    };
    if (filter) keys.filter = filter;
    if (sort && sort.length > 0) keys.sort = sort;
    if (searchKeys && searchKeys.length > 0) keys.searchKeys = searchKeys;
    return btoa(JSON.stringify(keys));
  });
  _defineProperty(this, "paginationToFilter", function (params) {
    var filter = {
      skip: params.page * params.pageSize,
      take: params.pageSize
    };
    return {
      filter: filter,
      key: btoa(JSON.stringify(filter))
    };
  });
  _defineProperty(this, "mapOperator", function (item) {
    if (!item.operatorValue || !item.value) return '';
    switch (parseInt(item.operatorValue)) {
      case EOperator.Contains:
        return "".concat(item.columnField, ".contains(\"").concat(item.value, "\")");
      case EOperator.Equal:
        return "".concat(item.columnField, "==\"").concat(item.value, "\"");
      case EOperator.NotEqual:
        return "".concat(item.columnField, "!=\"").concat(item.value, "\"");
      case EOperator.GreaterThan:
        return "".concat(item.columnField, ">\"").concat(item.value, "\"");
      case EOperator.GreaterThanOrEqual:
        return "".concat(item.columnField, ">=\"").concat(item.value, "\"");
      default:
        return '';
    }
  });
  _defineProperty(this, "convertSortModel", function (model) {
    var _model$0$sort$toUpper;
    var sort = [];
    var idDoNotAddSort = model && model[0] && model[0].field && model[0].field.includes('.');
    if (model && model[0] && model[0].sort && !idDoNotAddSort) sort = [_defineProperty({}, model[0].field, (_model$0$sort$toUpper = model[0].sort.toUpperCase()) !== null && _model$0$sort$toUpper !== void 0 ? _model$0$sort$toUpper : 'ASC')];
    return sort;
  });
  _defineProperty(this, "convertFilterModel", function (model, config) {
    var _model$FilterModel2;
    var filterSearch = _this.converSearchFilterModel({
      searchKeys: (_model$FilterModel2 = model.FilterModel) === null || _model$FilterModel2 === void 0 ? void 0 : _model$FilterModel2.quickFilterValues,
      searchOptions: config.searchOptions.map(function (e) {
        return e.toString();
      })
    });
    var filterOperator = _this.convertFilterOperator(model.FilterModel);
    var concatenation = filterSearch && filterOperator ? ' || ' : '';
    return "".concat(filterSearch ? filterSearch + concatenation : '').concat(filterOperator !== null && filterOperator !== void 0 ? filterOperator : '');
  });
  _defineProperty(this, "convertFilterOperator", function (model) {
    if (!model) return '';
    var filters = model.items.map(_this.mapOperator);
    var concatenation = ' || ';
    if (model.linkOperator === GridLinkOperator.And) concatenation = ' && ';
    return filters.filter(function (e) {
      return !!e;
    }).join(concatenation);
  });
  _defineProperty(this, "converSearchFilterModel", function (params) {
    var _params$searchKeys;
    var arr = ((_params$searchKeys = params.searchKeys) !== null && _params$searchKeys !== void 0 ? _params$searchKeys : []).map(function (e) {
      return e ? params.searchOptions.map(function (s) {
        return "".concat(s, ".contains(\"").concat(e, "\")");
      }).join(' || ') : undefined;
    });
    return arr.filter(function (e) {
      return !!e;
    }).join(' || ');
  });
});
var TableConverter = new TableConverterBase();

export { TableConverter, TableConverter as default };
//# sourceMappingURL=TableConverter.js.map
