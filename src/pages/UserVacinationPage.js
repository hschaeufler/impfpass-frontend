import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import QRCodeIcon from "../icons/QRCodeIcon";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import VaccinationTable from "../components/VaccinationTable";
import {Link, Route} from "react-router-dom";
import VaccinationDialog from "../components/VaccinationDialog";

const useStyles = makeStyles((theme) => ({
    fabButton: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));


function UserVacinationPage(props){
    const classes = useStyles();

    return(
        <React.Fragment>
            <Container maxWidth="lg">
                <br/>
                <Typography variant="h4" component="h2">Impfungen</Typography>
                <br/>
                <VaccinationTable></VaccinationTable>
                <Route path={`/vacination/new`}>
                    <VaccinationDialog></VaccinationDialog>
                </Route>
            </Container>
            <Fab component={Link}
                 to="/vacination/new" color="primary" aria-label="scan vaccination" className={classes.fabButton}>
                <QRCodeIcon fontSize="large"/>
            </Fab>
        </React.Fragment>)
}

export default UserVacinationPage;