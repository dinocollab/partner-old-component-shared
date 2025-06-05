import { asyncToGenerator as _asyncToGenerator, regenerator as _regenerator } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { ApplicationPaths, authService } from 'partner-oidc-auth';

var ProcessRepose = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(err) {
    var _err$response, _err$response2;
    var dataError, _authService$userMana, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!(((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 403)) {
            _context.n = 7;
            break;
          }
          dataError = err.response.data;
          _t = dataError.Code;
          _context.n = _t === 3 ? 1 : _t === 1 ? 3 : 5;
          break;
        case 1:
          _context.n = 2;
          return authService.signOut({
            returnUrl: authService.getReturnUrl()
          });
        case 2:
          return _context.a(3, 6);
        case 3:
          _context.n = 4;
          return (_authService$userMana = authService.userManager) === null || _authService$userMana === void 0 ? void 0 : _authService$userMana.revokeTokens(['access_token']);
        case 4:
          window.location.replace(ApplicationPaths.Origin(''));
          return _context.a(3, 6);
        case 5:
          window.location.replace(ApplicationPaths.Origin(ApplicationPaths.IdentityAccessDenied));
          return _context.a(3, 6);
        case 6:
          _context.n = 8;
          break;
        case 7:
          if (((_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.status) === 401) ; else if (err.code === 'ERR_CANCELED') ;
        case 8:
          return _context.a(2, Promise.reject(err));
      }
    }, _callee);
  }));
  return function ProcessRepose(_x) {
    return _ref.apply(this, arguments);
  };
}();

export { ProcessRepose };
//# sourceMappingURL=RequestHelper.js.map
