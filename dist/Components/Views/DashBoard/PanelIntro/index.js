import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Component } from 'react';
import { Grow, Box, Grid, Typography } from '@mui/material';

var PanelIntro = /*#__PURE__*/function (_Component) {
  function PanelIntro() {
    _classCallCheck(this, PanelIntro);
    return _callSuper(this, PanelIntro, arguments);
  }
  _inherits(PanelIntro, _Component);
  return _createClass(PanelIntro, [{
    key: "render",
    value: function render() {
      return jsx(Grow, {
        "in": true,
        timeout: {
          enter: 800
        },
        children: jsx(Box, {
          sx: {
            background: '#c8facd',
            padding: '5px 10px 5px 30px',
            borderRadius: '4px'
          },
          children: jsxs(Grid, {
            container: true,
            children: [jsx(Grid, {
              item: true,
              xs: 8,
              children: jsxs(Box, {
                sx: {
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  height: '100%'
                },
                children: [jsx(Typography, {
                  variant: "h6",
                  children: "Welcome back!"
                }), jsx(Typography, {
                  variant: "h6",
                  children: "Dinocollab"
                }), jsx(Typography, {
                  variant: "body1",
                  children: "Thank you for your business, your trust, and your confidence. It is our pleasure to work with you."
                })]
              })
            }), jsx(Grid, {
              item: true,
              xs: 4,
              children: jsx(Box, {
                sx: {
                  display: 'flex',
                  justifyContent: 'center'
                },
                children: jsx(Box, {
                  component: "img",
                  src: "assets/images/illustration_dashboard.png",
                  alt: "illustration_dashboard",
                  sx: {
                    maxWidth: '100%',
                    maxHeight: '285px'
                  }
                })
              })
            })]
          })
        })
      });
    }
  }]);
}(Component);

export { PanelIntro as default };
//# sourceMappingURL=index.js.map
