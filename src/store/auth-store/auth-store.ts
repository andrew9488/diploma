import {action, computed, makeObservable, observable, runInAction} from "mobx";
import {AuthApiService, AuthApiType} from "../../api/auth-api";

class AuthStore {
    isAuth: boolean;
    authApi: AuthApiType;

    constructor() {
        makeObservable(this, {
            isAuth: observable,
            authorization: computed,
            login: action,
            registration: action,
        })
        this.isAuth = false;
        this.authApi = new AuthApiService();
        this.login = this.login.bind(this)
        this.registration = this.registration.bind(this)
    }

    get authorization(): boolean {
        return this.isAuth
    }

    login(email: string, password: string) {
        this.authApi.login(email, password)
            .then(() => {
                runInAction(() => {
                    this.isAuth = true
                })
            })
            .catch((error) => console.log(error))
    }

    registration(email: string, userName: string, password: string) {
        this.authApi.registration(email, userName, password)
            .then(() => {
                runInAction(() => {
                    this.isAuth = true;
                })
            })
            .catch((error) => console.log(error))
    }
}

export default new AuthStore();