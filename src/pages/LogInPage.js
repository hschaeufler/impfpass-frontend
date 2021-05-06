import React, {useContext} from "react";
import LogInComponent from "../components/LogInComponent";
import FrontTemplate from "../templates/FrontTemplate";
import useAuth from "../hooks/useAuth";

function LogInPage(props) {

    const {login} = useAuth();

    function handleLogin(mail, username) {
        login(mail,username)
    }

    return (
        <FrontTemplate>
            <LogInComponent onLogin={handleLogin} toSignup={"/signup"} maxWidth="sm"></LogInComponent>
        </FrontTemplate>
    );
}

export default LogInPage;