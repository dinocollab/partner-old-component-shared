import { jsx, jsxs } from 'react/jsx-runtime';
import { Box, Typography } from '@mui/material';

var ChannelImage = function ChannelImage(props) {
  return jsx("img", {
    src: props.Thumb ? props.Thumb : "/api/user/v2/YoutubeReport/ChannelAvatar?Id=".concat(props.Id),
    style: {
      width: "30px",
      marginRight: "10px",
      borderRadius: '50%'
    }
  });
};
var VideoImage = function VideoImage(props) {
  return jsx("img", {
    src: props.Thumb ? props.Thumb : "/api/user/v2/YoutubeReport/VideoThumb?Id=".concat(props.Id),
    style: {
      width: "50px",
      marginRight: "10px",
      borderRadius: "5px"
    }
  });
};
var RowTitle = function RowTitle(props) {
  var getUrl = function getUrl() {
    return props.type === "Channel" ? "https://youtube.com/channel/".concat(props.Id) : "https://youtu.be/".concat(props.Id);
  };
  return jsxs(Box, {
    component: 'a',
    target: '_blank',
    href: getUrl(),
    sx: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    },
    children: [props.type === "Channel" ? jsx(ChannelImage, {
      Thumb: props.Thumb,
      Id: props.Id
    }) : jsx(VideoImage, {
      Thumb: props.Thumb,
      Id: props.Id
    }), jsx(Typography, {
      variant: 'subtitle2',
      noWrap: true,
      sx: {
        maxWidth: '250px'
      },
      children: props.children
    })]
  });
};

export { ChannelImage, RowTitle, VideoImage };
//# sourceMappingURL=index.js.map
