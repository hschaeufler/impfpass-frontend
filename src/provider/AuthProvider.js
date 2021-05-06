import React, {useState} from "react";
import AuthContext from "../context/AuthContext"
import AuthService from "../services/AuthService";
import {useHistory} from "react-router-dom";

function AuthProvider(props) {

    const history = useHistory();
    const [authToken, setAuthToken] = useState(null);
    const [user, setUser] = useState(null);


    function logout() {
        setUser(null);
        setAuthToken(null);
    }

    function isAuth() {
        return user && authToken;
    }

    async function login(mail, password) {
        const currentAuthToken = await AuthService.auth(mail, password);
        setAuthToken(currentAuthToken);
        const currentAuthUser =  await AuthService.getUser(currentAuthToken);
        setUser(currentAuthUser);
        history.push("/");
    }


    return (<AuthContext.Provider value={{login, logout, isAuth, user, authToken}}>
        {props.children}
    </AuthContext.Provider>);
}

export default AuthProvider;