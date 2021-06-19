import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import QRCodeIcon from "../icons/QRCodeIcon";
import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import VaccinationTable from "../components/VaccinationTable";
import {Link, Route, Switch, useHistory, useParams} from "react-router-dom";
import VaccinationRegistrationDialog from "../components/VaccinationRegistrationDialog";
import RoutesConstants from "../routes/RoutesConstants";
import VaccinationPageTemplate from "../templates/VaccinationPageTemplate";
import AuthContext from "../context/AuthContext";
import VaccinationClaimDialog from "../components/VaccinationClaimDialog";
import UserRole from "../enum/UserRole";
import VaccinationService from "../services/VaccinationService";
import VaccinationDetailDialog from "../components/VaccinationDetailDialog";

const useStyles = makeStyles((theme) => ({
    fabButton: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));


function VaccinationPage(props) {
    const classes = useStyles();
    const history = useHistory();
    const {id} = useParams()

    const [vaccinations, setVaccinations] = useState([]);

    const {authToken, getRole, isRole} = useContext(AuthContext);

    async function loadVaccinations() {
        try {
            const vaccinations = await VaccinationService.getVaccinations(authToken);
            setVaccinations(vaccinations);
        } catch (exception) {
            console.error(exception);
        }
    }

    useEffect(() => {
        loadVaccinations();
        const intervallId = setInterval(() => {
            loadVaccinations();
        }, 10000);


        return function cleanup() {
            console.log("Clear Interval", intervallId);
            clearInterval(intervallId);
        }
    }, []);


    function handleDialogClose() {
        history.goBack();
    }

    return (
        <VaccinationPageTemplate fab={<Fab component={Link}
                                           to={RoutesConstants.NEW_VACCINATION_PATH} color="primary"
                                           aria-label="scan vaccination"
                                           className={classes.fabButton}>
            <QRCodeIcon fontSize="large"/>
        </Fab>}>
            <br/>
            <Typography variant="h4" component="h2">Impfungen {getRole()}</Typography>
            <br/>
            <VaccinationTable value={vaccinations} type={getRole()}></VaccinationTable>
            <Switch>
                <Route path={RoutesConstants.NEW_VACCINATION_PATH} exact>
                    {isRole(UserRole.Doctor) &&
                    <VaccinationRegistrationDialog onClose={handleDialogClose}></VaccinationRegistrationDialog>}
                    {isRole(UserRole.User) &&
                    <VaccinationClaimDialog onClose={handleDialogClose}></VaccinationClaimDialog>}
                </Route>
                <Route path={RoutesConstants.VACCINATION_PATH_WITH_ID} exact>
                    <VaccinationDetailDialog vaccinationId={id} onClose={handleDialogClose}></VaccinationDetailDialog>
                </Route>
            </Switch>
        </VaccinationPageTemplate>)
}

VaccinationPage.propTypes = {}


export default VaccinationPage;