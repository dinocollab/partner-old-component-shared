import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
export default class ServiceBase {
    _http: AxiosInstance;
    _urlBase: string;
    /**
     *
     */
    constructor(http?: AxiosInstance);
    MapResponse: () => void;
    TryFetchToken: (error: AxiosError, next: (error: AxiosError) => Promise<any>) => Promise<any>;
    _token?: string;
    SetToken(token?: string): void;
    getToken: () => Promise<string | null | undefined>;
    addCustomHeader(config?: AxiosRequestConfig): Promise<AxiosRequestConfig<any>>;
    addToken: (config?: AxiosRequestConfig) => Promise<AxiosRequestConfig<any> | undefined>;
    private InteruptHeader;
    Get<TModel>(url: string, config?: AxiosRequestConfig | undefined): Promise<TModel>;
    TryGet<TModel>(url: string, config?: AxiosRequestConfig | undefined): Promise<TModel | null>;
    Post<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<TModel>;
    PostResponse<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<import("axios").AxiosResponse<TModel, any>>;
    Put<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<TModel>;
    TryPut<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<TModel | null>;
    TryPost<TModel>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<TModel | null>;
    Delete<TModel>(url: string, config?: AxiosRequestConfig | undefined): Promise<TModel>;
    TryDelete<TModel>(url: string, config?: AxiosRequestConfig | undefined): Promise<TModel | null>;
    TryPushNotify<TFunc extends (...param: any[]) => any>(action: TFunc, ...p: Parameters<TFunc>): Promise<any>;
    PushNotify<TFunc extends (...param: any[]) => any>(action: TFunc, ...p: Parameters<TFunc>): Promise<any>;
}
export declare class CancelAction extends AbortController {
    cancel: () => void;
    trigger?: () => void;
}
