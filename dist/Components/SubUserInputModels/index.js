import { objectSpread2 as _objectSpread2, slicedToArray as _slicedToArray, asyncToGenerator as _asyncToGenerator, inherits as _inherits, createClass as _createClass, regenerator as _regenerator, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback, useRef, Component } from 'react';
import { Box, CardMedia, Avatar, Grid, Link, Typography, IconButton, Stack, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Edit, CopyAll } from '@mui/icons-material';
import { ApiAlertContext } from 'partner-local-lib/Views';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faKey } from '@fortawesome/free-solid-svg-icons';
import { FormValidator, SingleRuleValidate } from 'partner-local-lib/helper';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { getErrorMessage } from '../Helper/index.js';
import { RoleKeyInternalSite, RoleKeyExternalSite } from '../Helper/RoleKey.js';
import InputFormBase, { InputFormContext } from '../TemplateTable/InputFormBase/index.js';
import ContactInfoForm from './ContactInfoForm/index.js';
import CopyToClipboard from '../CopyToClipboard/index.js';
import * as ReactTrap from 'reactstrap';
import { WrapFrom, DatePickers, CreateMultipleTags, OverlayView, LazyView, CreateSelect2 } from '../SubComponent/index.js';
import * as SubLocal from 'partner-local-lib/SubComponents';

