import { AxiosError } from 'axios'
import { ApiAlertContext } from 'local-lib/Views'
import { ApplicationPaths } from 'partner-oidc-auth'
import { authService } from 'partner-oidc-auth'

export const CheckTokenVersion = async () => {
  const res = await fetch('/Validate/Version')
  const tokenVersion = res.headers.get('token_version')
  const user = await authService.getUser()
  if (user?.token_version !== tokenVersion) {
    await authService.userManager?.clearStaleState()
    await authService.userManager?.removeUser()
    await authService.userManager?.signinSilent()
  }
}

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
        window.location.replace(ApplicationPaths.Origin(`${process.env.PUBLIC_URL}/Error`))
        break
      }
    }
  } else if (err.response?.status === 401) {
    await authService.userManager?.revokeTokens(['access_token'])
    try {
      const user = await authService.userManager?.signinSilent(
        authService.createArguments({
          returnUrl: authService.getReturnUrl(),
        })
      )
      authService.updateState(user)
    } catch (error) {
      await authService.userManager?.clearStaleState()
      await authService.userManager?.removeUser()
      await authService.signOut({ returnUrl: authService.getReturnUrl() })
    }
  } else if (err.code === 'ERR_CANCELED') {
  } else if ((err.response?.status ?? 500) >= 500) {
    if (err.code !== 'ERR_CANCELED') {
      ApiAlertContext.ApiAlert?.PushError('An error has occurred! (server error 500)')
    }
  } else if (err.response?.status === 404) {
    ApiAlertContext.ApiAlert?.PushError('An error has occurred! (server error 404)')
  }
  return Promise.reject(err)
}
