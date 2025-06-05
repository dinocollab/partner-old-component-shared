import { AxiosError } from 'axios'
// import { ApiAlertContext } from 'local-lib/Views'
import { ApplicationPaths } from 'partner-oidc-auth'
import { authService } from 'partner-oidc-auth'
export const ProcessRepose = async (err: AxiosError) => {
  if (err.response?.status === 403) {
    const dataError: { Code: number; Message: string } = err.response.data as any
    switch (dataError.Code) {
      case 3: {
        await authService.signOut({ returnUrl: authService.getReturnUrl() })
        break
      }
      case 1: {
        await authService.userManager?.revokeTokens(['access_token'])
        window.location.replace(ApplicationPaths.Origin(''))
        break
      }
      default: {
        window.location.replace(ApplicationPaths.Origin(ApplicationPaths.IdentityAccessDenied))
        break
      }
    }
  } else if (err.response?.status === 401) {
  } else if (err.code === 'ERR_CANCELED') {
  }
 
  return Promise.reject(err)
}
