import React from 'react';
import {Route, Routes} from "react-router-dom";
import styles from './app.module.css';
import {Login} from "./views/login";
import {Path, PrivateRoute} from "./shared/route";
import {Registration} from "./views/registration";
import {Offers} from "./views/offers";

const App = () => {

    return (
        <div className={styles.app}>
            <Routes>
                <Route path={Path.signIn} element={<Login/>}/>
                <Route path={Path.signUp} element={<Registration/>}/>
                <Route path={Path.offers} element={
                    // <PrivateRoute>
                        <Offers/>
                    // </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
