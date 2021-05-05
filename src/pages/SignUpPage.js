import React, {useEffect, useState} from "react";
import SignUpComponent from "../components/SignUpComponent";
import FrontTemplate from "../templates/FrontTemplate";
import AuthService from "../services/AuthService";


function SignUpPage(props) {

    const [error,setError] = useState(null);

    function handleSignUp(user) {
        try {
            const newUser = AuthService.createUser(user);
        } catch (exception) {
            setError(exception);
        }

    }

    return (
        <FrontTemplate>
            <SignUpComponent onSignUp={handleSignUp} toLogin={"/login"} maxWidth="sm"></SignUpComponent>
        </FrontTemplate>
    );
}

export default SignUpPage;