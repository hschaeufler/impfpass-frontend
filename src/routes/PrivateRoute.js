import {Redirect, Route} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import RoutesConstants from "./RoutesConstants";

//see: https://reactrouter.com/web/example/auth-workflow
function PrivateRoute(props) {

    const {children, ...args} = props;
    const {isAuth} = useAuth();


    return (
        <Route {...args}>
            {isAuth() ? children : <Redirect to={RoutesConstants.LOGIN_PATH}></Redirect>}
        </Route>
    );
}

export default PrivateRoute;