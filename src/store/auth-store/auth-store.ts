import {action, computed, makeObservable, observable, runInAction} from "mobx";
import {authApi} from "../../api/auth-api";

class AuthStore {
    isAuth: boolean;
    userName: string;

    constructor() {
        makeObservable(this, {
            isAuth: observable,
            authorization: computed,
            login: action,
            registration: action,
        })
        this.isAuth = false
        this.userName = ''
    }

    get authorization(): boolean {
        return this.isAuth
    }

    login(email: string, password: string) {
        authApi.login(email, password)
            .then(() => runInAction(() => {
                this.isAuth = true
            }))
            .catch((error) => console.log(error))
    }

    registration(email: string, userName: string, password: string) {
        authApi.registration(email, userName, password)
            .then(({username}) => runInAction(() => {
                this.isAuth = true;
                this.userName = username
            }))
            .catch((error) => console.log(error))
    }
}

export default new AuthStore();