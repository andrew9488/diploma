import {instance} from "../instance";

const authApi = {
    login(email: string, password: string) {
        return instance.post(`/auth/auth/login/`,
            {email, password})
            .then(response => response.data)
    },
    registration(email: string, userName: string, password: string) {
        return instance.post(`/auth/auth/registration/`,
            {email, username: userName, password}
        ).then(response => response.data)
    }
}

export default authApi;