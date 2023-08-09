import type Response from '@/http-client/response'

export interface IHeaders {
	[key: string]: any
}

export default interface IHttpClientInterface {
	options(url: string, headers?: IHeaders): Promise<any>
	get(url: string, headers?: IHeaders): Promise<Response>
	del(url: string, headers?: IHeaders): Promise<any>
	post(url: string, data: string, headers?: IHeaders): Promise<Response>
	patch(url: string, data: string, headers?: IHeaders): Promise<any>
	put(url: string, data: string, headers?: IHeaders): Promise<any>
}
