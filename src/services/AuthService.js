import {func} from "prop-types";

const AuthService = (function (){

    function createUser(user) {
        return fetch('/api/register', {
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

    function getUser(token) {
        return fetch('/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+token
            }
        }).then((response) => {
            if (!response.ok) {
                throw response.statusText;
            }
            return response.json();
        });
    }



    function auth(mail, password) {
        return fetch('/api/login', {
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


    return {auth,  createUser, getUser}
})();

export default AuthService;