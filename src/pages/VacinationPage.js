import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import QRCodeIcon from "../icons/QRCodeIcon";
import React from "react";


function VacinationPage(props){
    return(
        <React.Fragment>
            <Container maxWidth="lg">
                <br/>
                <Typography variant="h4" component="h2">Impfungen</Typography>
                <br/>
            </Container>
            <Fab color="primary" aria-label="scan vaccination" className={classes.fabButton} >
                <QRCodeIcon fontSize="large"/>
            </Fab>
        </React.Fragment>)
}

export default VacinationPage;