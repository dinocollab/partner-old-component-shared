import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { styled, Box, Fade, LinearProgress } from '@mui/material';

var LazyView = function LazyView(props) {
  return jsxs(Fragment, {
    children: [props.children, jsx(Fade, {
      "in": props["in"],
      unmountOnExit: true,
      timeout: {
        enter: 0,
        exit: 350
      },
      children: jsx(Wrapper, {
        children: jsx(LinearProgress, {})
      })
    })]
  });
};
var Wrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.11)',
  zIndex: 1250
});

export { LazyView };
//# sourceMappingURL=index.js.map
