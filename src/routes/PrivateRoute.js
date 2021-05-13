import {Redirect, Route} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useEffect} from "react";

//see: https://reactrouter.com/web/example/auth-workflow
function PrivateRoute(props) {

    const {children, ...args} = props;
    const {isAuth, user, authToken} = useAuth();

    useEffect(()=>{
        console.log(user);
        console.log(authToken);
    },[]);

    return (
        <Route
            {...args}>
            {(user && authToken) ? children: <Redirect to={"/login"}></Redirect>}
        </Route>
    );
}

export default PrivateRoute;