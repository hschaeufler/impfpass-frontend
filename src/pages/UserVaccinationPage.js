import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import QRCodeIcon from "../icons/QRCodeIcon";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import VaccinationTable from "../components/VaccinationTable";
import {Link, Route, useHistory} from "react-router-dom";
import VaccinationClaimDialog from "../components/VaccinationClaimDialog";
import RoutesConstants from "../routes/RoutesConstants";

const useStyles = makeStyles((theme) => ({
    fabButton: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));


function UserVaccinationPage(props){
    const classes = useStyles();
    const history = useHistory();

    function handleDialogClose(){
        history.goBack();
    }


    return(
        <React.Fragment>
            <Container maxWidth="lg">
                <br/>
                <Typography variant="h4" component="h2">Impfungen Nutzer</Typography>
                <br/>
                <VaccinationTable></VaccinationTable>
                <Route path={RoutesConstants.NEW_VACCINATION_PATH}>
                    <VaccinationClaimDialog onClose={handleDialogClose}></VaccinationClaimDialog>
                </Route>
            </Container>
            <Fab component={Link}
                 to={RoutesConstants.NEW_VACCINATION_PATH} color="primary" aria-label="scan vaccination" className={classes.fabButton}>
                <QRCodeIcon fontSize="large"/>
            </Fab>
        </React.Fragment>)
}

export default UserVaccinationPage;