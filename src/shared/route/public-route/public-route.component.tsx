import React from 'react';
import {Navigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {Path} from "../path";
import {AuthStore} from "../../../store/auth-store";

type PublicRouteRoutePropsType = {
    children: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteRoutePropsType> = observer(({children}) => {
    const {authorization} = AuthStore;
    return !authorization ? <Navigate to={Path.signIn}/> : children;
});

export default PublicRoute;
