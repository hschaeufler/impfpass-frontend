import React from 'react';

const AuthContext = React.createContext({
    authToken: null,
    user: null,
    isAuth : ()=>{},
    login: () => {},
    logout: () => {},
    getRole : ()=> {},
    isRole: () =>{}
});

export default AuthContext;