var AvatarCard = function AvatarCard(props) {
  var _props$data;
  return jsx(Box, {
    sx: {
      maxWidth: 345
    },
    children: jsx(CardMedia, {
      sx: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      children: jsx(Avatar, {
        src: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.Avatar,
        sx: {
          width: 200,
          height: 200,
          margin: '10px'
        }
      })
    })
  });
};
var FormPersonalInfo = function FormPersonalInfo(props) {
  var _props$Model2, _props$Model3, _props$Model4, _props$Model5, _props$Model6, _props$Model7, _props$Model8, _props$Model9, _props$Model0, _props$Model1, _props$Model10;
  var renderDisplayName = function renderDisplayName() {
    if (props.IsEdit) {
      var _props$Model;
      return jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          fullWidth: true,
          variant: 'outlined',
          MaxLength: 250,
          Title: 'Display name',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('DisplayName');
          }
        }, getErrorMessage(props.MessageError, 'DisplayName')), {}, {
          inputProps: {
            multiline: false,
            name: 'DisplayName'
          },
          defaultValue: (_props$Model = props.Model) === null || _props$Model === void 0 ? void 0 : _props$Model.DisplayName
        }))
      });
    }
    return jsx("input", {
      name: 'DisplayName',
      hidden: true,
      defaultValue: 'DisplayName'
    });
  };
  return jsx(WrapFrom, {
    onSubmit: props.onSubmit,
    Id: props.IdForm,
    IsForm: props.IsForm,
    children: jsxs(Grid, {
      container: true,
      spacing: 2,
      sx: {
        mt: 0
      },
      children: [jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          fullWidth: true,
          variant: 'outlined',
          MaxLength: 250,
          Title: 'First name',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('FirstName');
          }
        }, getErrorMessage(props.MessageError, 'FirstName')), {}, {
          inputProps: {
            multiline: false,
            name: 'FirstName'
          },
          defaultValue: (_props$Model2 = props.Model) === null || _props$Model2 === void 0 ? void 0 : _props$Model2.FirstName
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          fullWidth: true,
          variant: 'outlined',
          MaxLength: 250,
          Title: 'Last name',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('LastName');
          }
        }, getErrorMessage(props.MessageError, 'LastName')), {}, {
          inputProps: {
            multiline: false,
            name: 'LastName'
          },
          defaultValue: (_props$Model3 = props.Model) === null || _props$Model3 === void 0 ? void 0 : _props$Model3.LastName
        }))
      }), jsxs(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: [props.isAdmin !== true ? jsx("input", {
          name: 'UserName',
          hidden: true,
          defaultValue: (_props$Model4 = props.Model) === null || _props$Model4 === void 0 ? void 0 : _props$Model4.UserName
        }) : '', jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          fullWidth: true,
          variant: 'outlined',
          MaxLength: 250,
          Title: 'UserName',
          maxRows: 1,
          minRows: 1,
          disabled: props.isAdmin !== true,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('UserName');
          }
        }, getErrorMessage(props.MessageError, 'UserName')), {}, {
          inputProps: {
            multiline: false,
            name: 'UserName'
          },
          defaultValue: (_props$Model5 = props.Model) === null || _props$Model5 === void 0 ? void 0 : _props$Model5.UserName
        }))]
      }), jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          fullWidth: true,
          variant: 'outlined',
          MaxLength: 250,
          Title: 'Email',
          disabled: props.isAdmin !== true,
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('Email');
          }
        }, getErrorMessage(props.MessageError, 'Email')), {}, {
          inputProps: {
            multiline: false,
            name: 'Email'
          },
          defaultValue: (_props$Model6 = props.Model) === null || _props$Model6 === void 0 ? void 0 : _props$Model6.Email
        }))
      }), renderDisplayName(), jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          fullWidth: true,
          variant: 'outlined',
          MaxLength: 250,
          Title: 'Identity card',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('PersonIdentityCard');
          }
        }, getErrorMessage(props.MessageError, 'PersonIdentityCard')), {}, {
          inputProps: {
            multiline: false,
            name: 'PersonIdentityCard'
          },
          defaultValue: (_props$Model7 = props.Model) === null || _props$Model7 === void 0 ? void 0 : _props$Model7.PersonIdentityCard
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          fullWidth: true,
          variant: 'outlined',
          MaxLength: 250,
          Title: 'Phone number',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('PhoneNumber');
          }
        }, getErrorMessage(props.MessageError, 'PhoneNumber')), {}, {
          inputProps: {
            multiline: false,
            name: 'PhoneNumber'
          },
          defaultValue: (_props$Model8 = props.Model) === null || _props$Model8 === void 0 ? void 0 : _props$Model8.PhoneNumber
        }))
      }), jsxs(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: [props.isAdmin !== true ? jsx("input", {
          name: 'SigningDate',
          hidden: true,
          defaultValue: (_props$Model9 = props.Model) === null || _props$Model9 === void 0 ? void 0 : _props$Model9.SigningDate
        }) : '', jsx(DatePickers, _objectSpread2(_objectSpread2(_objectSpread2({
          fullWidth: true,
          variant: 'outlined',
          MaxLength: 250,
          Title: 'Signing date'
        }, props.isAdmin !== true ? {
          disable: true
        } : {
          name: 'SigningDate'
        }), {}, {
          inputFormat: 'MM/dd/yyyy',
          Onchange: function Onchange() {
            return props.onBlur && props.onBlur('SigningDate');
          }
        }, getErrorMessage(props.MessageError, 'SigningDate')), {}, {
          defaultValue: (_props$Model0 = props.Model) !== null && _props$Model0 !== void 0 && _props$Model0.SigningDate ? new Date((_props$Model1 = props.Model) === null || _props$Model1 === void 0 ? void 0 : _props$Model1.SigningDate) : new Date()
        }))]
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          fullWidth: true,
          variant: 'outlined',
          MaxLength: 250,
          Title: 'Address',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('PersonAddress');
          }
        }, getErrorMessage(props.MessageError, 'PersonAddress')), {}, {
          inputProps: {
            multiline: false,
            name: 'PersonAddress'
          },
          defaultValue: (_props$Model10 = props.Model) === null || _props$Model10 === void 0 ? void 0 : _props$Model10.PersonAddress
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: props.Actions
      })]
    })
  });
};
var FormBusinessInfo = function FormBusinessInfo(props) {
  var _props$Model11, _props$Model12, _props$Model13;
  return jsx(WrapFrom, {
    Id: props.IdForm,
    onSubmit: props.onSubmit,
    IsForm: props.IsForm,
    children: jsxs(Grid, {
      container: true,
      spacing: 2,
      sx: {
        mt: 0
      },
      children: [jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 250,
          Title: 'Company name',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('CompanyName');
          }
        }, getErrorMessage(props.MessageError, 'CompanyName')), {}, {
          inputProps: {
            multiline: false,
            name: 'CompanyName'
          },
          defaultValue: (_props$Model11 = props.Model) === null || _props$Model11 === void 0 ? void 0 : _props$Model11.CompanyName
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 250,
          Title: 'Position',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('Position');
          }
        }, getErrorMessage(props.MessageError, 'Position')), {}, {
          inputProps: {
            multiline: false,
            name: 'Position'
          },
          defaultValue: (_props$Model12 = props.Model) === null || _props$Model12 === void 0 ? void 0 : _props$Model12.Position
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 500,
          Title: 'Business address',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('BusinessAddress');
          }
        }, getErrorMessage(props.MessageError, 'BusinessAddress')), {}, {
          inputProps: {
            multiline: false,
            name: 'BusinessAddress'
          },
          defaultValue: (_props$Model13 = props.Model) === null || _props$Model13 === void 0 ? void 0 : _props$Model13.BusinessAddress
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: props.Actions
      })]
    })
  });
};
var Tags = CreateMultipleTags();
var FormTagsInfo = function FormTagsInfo(props) {
  var _props$tags, _props$Model14, _props$Model15;
  var tagData = (_props$tags = props.tags) !== null && _props$tags !== void 0 ? _props$tags : [];
  return jsx(WrapFrom, {
    Id: props.IdForm,
    onSubmit: props.onSubmit,
    IsForm: props.IsForm,
    children: jsxs(Grid, {
      container: true,
      spacing: 2,
      sx: {
        mt: 0
      },
      children: [jsx(Grid, {
        item: true,
        xs: 12,
        children: jsx(Tags, _objectSpread2(_objectSpread2({
          data: tagData.map(function (option) {
            return option.Title;
          }),
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('Tags');
          }
        }, getErrorMessage(props.MessageError, 'Tags')), {}, {
          defaultValue: (_props$Model14 = props.Model) !== null && _props$Model14 !== void 0 && _props$Model14.Tags ? JSON.parse((_props$Model15 = props.Model) === null || _props$Model15 === void 0 ? void 0 : _props$Model15.Tags) : undefined,
          name: 'Tags',
          title: 'Tags'
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: props.Actions
      })]
    })
  });
};
var FormPaymentInfo = function FormPaymentInfo(props) {
  var _props$Model16, _props$Model17, _props$Model18, _props$Model19, _props$Model20, _props$Model21;
  return jsx(WrapFrom, {
    Id: props.IdForm,
    onSubmit: props.onSubmit,
    IsForm: props.IsForm,
    children: jsxs(Grid, {
      container: true,
      spacing: 2,
      sx: {
        mt: 0
      },
      children: [jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 250,
          Title: 'Account number',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('AccountNumber');
          }
        }, getErrorMessage(props.MessageError, 'AccountNumber')), {}, {
          inputProps: {
            multiline: false,
            name: 'AccountNumber'
          },
          defaultValue: (_props$Model16 = props.Model) === null || _props$Model16 === void 0 ? void 0 : _props$Model16.AccountNumber
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 250,
          Title: 'Bank name',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('BankName');
          }
        }, getErrorMessage(props.MessageError, 'BankName')), {}, {
          inputProps: {
            multiline: false,
            name: 'BankName'
          },
          defaultValue: (_props$Model17 = props.Model) === null || _props$Model17 === void 0 ? void 0 : _props$Model17.BankName
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 500,
          Title: 'IdentityCard',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('IdentityCard');
          }
        }, getErrorMessage(props.MessageError, 'IdentityCard')), {}, {
          inputProps: {
            multiline: false,
            name: 'IdentityCard'
          },
          defaultValue: (_props$Model18 = props.Model) === null || _props$Model18 === void 0 ? void 0 : _props$Model18.IdentityCard
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        sm: 6,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 500,
          Title: 'Swift number',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('SwiftNumber');
          }
        }, getErrorMessage(props.MessageError, 'SwiftNumber')), {}, {
          inputProps: {
            multiline: false,
            name: 'SwiftNumber'
          },
          defaultValue: (_props$Model19 = props.Model) === null || _props$Model19 === void 0 ? void 0 : _props$Model19.SwiftNumber
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 500,
          Title: 'Beneficiary name',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('BeneficiaryName');
          }
        }, getErrorMessage(props.MessageError, 'BeneficiaryName')), {}, {
          inputProps: {
            multiline: false,
            name: 'BeneficiaryName'
          },
          defaultValue: (_props$Model20 = props.Model) === null || _props$Model20 === void 0 ? void 0 : _props$Model20.BeneficiaryName
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: jsx(SubLocal.InputOutline, _objectSpread2(_objectSpread2({
          MaxLength: 500,
          Title: 'Bank address',
          maxRows: 1,
          minRows: 1,
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('BankAddress');
          }
        }, getErrorMessage(props.MessageError, 'BankAddress')), {}, {
          inputProps: {
            multiline: false,
            name: 'BankAddress'
          },
          defaultValue: (_props$Model21 = props.Model) === null || _props$Model21 === void 0 ? void 0 : _props$Model21.BankAddress
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: props.Actions
      })]
    })
  });
};
var FormChangePassword = function FormChangePassword(props) {
  return jsx(WrapFrom, {
    Id: props.IdForm,
    onSubmit: props.onSubmit,
    IsForm: props.IsForm,
    children: jsxs(Grid, {
      container: true,
      spacing: 2,
      sx: {
        mt: 0
      },
      children: [props.IsPassRequired && jsx(Grid, {
        item: true,
        xs: 12,
        children: jsx(SubLocal.InputOutlinePassword, _objectSpread2(_objectSpread2({
          MaxLength: 100,
          Title: 'Current password',
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('CurrentPassword');
          }
        }, getErrorMessage(props.MessageError, 'CurrentPassword')), {}, {
          inputProps: {
            name: 'CurrentPassword'
          }
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: jsx(SubLocal.InputOutlinePassword, _objectSpread2(_objectSpread2({
          MaxLength: 100,
          Title: 'New password',
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('NewPassword');
          }
        }, getErrorMessage(props.MessageError, 'NewPassword')), {}, {
          inputProps: {
            name: 'NewPassword'
          }
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: jsx(SubLocal.InputOutlinePassword, _objectSpread2(_objectSpread2({
          MaxLength: 100,
          Title: 'Confirm password',
          onBlur: function onBlur() {
            return props.onBlur && props.onBlur('ConfirmPassword');
          }
        }, getErrorMessage(props.MessageError, 'ConfirmPassword')), {}, {
          inputProps: {
            name: 'ConfirmPassword'
          }
        }))
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: props.Actions
      })]
    })
  });
};
var UserContact = {
  WebSite: {
    Icon: faGlobe,
    Color: 'rgb(255, 193, 7)'
  },
  GitHub: {
    Icon: faGithub,
    Color: '#333333'
  },
  Twitter: {
    Icon: faTwitter,
    Color: '#55acee'
  },
  Instagram: {
    Icon: faInstagram,
    Color: '#ac2bac'
  },
  Facebook: {
    Icon: faFacebook,
    Color: '#3b5998'
  }
};
var FormValidate = new FormValidator({
  Name: {
    Rules: [{
      rule: SingleRuleValidate.Required
    }]
  },
  Link: {
    Rules: [{
      rule: SingleRuleValidate.Required
    }]
  }
});
var SocialInfo = function SocialInfo(props) {
  var _props$data$ContactIn, _props$data3, _props$data4, _props$data5;
  var _useState = useState({
      IsLazy: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _onItemClick = useCallback(function (Platform, user) {
    setState(function (st) {
      return _objectSpread2(_objectSpread2({}, st), {}, {
        dataModal: _objectSpread2(_objectSpread2({}, user), {}, {
          Platform: Platform
        })
      });
    });
  }, []);
  var _renderSocialItem = useCallback(function (data) {
    return Object.keys(UserContact).map(function (key) {
      var _data$key;
      var contact = (_data$key = data[key]) !== null && _data$key !== void 0 ? _data$key : {
        Platform: key,
        Name: key
      };
      return jsxs(ReactTrap.ListGroupItem, {
        className: 'item-social d-flex justify-content-between align-items-center p-3 position-relative',
        children: [jsx(FontAwesomeIcon, {
          className: 'fa-lg ',
          color: UserContact[key].Color,
          icon: UserContact[key].Icon
        }), contact.Link ? jsx(Link, {
          className: 'mb-0',
          href: contact.Link,
          target: '_blank',
          children: contact.Name
        }) : jsx(Typography, {
          children: contact.Name
        }), props.AllowEdit === true ? jsx(Box, {
          className: 'position-absolute btn-edit',
          children: jsx(IconButton, {
            onClick: function onClick() {
              return _onItemClick(key, contact);
            },
            children: jsx(Edit, {
              color: 'info'
            })
          })
        }) : '']
      }, key);
    });
  }, [_onItemClick]);
  var controller = useRef(new AbortController());
  var _onSubmit = useCallback(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(user) {
      var _props$data2, _state$dataModal, _ApiAlertContext$ApiA, _ApiAlertContext$ApiA2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (props.EditService) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setState(function (st) {
              return _objectSpread2(_objectSpread2({}, st), {}, {
                IsLazy: true
              });
            });
            _context.p = 2;
            user.UserId = (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.Id;
            user.Platform = (_state$dataModal = state.dataModal) === null || _state$dataModal === void 0 ? void 0 : _state$dataModal.Platform;
            _context.n = 3;
            return props.EditService(user, controller.current.signal);
          case 3:
            setState(function (st) {
              return _objectSpread2(_objectSpread2({}, st), {}, {
                IsLazy: false,
                dataModal: undefined
              });
            });
            (_ApiAlertContext$ApiA = ApiAlertContext.ApiAlert) === null || _ApiAlertContext$ApiA === void 0 || _ApiAlertContext$ApiA.PushSuccess('Successfully edited!');
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _context.v;
            (_ApiAlertContext$ApiA2 = ApiAlertContext.ApiAlert) === null || _ApiAlertContext$ApiA2 === void 0 || _ApiAlertContext$ApiA2.PushError('edit failed!');
            setState(function (st) {
              return {
                IsLazy: false,
                dataModal: undefined
              };
            });
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [props, state]);
  var _closeModal = useCallback(function () {
    setState(function (st) {
      return _objectSpread2(_objectSpread2({}, st), {}, {
        dataModal: undefined
      });
    });
  }, []);
  return jsxs(ReactTrap.Card, {
    className: 'mb-4 mb-lg-0 position-relative',
    children: [jsx(ReactTrap.CardBody, {
      className: 'p-0',
      children: jsxs(ReactTrap.ListGroup, {
        flush: true,
        className: 'rounded-3',
        children: [_renderSocialItem((_props$data$ContactIn = (_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.ContactInfoMap) !== null && _props$data$ContactIn !== void 0 ? _props$data$ContactIn : {}), (_props$data4 = props.data) !== null && _props$data4 !== void 0 && _props$data4.AutoPassword ? jsxs(ReactTrap.ListGroupItem, {
          className: 'd-flex justify-content-between align-items-center p-3',
          children: [jsx(FontAwesomeIcon, {
            className: 'fa-lg text-warning',
            icon: faKey
          }), jsx("strong", {
            className: 'mb-0',
            children: (_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : _props$data5.AutoPassword
          }), jsx(CopyToClipboard, {
            children: function children(_ref2) {
              var copy = _ref2.copy;
              return jsx(IconButton, {
                onClick: function onClick() {
                  var _props$data6;
                  return copy((_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : _props$data6.AutoPassword);
                },
                children: jsx(CopyAll, {})
              });
            }
          })]
        }) : jsx("div", {})]
      })
    }), jsx(OverlayView, {
      open: !!state.dataModal,
      children: jsx(LazyView, {
        IsLazy: state.IsLazy,
        sx: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        },
        children: jsx(InputFormBase, {
          FormValidate: FormValidate,
          onSubmit: _onSubmit,
          children: jsx(InputFormContext.Consumer, {
            children: function children(_ref3) {
              var _state$dataModal2;
              var onBlur = _ref3.onBlur,
                MessageError = _ref3.MessageError;
              return jsx(ContactInfoForm, {
                onClose: _closeModal,
                onBlur: onBlur,
                Model: state.dataModal,
                IsForm: false,
                MessageError: MessageError
              }, (_state$dataModal2 = state.dataModal) === null || _state$dataModal2 === void 0 ? void 0 : _state$dataModal2.Id);
            }
          })
        }, new Date().getTime())
      })
    })]
  });
};
var AccountPermission = /*#__PURE__*/function (_Component) {
  function AccountPermission() {
    var _this;
    _classCallCheck(this, AccountPermission);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, AccountPermission, [].concat(args));
    _defineProperty(_this, "renderContent", function (roles) {
      return roles.map(function (role) {
        return jsx(FormControlLabel, {
          control: jsx(Checkbox, {
            defaultChecked: _this.MapCheck.has(role),
            name: 'Roles',
            value: role
          }),
          label: role
        }, role);
      });
    });
    return _this;
  }
  _inherits(AccountPermission, _Component);
  return _createClass(AccountPermission, [{
    key: "MapCheck",
    get: function get() {
      var _this$props$Model$Rol, _this$props$Model;
      return new Set((_this$props$Model$Rol = (_this$props$Model = this.props.Model) === null || _this$props$Model === void 0 ? void 0 : _this$props$Model.Roles) !== null && _this$props$Model$Rol !== void 0 ? _this$props$Model$Rol : []);
    }
  }, {
    key: "render",
    value: function render() {
      var internalRoles = Object.values(RoleKeyInternalSite);
      var externalRoles = Object.values(RoleKeyExternalSite);
      return jsx(WrapFrom, {
        Id: this.props.IdForm,
        onSubmit: this.props.onSubmit,
        IsForm: this.props.IsForm,
        children: jsxs(Grid, {
          container: true,
          spacing: 2,
          sx: {
            mt: 0
          },
          children: [jsxs(Grid, {
            item: true,
            xs: 12,
            sm: 6,
            children: [jsx(Typography, {
              variant: 'caption',
              sx: {
                fontWeight: 'bold'
              },
              children: "Admin site (Internal)"
            }), jsx(Stack, {
              sx: {
                ml: '3px'
              },
              children: this.renderContent(internalRoles)
            })]
          }), jsxs(Grid, {
            item: true,
            xs: 12,
            sm: 6,
            children: [jsx(Typography, {
              variant: 'caption',
              sx: {
                fontWeight: 'bold'
              },
              children: "Client site (Extenal)"
            }), jsx(Stack, {
              sx: {
                ml: '3px'
              },
              children: this.renderContent(externalRoles)
            })]
          }), jsx(Grid, {
            item: true,
            xs: 12,
            children: this.props.Actions
          })]
        })
      });
    }
  }]);
}(Component);
var SelectUser = CreateSelect2();
var UserCreator = function UserCreator(props) {
  var _props$Model22, _props$Model23;
  return jsx(WrapFrom, {
    Id: props.IdForm,
    onSubmit: props.onSubmit,
    IsForm: props.IsForm,
    children: jsxs(Grid, {
      container: true,
      spacing: 2,
      sx: {
        mt: 0
      },
      children: [jsx(Grid, {
        item: true,
        xs: 12,
        children: jsxs(FormGroup, {
          className: 'group-input',
          children: [jsx("input", {
            hidden: true,
            defaultValue: (_props$Model22 = props.Model) === null || _props$Model22 === void 0 ? void 0 : _props$Model22.Id,
            name: 'Id'
          }), jsx(SelectUser, _objectSpread2(_objectSpread2({
            title: 'UserCreator',
            fetchData: props.fetchData,
            SelectValue: function SelectValue(m) {
              return m.Id;
            },
            GenerateLabel: function GenerateLabel(m) {
              return m.Name;
            },
            selectedItem: {
              Id: '',
              Name: ''
            },
            isOptionEqualToValue: function isOptionEqualToValue(m1, m2) {
              return m1.Id === m2.Id;
            },
            defaultValue: (_props$Model23 = props.Model) === null || _props$Model23 === void 0 ? void 0 : _props$Model23.UserCreatorId,
            searchInitial: function searchInitial(model) {
              var _props$Model24;
              return ((_props$Model24 = props.Model) === null || _props$Model24 === void 0 ? void 0 : _props$Model24.UserCreatorId) === model.Id;
            }
          }, getErrorMessage(props.MessageError, 'UserCreatorId')), {}, {
            onBlur: function onBlur() {
              return props.onBlur && props.onBlur('UserCreatorId');
            },
            name: 'UserCreatorId'
          }))]
        })
      }), jsx(Grid, {
        item: true,
        xs: 12,
        children: props.Actions
      })]
    })
  });
};

export { AccountPermission, AvatarCard, FormBusinessInfo, FormChangePassword, FormPaymentInfo, FormPersonalInfo, FormTagsInfo, SocialInfo, UserCreator };
//# sourceMappingURL=index.js.map
