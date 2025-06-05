import { jsxs, jsx } from 'react/jsx-runtime';
import { Box } from '@mui/material';

var LoadingSquare = function LoadingSquare() {
  return jsxs(Box, {
    component: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    sx: {
      margin: 'auto',
      display: 'block',
      shapeRendering: 'auto',
      width: '72px',
      height: '72px'
    },
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    children: [jsx("g", {
      transform: "translate(20 20)",
      children: jsx("rect", {
        x: "-15",
        y: "-15",
        width: "30",
        height: "30",
        fill: "#e65a1e",
        children: jsx("animateTransform", {
          attributeName: "transform",
          type: "scale",
          repeatCount: "indefinite",
          calcMode: "spline",
          dur: "1s",
          values: "1;1;0.2;1;1",
          keyTimes: "0;0.2;0.5;0.8;1",
          keySplines: "0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5",
          begin: "-0.4s"
        })
      })
    }), jsx("g", {
      transform: "translate(50 20)",
      children: jsx("rect", {
        x: "-15",
        y: "-15",
        width: "30",
        height: "30",
        fill: "#f16022",
        children: jsx("animateTransform", {
          attributeName: "transform",
          type: "scale",
          repeatCount: "indefinite",
          calcMode: "spline",
          dur: "1s",
          values: "1;1;0.2;1;1",
          keyTimes: "0;0.2;0.5;0.8;1",
          keySplines: "0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5",
          begin: "-0.3s"
        })
      })
    }), jsx("g", {
      transform: "translate(80 20)",
      children: jsx("rect", {
        x: "-15",
        y: "-15",
        width: "30",
        height: "30",
        fill: "#f37643",
        children: jsx("animateTransform", {
          attributeName: "transform",
          type: "scale",
          repeatCount: "indefinite",
          calcMode: "spline",
          dur: "1s",
          values: "1;1;0.2;1;1",
          keyTimes: "0;0.2;0.5;0.8;1",
          keySplines: "0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5",
          begin: "-0.2s"
        })
      })
    }), jsx("g", {
      transform: "translate(20 50)",
      children: jsx("rect", {
        x: "-15",
        y: "-15",
        width: "30",
        height: "30",
        fill: "#f16022",
        children: jsx("animateTransform", {
          attributeName: "transform",
          type: "scale",
          repeatCount: "indefinite",
          calcMode: "spline",
          dur: "1s",
          values: "1;1;0.2;1;1",
          keyTimes: "0;0.2;0.5;0.8;1",
          keySplines: "0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5",
          begin: "-0.3s"
        })
      })
    }), jsx("g", {
      transform: "translate(50 50)",
      children: jsx("rect", {
        x: "-15",
        y: "-15",
        width: "30",
        height: "30",
        fill: "#f37643",
        children: jsx("animateTransform", {
          attributeName: "transform",
          type: "scale",
          repeatCount: "indefinite",
          calcMode: "spline",
          dur: "1s",
          values: "1;1;0.2;1;1",
          keyTimes: "0;0.2;0.5;0.8;1",
          keySplines: "0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5",
          begin: "-0.2s"
        })
      })
    }), jsx("g", {
      transform: "translate(80 50)",
      children: jsx("rect", {
        x: "-15",
        y: "-15",
        width: "30",
        height: "30",
        fill: "#e65a1e",
        children: jsx("animateTransform", {
          attributeName: "transform",
          type: "scale",
          repeatCount: "indefinite",
          calcMode: "spline",
          dur: "1s",
          values: "1;1;0.2;1;1",
          keyTimes: "0;0.2;0.5;0.8;1",
          keySplines: "0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5",
          begin: "-0.1s"
        })
      })
    }), jsx("g", {
      transform: "translate(20 80)",
      children: jsx("rect", {
        x: "-15",
        y: "-15",
        width: "30",
        height: "30",
        fill: "#f37643",
        children: jsx("animateTransform", {
          attributeName: "transform",
          type: "scale",
          repeatCount: "indefinite",
          calcMode: "spline",
          dur: "1s",
          values: "1;1;0.2;1;1",
          keyTimes: "0;0.2;0.5;0.8;1",
          keySplines: "0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5",
          begin: "-0.2s"
        })
      })
    }), jsx("g", {
      transform: "translate(50 80)",
      children: jsx("rect", {
        x: "-15",
        y: "-15",
        width: "30",
        height: "30",
        fill: "#e65a1e",
        children: jsx("animateTransform", {
          attributeName: "transform",
          type: "scale",
          repeatCount: "indefinite",
          calcMode: "spline",
          dur: "1s",
          values: "1;1;0.2;1;1",
          keyTimes: "0;0.2;0.5;0.8;1",
          keySplines: "0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5",
          begin: "-0.1s"
        })
      })
    }), jsx("g", {
      transform: "translate(80 80)",
      children: jsx("rect", {
        x: "-15",
        y: "-15",
        width: "30",
        height: "30",
        fill: "#f16022",
        children: jsx("animateTransform", {
          attributeName: "transform",
          type: "scale",
          repeatCount: "indefinite",
          calcMode: "spline",
          dur: "1s",
          values: "1;1;0.2;1;1",
          keyTimes: "0;0.2;0.5;0.8;1",
          keySplines: "0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5",
          begin: "0s"
        })
      })
    })]
  });
};

export { LoadingSquare as default };
//# sourceMappingURL=LoadingSquare.js.map
