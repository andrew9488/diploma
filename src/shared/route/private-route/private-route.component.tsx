import React from 'react';
import {Navigate} from 'react-router-dom';
import {Path} from "../path";

type PrivateRoutePropsType = {
    children: JSX.Element;
}

const PrivateRoute:React.FC<PrivateRoutePropsType> = ({children}) => {

    const auth = true
    return auth ? children : <Navigate to={Path.signIn} />;
};

export default PrivateRoute;
