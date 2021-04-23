import React from "react";
import Container from "@material-ui/core/Container";
import LogInComponent from "../components/LogInComponent";


function LogInPage(props){

    return(
        <Container maxWidth="lg">
            <LogInComponent></LogInComponent>
        </Container>
    );
}

export default LogInPage;