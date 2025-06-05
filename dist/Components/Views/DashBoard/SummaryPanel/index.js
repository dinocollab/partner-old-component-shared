import { inherits as _inherits, createClass as _createClass, asyncToGenerator as _asyncToGenerator, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty, regenerator as _regenerator } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Component } from 'react';
import { Grow, Box, Grid, Stack, Typography } from '@mui/material';
import Folder from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { Bookmark, AutoAwesomeMotion } from '@mui/icons-material';
import { SkeletonLazyWrap } from '../../../SkeletonLazyView/index.js';

var dataItems = {
  Folder: {
    Icon: Folder,
    Suffixes: 'folder(s)'
  },
  File: {
    Icon: FileIcon,
    Suffixes: 'file(s)'
  },
  Image: {
    Icon: ImageIcon,
    Suffixes: 'image(s)'
  },
  Video: {
    Icon: SmartDisplayIcon,
    Suffixes: 'video(s)'
  },
  Audio: {
    Icon: AudiotrackIcon,
    Suffixes: 'audio(s)'
  },
  Asset: {
    Icon: AutoAwesomeMotion,
    Suffixes: 'asset(s)'
  },
  AssetLabel: {
    Icon: Bookmark,
    Suffixes: 'label(s)'
  },
  ChannelContent: {
    Icon: YouTubeIcon,
    Suffixes: 'channel(s)'
  }
};
var SummaryPanel = /*#__PURE__*/function (_Component) {
  /**
   *
   */
  function SummaryPanel(props) {
    var _this;
    _classCallCheck(this, SummaryPanel);
    _this = _callSuper(this, SummaryPanel, [props]);
    _defineProperty(_this, "_isMounted", true);
    _defineProperty(_this, "GenerateItems", function () {
      return Object.keys(dataItems).map(function (key, i) {
        if (_this.state.ItemSummary) {
          dataItems[key].Amount = _this.state.ItemSummary[key];
        }
        return jsx(ItemInfoV2, {
          IsLoading: !_this.state.ItemSummary,
          data: dataItems[key]
        }, "key".concat(i));
      });
    });
    _this.state = {
      ItemSummary: null
    };
    return _this;
  }
  _inherits(SummaryPanel, _Component);
  return _createClass(SummaryPanel, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return this.props.GetSummary();
            case 1:
              data = _context.v;
              if (this._isMounted) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              this.setState({
                ItemSummary: data
              });
            case 3:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return jsx(Grow, {
        "in": true,
        timeout: {
          enter: 800
        },
        style: {
          transitionDelay: '100ms'
        },
        children: jsx(Box, {
          sx: {
            display: 'flex',
            padding: '24px 30px',
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: '4px'
          },
          children: jsx(Grid, {
            container: true,
            spacing: 3,
            children: this.GenerateItems()
          })
        })
      });
    }
  }]);
}(Component); // const ItemInfo: FC<IItemInfoProps> = (props) => {
var ItemInfoV2 = /*#__PURE__*/function (_Component2) {
  function ItemInfoV2() {
    _classCallCheck(this, ItemInfoV2);
    return _callSuper(this, ItemInfoV2, arguments);
  }
  _inherits(ItemInfoV2, _Component2);
  return _createClass(ItemInfoV2, [{
    key: "rateData",
    get: function get() {
      var rate = this.props.data.Rate;
      if (!rate) return {
        icon: TrendingUpIcon,
        color: '#00a152'
      };
      if (rate < 0) return {
        icon: TrendingDownIcon,
        color: '#ff1744'
      };else return {
        icon: TrendingUpIcon,
        color: '#00a152'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _data$Amount;
      var _this$props = this.props,
        data = _this$props.data,
        IsLoading = _this$props.IsLoading;
      var RateIcon = this.rateData.icon;
      return jsx(Grid, {
        item: true,
        xs: 6,
        sm: 4,
        md: 3,
        children: jsxs(SkeletonLazyWrap, {
          IsLoading: IsLoading,
          component: Stack,
          sx: {
            gap: '12px',
            width: '100%'
          },
          children: [jsxs(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#6f6f6f'
            },
            children: [jsx(data.Icon, {
              fontSize: "small"
            }), jsx(Typography, {
              variant: "body2",
              children: data.Suffixes
            })]
          }), jsxs(Box, {
            sx: {
              display: 'flex',
              alignItems: 'flex-end',
              gap: '12px'
            },
            children: [jsx(Typography, {
              variant: "h4",
              color: "#3c3c3c",
              children: (_data$Amount = data.Amount) !== null && _data$Amount !== void 0 ? _data$Amount : 0
            }), data.Rate && data.Rate !== 0 && jsxs(Box, {
              sx: {
                display: 'flex',
                alignItems: 'center',
                color: this.rateData.color,
                gap: '6px',
                marginBottom: '6px'
              },
              children: [jsx(RateIcon, {
                fontSize: "small"
              }), jsxs(Typography, {
                variant: "caption",
                fontWeight: 700,
                children: [Math.abs(data.Rate).toFixed(2), "%"]
              })]
            })]
          })]
        })
      });
    }
  }]);
}(Component);

export { SummaryPanel as default };
//# sourceMappingURL=index.js.map
