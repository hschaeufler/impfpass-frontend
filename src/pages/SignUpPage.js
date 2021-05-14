import React, {useEffect, useState} from "react";
import SignUpComponent from "../components/SignUpComponent";
import FrontTemplate from "../templates/FrontTemplate";
import AuthService from "../services/AuthService";
import {useHistory} from "react-router-dom";


function SignUpPage(props) {

    const history = useHistory();
    const [error,setError] = useState(null);

    async function handleSignUp(user) {
            const newUser = await AuthService.createUser(user);
            history.push("/");
    }

    return (
        <FrontTemplate>
            <SignUpComponent onSignUp={handleSignUp} toLogin={"/login"} maxWidth="sm"></SignUpComponent>
        </FrontTemplate>
    );
}

export default SignUpPage;