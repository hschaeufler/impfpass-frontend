import React, {useState} from "react";
import AuthContext from "../context/AuthContext"
import AuthService from "../services/AuthService";
import UserRole from "../enum/UserRole";


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

    function getRole() {
        if(user && user.role && user.role === UserRole.Doctor) {
            return UserRole.Doctor;
        }

        return UserRole.User;
    }

    function isRole(role) {
        if(role === user.role){
            return true;
        }
        return false;
    }

    async function login(mail, password) {
        const currentAuthToken = await AuthService.auth(mail, password);
        setAuthToken(currentAuthToken);
        const currentAuthUser =  await AuthService.getUser(currentAuthToken);
        setUser(currentAuthUser);
    }


    return (<AuthContext.Provider value={{login, logout, isAuth, user, getRole, isRole, authToken}}>
        {props.children}
    </AuthContext.Provider>);
}

export default AuthProvider;