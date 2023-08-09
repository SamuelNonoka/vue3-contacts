import type IHttpClientInterface from "@/http-client/ihttp_client.interface";
import User from "../entities/user";
import type IAuthRepository from "./iauth_repository.interface";
import { HttpStatusCode } from "axios";

export default class AuthRepository implements IAuthRepository {
  private _httpClient: IHttpClientInterface

  constructor (httpClient: IHttpClientInterface) {
    this._httpClient = httpClient
  }

  async login(userName: string, password: string): Promise<User> {
    const body = {
      username: userName,
      password
    }

    const response = await this._httpClient.post('api/auth/login', JSON.stringify(body))

    if (response.status !== HttpStatusCode.Ok) {
      throw new Error('Login e/ou senha inválida!')  
    }

    return User.createFromJson(response.data)
  }
}