import { slicedToArray as _slicedToArray } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';

var MenuMore = function MenuMore(props) {
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var open = Boolean(anchorEl);
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  return jsxs(React.Fragment, {
    children: [jsx(Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
      },
      children: jsx(Tooltip, {
        title: "More...",
        children: jsx(IconButton, {
          onClick: handleClick,
          size: "small",
          sx: {
            ml: 2
          },
          "aria-controls": open ? 'account-menu' : undefined,
          "aria-haspopup": "true",
          "aria-expanded": open ? 'true' : undefined,
          children: jsx(MoreVertIcon, {})
        })
      })
    }), jsx(Menu, {
      anchorEl: anchorEl,
      id: "account-menu",
      open: open,
      onClose: handleClose,
      onClick: handleClose,
      PaperProps: {
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0
          }
        }
      },
      transformOrigin: {
        horizontal: 'right',
        vertical: 'top'
      },
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom'
      },
      children: props.renderItems()
    })]
  });
};

export { MenuMore as default };
//# sourceMappingURL=index.js.map
