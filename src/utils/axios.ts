import "whatwg-fetch";
// import { fetchJsonp } from 'fetch-jsonp';
import * as fetchJsonp from 'fetch-jsonp';
//test1
/**
 * @description: 枚举出请求数据格式类型
 * @param {type} 枚举类型
 * @return: 
 */
enum ContentType {
    json = 'application/json;charset=UTF-8',
    form = 'application/x-www-form-urlencoded; charset=UTF-8'
}
/**
 * @description: 枚举request请求的method方法
 * @param {type} 枚举类型
 * @return: 
 */
enum HttpMethod {
    get = 'GET',
    post = 'POST'
}
/**
 * @description: 声明请求头header的类型
 * @param {type} 
 * @return: 
 */
interface IHeader {
    Accept?: string;
    'Content-Type': string;
    [propName: string]: any;
}
/**
 * @description: 声明fetch请求参数配置
 * @param {type} 
 * @return: 
 */
interface IReqConfig {
    method?: string;
    credentials?: string;
    headers?: IHeader;
    body?:any;
}
interface IHttp {
    getFetch<R,P={}>(url: string, params?:P, options?:RequestInit): Promise<R>;
    // getFetchJsonp<R,P>(url: string, params?:P, options?:RequestInit): Promise<R>;
    postFetch<R,P={}>(url: string, params?:P): Promise<R>;
}
export default class HttpRequests implements IHttp {
    public handleUrl = (url: string) => (params:any):string => {
        if(params){
            let paramsArray: string[] = [];
            Object.keys(params).forEach((key) =>
                paramsArray.push(key + "=" + encodeURIComponent(params[key]))
            );
            if (url.search(/\?/) === -1) {
                typeof params === "object" ? (url += "?" + paramsArray.join("&")) : url;
            } else {
                url += "&" + paramsArray.join("&");
            }
        }
        return url;
    }

    public async getFetch<R, P={}>(url: string, params?:P, options?:RequestInit):Promise<R>{
        options = {
            method: HttpMethod.get,
            credentials: 'include',
            headers: {
                'Content-Type': ContentType.json
            } 
        }
        return await fetch(this.handleUrl(url)(params), options)
        .then<R>((response) => {
            if (response.ok) {
                return response.json();
            } else {
                // alert("服务器繁忙，请稍后再试！");
            }
        })
        .then<R>((response) => {
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            if (response) {
                return response;
            } else {
                // 非 200，错误处理
                return response;
            }
        })
        .catch<R>((error) => {
            return error;
        });
    }
    public async postFetch<R, P={}>(url: string, params?: P):Promise<R> {
        let formData = new FormData();
        Object.keys(params).forEach((key) => formData.append(key, params[key]));
        let options: RequestInit = {
            method: HttpMethod.get,
            credentials: 'include',
            headers: {
                'Content-Type': ContentType.json
            },
            body: formData
        }
        return await fetch(url, options)
        .then<R>((response) => {
            if (response.ok) {
                return response.json();
            } else {
                // alert("服务器繁忙，请稍后再试；\r\nCode:" + response.status);
            }
        })
        .then<R>((response) => {
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            return response;
        })
        .catch<R>((error) => {
            // alert("当前网络不可用，请检查网络设置！");
            return error;
        });
    }
}