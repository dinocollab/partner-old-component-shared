import { inherits as _inherits, createClass as _createClass, objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { Component } from 'react';

var _excluded = ["src"];
var YoutubeImage = /*#__PURE__*/function (_Component) {
  function YoutubeImage(props) {
    var _this;
    _classCallCheck(this, YoutubeImage);
    _this = _callSuper(this, YoutubeImage, [props]);
    _defineProperty(_this, "ApiKey", '');
    _defineProperty(_this, "componentDidMount", function () {
      if (_this.props.ContentId.length == 24) {
        fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&id=".concat(_this.props.ContentId, "&fields=items(id%2Csnippet%2Fthumbnails)&key=").concat(_this.ApiKey)).then(function (x) {
          return x.json();
        }).then(function (x) {
          var data = x;
          _this.setState({
            image: data.items[0].snippet.thumbnails["default"].url
          });
        })["catch"](function () {
          return console.log("error!");
        });
      } else {
        _this.setState({
          image: "https://i.ytimg.com/vi/".concat(_this.props.ContentId, "/mqdefault.jpg")
        });
      }
    });
    _this.ApiKey = process.env.REACT_APP_YOUTUBE_IMAGE_KEY;
    _this.state = {
      image: 'https://i.ytimg.com/vi/111111111111/mqdefault.jpg'
    };
    return _this;
  }
  _inherits(YoutubeImage, _Component);
  return _createClass(YoutubeImage, [{
    key: "render",
    value: function render() {
      var _this$props$imgProps;
      var _ref = (_this$props$imgProps = this.props.imgProps) !== null && _this$props$imgProps !== void 0 ? _this$props$imgProps : {};
        _ref.src;
        var other = _objectWithoutProperties(_ref, _excluded);
      return jsx("img", _objectSpread2({
        src: this.state.image
      }, other));
    }
  }]);
}(Component);

export { YoutubeImage as default };
//# sourceMappingURL=index.js.map
