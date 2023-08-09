import type { RolesEnum } from "../enums/roles.enum"

export default class User {
  readonly accessToken: string
  readonly id: number
  readonly types: RolesEnum[]
  readonly tokenType: string
  readonly userName: string

  constructor (
    id: number,
    userName: string,
    accessToken: string,
    types: RolesEnum[],
    tokenType: string
  ) {
    this.accessToken = accessToken
    this.id = id
    this.types = types
    this.tokenType = tokenType
    this.userName = userName
  }

  static createFromJson (json: any): User {
    try {
      return new User(json.id, json.username, json.accessToken, json.tipos, json.tokenType)
    } catch (_) {
      throw new Error('Erro ao buscar dados do usuário')
    }
  }
}