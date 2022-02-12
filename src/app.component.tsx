import React from 'react';
import {Route, Routes} from "react-router-dom";
import styles from './app.styles.module.css';
import {Login} from "./views/login";
import {Path} from "./shared/route";
import {Registration} from "./views/registration";
import {PrivateRoute} from "./shared/route/private-route";
import {Trades} from "./views/trades";

const App = () => {

    const submit = (value: any)=>{
        console.log(value)
    }

    return (
        <div className={styles.app}>
            <Routes>
                <Route path={Path.signIn} element={<Login onSubmit={submit}/>}/>
                <Route path={Path.signUp} element={<Registration onSubmit={submit}/>}/>
                <Route path={Path.trades} element={<PrivateRoute><Trades/></PrivateRoute>}/>
            </Routes>
        </div>
    );
}

export default App;
