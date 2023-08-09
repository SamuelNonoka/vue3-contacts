import type User from "../entities/user";

export default interface IAuthRepository {
  login (userName: string, password: string): Promise<User>
}