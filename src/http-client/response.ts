import type { IHeaders } from '@/http-client/ihttp_client.interface'

export default class Response {
	readonly data: any
	readonly status: number
	readonly headers?: IHeaders | undefined

	constructor(data: any, status: number, headers?: IHeaders | undefined) {
		this.data = data
		this.status = status
		this.headers = headers
	}
}
