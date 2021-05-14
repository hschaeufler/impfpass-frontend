import React, {useContext} from "react";
import LogInComponent from "../components/LogInComponent";
import FrontTemplate from "../templates/FrontTemplate";
import useAuth from "../hooks/useAuth";
import {useHistory} from "react-router-dom";

function LogInPage(props) {

    const history = useHistory();
    const {login} = useAuth();

    async function handleLogin(mail, username) {
        await login(mail,username)
        history.push("/");
    }

    return (
        <FrontTemplate>
            <LogInComponent onLogin={handleLogin} toSignup={"/signup"} maxWidth="sm"></LogInComponent>
        </FrontTemplate>
    );
}

export default LogInPage;