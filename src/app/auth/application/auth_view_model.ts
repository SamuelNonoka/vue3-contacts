import { useSnackbar } from "@/utils/snackbar.util";
import type IAuthRepository from "../domain/repositories/iauth_repository.interface";
import LoginFormDto from "./dtos/login_form.dto";
import type User from "../domain/entities/user";
import useAuthenticatedUserStore from "@/store/authenticated_user.store";
import router from "@/plugins/router";
import useRoutesUtil from "@/utils/routes.util";

export default class AuthViewModel {
  private _authRepository: IAuthRepository

  constructor (authRepository: IAuthRepository) {
    this._authRepository = authRepository
  }

  login (loginForm: LoginFormDto) {
    this._authRepository.login(loginForm.name, loginForm.password)
      .then(user => {
        localStorage.setItem('accessToken', user.accessToken)
        this.storeUser(user)
        this.goToHome()
      })
      .catch(e => this.showErrorSnackbar(e.message))
  }

  storeUser (user: User) {
    useAuthenticatedUserStore().setUserState(user)
  }

  showErrorSnackbar (text: string) {
    const { showErrorSnackbar } = useSnackbar()
    showErrorSnackbar(text)
  }

  goToHome () {
    const { routesNames } = useRoutesUtil()
    router.push({ name: routesNames.HOME })
  }
}