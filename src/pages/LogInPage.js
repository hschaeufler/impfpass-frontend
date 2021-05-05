import React from "react";
import LogInComponent from "../components/LogInComponent";
import FrontTemplate from "../templates/FrontTemplate";
import AuthService from "../services/AuthService";

function LogInPage(props) {

    function handleLogin(mail, username) {
        AuthService.auth(mail,username)
    }

    return (
        <FrontTemplate>
            <LogInComponent onLogin={handleLogin} toSignup={"/signup"} maxWidth="sm"></LogInComponent>
        </FrontTemplate>
    );
}

export default LogInPage;