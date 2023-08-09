export default class LoginFormDto {
  readonly name: string
  readonly password: string

  constructor (name: string, password: string) {
    this.name = name
    this.password = password
  }
}