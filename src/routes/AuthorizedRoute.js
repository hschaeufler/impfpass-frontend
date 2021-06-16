import {Redirect} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import RoutesConstants from "./RoutesConstants";
import PrivateRoute from "./PrivateRoute";

//see: https://reactrouter.com/web/example/auth-workflow
function AuthorizedRoute(props) {

    const {children, role, alternateContent, redirectTo, ...args} = props;
    const {isAuth, user, authToken} = useAuth();

    useEffect(() => {
        console.log(user);
        console.log(authToken);
    }, []);


    useEffect(() => {
        console.log(user);
        console.log(authToken);
    }, []);

    const alternateChildren = alternateContent ? alternateContent :
        <Redirect to={redirectTo ? redirectTo : RoutesConstants.STANDARD_PATH}></Redirect>

    return (
        <PrivateRoute {...args}>
            {user && user.role && user.role === role ? children : alternateChildren}
        </PrivateRoute>
    );
}

AuthorizedRoute.propTypes = {
    role: PropTypes.string,
    alternateContent: PropTypes.element,
    redirectTo: PropTypes.string,
}

export default AuthorizedRoute;