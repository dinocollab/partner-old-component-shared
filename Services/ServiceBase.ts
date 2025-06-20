import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { authService } from 'partner-oidc-auth'
import { HttpService } from './Getway'
import { ProcessRepose } from './Getway/RequestHelper'

interface ErrorModel {
  [key: string]: string[]
}

const ProcessError = (err: AxiosError<ErrorModel>) => {
  const data = err.response?.data ?? {}
  const errorMessages = Object.keys(data)
    .filter((x: any) => data[x].length > 0)
    .map((x: any) => data[x][0])
  if (errorMessages.length < 1) return
  ;(window as any).ApiAlertContext.ApiAlert?.PushError(errorMessages.join('\n'))
}

export default class ServiceBase {
  _http = HttpService
  _urlBase = ''
  /**
   *
   */
  constructor(http?: AxiosInstance) {
    if (http) {
      this._http = http
    }
    this.MapResponse()
  }
  MapResponse = () => {
    this._http.interceptors.response.use(
      (res) => res,
      (err) => this.TryFetchToken(err, ProcessRepose)
    )
    this._http.interceptors.request.use((req) => {
      return this.InteruptHeader(req)
    })
  }
  
  TryFetchToken = async (error: AxiosError, next: (error: AxiosError) => Promise<any>): Promise<any> => {
    const originalRequest = error.config
    // Thử lại tối đa 3 lần khi gặp lỗi 401
    if (error?.response?.status === 401 && originalRequest) {
      (originalRequest as any)._retryCount = ((originalRequest as any)._retryCount || 0) + 1
      if ((originalRequest as any)._retryCount <= 3) {
        await authService.signIn({})
        await this.InteruptHeader(originalRequest)
        return axios(originalRequest)
      }
    }
    return next(error)
  }

  _token?: string
  SetToken(token?: string) {
    this._token = token
  }
  getToken = async () => {
    return this._token === undefined ? await authService.getAccessToken() : this._token
  }
  async addCustomHeader(config?: AxiosRequestConfig) {
    if (!config) {
      config = { headers: {} }
    }
    if (!config.headers) {
      config.headers = {}
    }
    return config
  }
  addToken = async (config?: AxiosRequestConfig) => {
    const _token = await this.getToken()
    if (_token) {
      if (!config) {
        config = { headers: {} }
      }
      if (!config.headers) {
        config.headers = {}
      }
      config.headers.Authorization = 'Bearer ' + _token
    }
    return config
  }
  private async InteruptHeader(config: AxiosRequestConfig) {
    await this.addToken(config)
    return config
  }
  async Get<TModel>(url: string, config?: AxiosRequestConfig | undefined) {
    const response = await this._http.get<TModel>(url, await this.addCustomHeader(config))
    return response.data
  }
  async TryGet<TModel>(url: string, config?: AxiosRequestConfig | undefined) {
    try {
      return this.Get<TModel>(url, config)
    } catch {
      return null
    }
  }
  async Post<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    const response = await this._http.post<TModel>(url, data, await this.addCustomHeader(config))
    return response.data
  }
  async PostResponse<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    const response = await this._http.post<TModel>(url, data, await this.addCustomHeader(config))
    return response
  }
  async Put<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    const response = await this._http.put<TModel>(url, data, await this.addCustomHeader(config))
    return response.data
  }

  async TryPut<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    try {
      await this.addToken(config)
      return await this.Put<TModel>(url, data, config)
    } catch (error) {
      return null
    }
  }
  async TryPost<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    try {
      return await this.Post<TModel>(url, data, config)
    } catch (error) {
      return null
    }
  }
  async Delete<TModel>(url: string, config?: AxiosRequestConfig | undefined) {
    const response = await this._http.delete<TModel>(url, await this.addCustomHeader(config))
    return response.data
  }
  async TryDelete<TModel>(url: string, config?: AxiosRequestConfig | undefined) {
    try {
      return await this.Delete<TModel>(url, await this.addCustomHeader(config))
    } catch (error) {
      ProcessError(error as any)
      return null
    }
  }

  async TryPushNotify<TFunc extends (...param: any[]) => any>(action: TFunc, ...p: Parameters<TFunc>) {
    try {
      return await this.PushNotify(action, ...p)
    } catch (err) {}
  }

  async PushNotify<TFunc extends (...param: any[]) => any>(action: TFunc, ...p: Parameters<TFunc>) {
    try {
      return await action.bind(this)(...p)
    } catch (err) {
      const error = err as AxiosError
      const data = error.response?.data as any
      if (data) {
        const keys = Object.keys(data)
        keys.forEach((key) => {
          const errors = data[key] as string[]
          if (Array.isArray(errors)) {
            errors.forEach((message) => {
              ;(window as any).ApiAlertContext?.ApiAlert?.PushError(message)
            })
          }
        })
      }
      throw error
    }
  }
}

export class CancelAction extends AbortController {
  cancel = () => {
    this.trigger && this.trigger()
    super.abort()
  }
  trigger?: () => void
}
