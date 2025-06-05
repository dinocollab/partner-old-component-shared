import { jsx } from 'react/jsx-runtime';
import React__default from 'react';

var HeightEqualWidth = function HeightEqualWidth(props) {
  var boxRef = React__default.useRef(null);
  React__default.useEffect(function () {
    var resize = function resize() {
      if (!boxRef.current) return;
      var _props$ratio = props.ratio,
        ratio = _props$ratio === void 0 ? 1 : _props$ratio,
        reverse = props.reverse;
      if (reverse) {
        var height = boxRef.current.offsetHeight * ratio;
        boxRef.current.style.width = "".concat(height, "px");
      } else {
        var width = boxRef.current.offsetWidth * ratio;
        boxRef.current.style.height = "".concat(width, "px");
      }
    };
    resize();
    // const timer = setTimeout(resize, 50)
    window.addEventListener('resize', resize);
    return function () {
      // clearTimeout(timer)
      window.removeEventListener('resize', resize);
    };
  }, [props]);
  var _style = Object.assign({}, !!props.reverse ? {
    height: '100%'
  } : {
    width: '100%'
  }, props.style);
  return jsx("div", {
    ref: boxRef,
    style: _style,
    children: props.children
  });
};

export { HeightEqualWidth, HeightEqualWidth as default };
//# sourceMappingURL=index.js.map
