import React from 'react';
import {Route, Routes} from "react-router-dom";
import styles from './app.module.css';
import {Login} from "./views/login";
import {Path, PrivateRoute} from "./shared/route";
import {Registration} from "./views/registration";
import {Trades} from "./views/trades";

const App = () => {

    return (
        <div className={styles.app}>
            <Routes>
                <Route path={Path.signIn} element={<Login/>}/>
                <Route path={Path.signUp} element={<Registration/>}/>
                <Route path={Path.trades} element={
                    <PrivateRoute>
                        <Trades/>
                    </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
