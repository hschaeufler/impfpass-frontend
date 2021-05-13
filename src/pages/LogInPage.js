import React, {useContext} from "react";
import LogInComponent from "../components/LogInComponent";
import FrontTemplate from "../templates/FrontTemplate";
import useAuth from "../hooks/useAuth";

function LogInPage(props) {

    const {login} = useAuth();

    async function handleLogin(mail, username) {
        return login(mail,username)
    }

    return (
        <FrontTemplate>
            <LogInComponent onLogin={handleLogin} toSignup={"/signup"} maxWidth="sm"></LogInComponent>
        </FrontTemplate>
    );
}

export default LogInPage;