import {func} from "prop-types";

const AuthService = (function (){

    let authToken = null;

    function isAuth(){
        return authToken ? true : false;
    }

    function getAuthToken(){
        return authToken;
    }
    function setAuthToken(authToken){
        return authToken;
    }

    function createUser(user) {
        return fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((response) => {
            if (!response.ok) {
                throw response.statusText;
            }
            return response.json();
        });
    }

    function getUser() {
        return fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((response) => {
            if (!response.ok) {
                throw response.statusText;
            }
            return response.json();
        });
    }



    function auth(mail, password) {
        return fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail : mail,
                password : password
            }),
        }).then((response) => {
            if (!response.ok) {
                throw response.statusText;
            }
            return response.text();
        });
    }


    return {auth, isAuth, createUser, getAuthToken, setAuthToken}
})();

export default AuthService;