import React, {useState} from "react";
import AuthContext from "../context/AuthContext"
import AuthService from "../services/AuthService";


function AuthProvider(props) {


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
    }


    return (<AuthContext.Provider value={{login, logout, isAuth, user, authToken}}>
        {props.children}
    </AuthContext.Provider>);
}

export default AuthProvider;