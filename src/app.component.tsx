import React from 'react';
import {Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import styles from './app.module.css';
import {Login} from "./views/login";
import {Path} from "./shared/route";
import {Registration} from "./views/registration";
import {PrivateRoute} from "./shared/route";
import {Trades} from "./views/trades";
import {AuthStore} from "./store/auth-store";
import {RegistrationDataType} from "./views/registration/registration.component";
import {LoginDataType} from "./views/login/login.component";

const App = observer(() => {

    const {login, registration} = AuthStore;

    const registrationSubmitHandler = (dataForm: RegistrationDataType): void => {
        const {email, nickName, password} = dataForm;
        registration(email, nickName, password)
    }

    const loginSubmitHandler = (dataForm: LoginDataType): void => {
        const {email, password} = dataForm
        login(email, password)
    }

    return (
        <div className={styles.app}>
            <Routes>
                <Route path={Path.signIn} element={<Login onSubmit={loginSubmitHandler}/>}/>
                <Route path={Path.signUp} element={<Registration onSubmit={registrationSubmitHandler}/>}/>
                <Route path={Path.trades} element={
                    <PrivateRoute>
                        <Trades/>
                    </PrivateRoute>}
                />
            </Routes>
        </div>
    );
});

export default App;
