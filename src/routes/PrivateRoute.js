import {Redirect, Route} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useEffect} from "react";
import RoutesConstants from "./RoutesConstants";

//see: https://reactrouter.com/web/example/auth-workflow
function PrivateRoute(props) {

    const {children, ...args} = props;
    const {isAuth, user, authToken} = useAuth();


    useEffect(() => {
        console.log(user);
        console.log(authToken);
    }, []);

    return (
        <Route {...args}>
            {(authToken && user) ? children : <Redirect to={RoutesConstants.LOGIN_PATH}></Redirect>}
        </Route>
    );
}

export default PrivateRoute;