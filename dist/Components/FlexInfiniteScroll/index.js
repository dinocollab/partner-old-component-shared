import { inherits as _inherits, createClass as _createClass, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Box } from '@mui/material';
import { Component } from 'react';
import LazySpinner from '../Helper/LazySpinner.js';

var FlexInfiniteScroll = /*#__PURE__*/function (_Component) {
  function FlexInfiniteScroll(props) {
    var _this;
    _classCallCheck(this, FlexInfiniteScroll);
    _this = _callSuper(this, FlexInfiniteScroll, [props]);
    _defineProperty(_this, "loadMore", function () {
      if (!_this.props.onLoadMore) return;
      _this.props.onLoadMore(_this);
    });
    _defineProperty(_this, "lock", function () {
      _this.setState({
        lock: true
      });
    });
    _defineProperty(_this, "getHeightItem", function () {
      return 340;
    });
    _defineProperty(_this, "isLoading", function () {
      return _this.props.loading || _this.props.lock || _this.state.loading || _this.state.lock;
    });
    _defineProperty(_this, "isPinShow", function () {
      return (_this.props.loading || _this.state.loading) && (!_this.state.lock || !_this.props.lock);
    });
    _defineProperty(_this, "onScroll", function (event) {
      var _this$refScrollView$s, _this$refScrollView, _this$refScrollView$o, _this$refScrollView2, _this$refScrollView$s2, _this$refScrollView3;
      if (_this.isLoading()) return;
      var scrollHeight = (_this$refScrollView$s = (_this$refScrollView = _this.refScrollView) === null || _this$refScrollView === void 0 ? void 0 : _this$refScrollView.scrollHeight) !== null && _this$refScrollView$s !== void 0 ? _this$refScrollView$s : 0;
      var height = (_this$refScrollView$o = (_this$refScrollView2 = _this.refScrollView) === null || _this$refScrollView2 === void 0 ? void 0 : _this$refScrollView2.offsetHeight) !== null && _this$refScrollView$o !== void 0 ? _this$refScrollView$o : 0;
      var position = (_this$refScrollView$s2 = (_this$refScrollView3 = _this.refScrollView) === null || _this$refScrollView3 === void 0 ? void 0 : _this$refScrollView3.scrollTop) !== null && _this$refScrollView$s2 !== void 0 ? _this$refScrollView$s2 : 0;
      if (scrollHeight - position - height < _this.getHeightItem() * 3) {
        _this.loadMore();
      }
    });
    _defineProperty(_this, "refScrollView", null);
    _this.state = {
      loading: props.loading || false,
      lock: props.lock || !props.onLoadMore
    };
    return _this;
  }
  _inherits(FlexInfiniteScroll, _Component);
  return _createClass(FlexInfiniteScroll, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return jsx(Box, {
        sx: _objectSpread2({
          display: 'flex',
          flex: 1,
          overflowY: "auto"
        }, this.props.ContainerSx || {}),
        component: 'div',
        ref: function ref(_ref) {
          return _this2.refScrollView = _ref;
        },
        className: "flex-infinite-scroll",
        onScroll: this.onScroll,
        children: jsxs(Box, {
          sx: _objectSpread2({
            height: 0
          }, this.props.ContentSx || {}),
          children: [this.props.children, this.isPinShow() ? jsx(Box, {
            sx: {
              width: '100%',
              margin: "10px 0"
            },
            children: jsx(LazySpinner, {})
          }) : '']
        })
      });
    }
  }]);
}(Component);

export { FlexInfiniteScroll as default };
//# sourceMappingURL=index.js.map
