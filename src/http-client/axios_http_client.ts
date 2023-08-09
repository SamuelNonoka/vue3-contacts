import type { IHeaders } from './ihttp_client.interface'
import type IHttpClientInterface from './ihttp_client.interface'
import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
import DomainResponse from '@/http-client/response'

export default class AxiosHttpClient implements IHttpClientInterface {
	httpAxios: AxiosInstance

	constructor() {
		this.httpAxios = axios.create({
			baseURL: import.meta.env.VITE_APP_API_URL,
			headers: {
				'Content-Type': 'application/json',
			},
		})

		this.httpAxios.interceptors.request.use(
			function (config) {
				config['baseURL'] = import.meta.env.VITE_APP_API_URL

				const userToken = localStorage.getItem('userToken')

				if (userToken) {
					config.headers['Authorization'] = `Bearer ${userToken}`
				}

				config.headers['Web-Domain'] = 'app.vantagensclube.com.br'
				config.headers['Content-Type'] = 'application/json'

				return config
			},
			function (error) {
				return Promise.reject(error)
			}
		)

		this.httpAxios.interceptors.response.use(
			function (response) {
				return response
			},
			function (error) {
				if (error.response?.status === HttpStatusCode.Unauthorized) {
					console.log('401')
				}
				return Promise.reject(error)
			}
		)
	}

	options(url: string, headers?: IHeaders | undefined): Promise<any> {
		throw new Error(`Method not implemented.\nurl: ${url}\nheaders: ${headers}`)
	}

	async get(url: string, headers?: IHeaders | undefined): Promise<DomainResponse> {
		const respose = await this.httpAxios.get(url, headers)
		return new DomainResponse(respose.data, respose.status)
	}

	del(url: string, headers?: IHeaders | undefined): Promise<any> {
		throw new Error(`Method not implemented.\nurl: ${url}\nheaders: ${headers}`)
	}

	async post(url: string, data: string, headers?: IHeaders | undefined): Promise<DomainResponse> {
		try {
			const response = await this.httpAxios.post(url, data, headers)
			return new DomainResponse(response.data, response.status, response.headers)
		} catch (e) {
			if (e instanceof AxiosError && e.response) {
				console.error(e)
				return new DomainResponse(e.response.data, e.response.status)
			}

			throw e
		}
	}

	async patch(url: string, data: string, headers?: IHeaders | undefined): Promise<any> {
		try {
			const response = await this.httpAxios.patch(url, data, headers)
			return new DomainResponse(response.data, response.status, response.headers)
		} catch (e) {
			if (e instanceof AxiosError && e.response) {
				console.error(e)
				return new DomainResponse(e.response.data, e.response.status)
			}

			throw e
		}
	}

	put(url: string, data: string, headers?: IHeaders | undefined): Promise<any> {
		throw new Error(`Method not implemented.\nurl: ${url}\nheaders: ${headers}`)
	}
}
