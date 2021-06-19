import React, {useContext, useEffect, useState} from 'react';
import SimpleDialogStep from "./SimpleDialogStep";
import PropTypes from "prop-types";
import VaccinationCard from "./VaccinationCard";
import Alert from "@material-ui/lab/Alert";
import AuthContext from "../context/AuthContext";
import VaccinationService from "../services/VaccinationService";


function VaccinationDetailDialogStep(props) {

    const {onClose, vaccinationId, ...args} = props;


    const [vaccination, setVaccination] = useState([]);
    const [error, setError] = useState(null);

    const {authToken} = useContext(AuthContext);

    async function loadVaccination() {
        try {
            const vaccinationObj = await VaccinationService.getVaccination(authToken, vaccinationId);
            setVaccination(vaccinationObj);
        } catch (exception) {
            console.log(exception);
            setError(exception);
        }
    }


    useEffect(() => {
        loadVaccination();
    }, []);




    function handleClose() {
        if (onClose) {
            onClose();
        }
    }


    return (
        <SimpleDialogStep onClose={handleClose} {...args}>
            {vaccination && <VaccinationCard value={vaccination}></VaccinationCard>}
            {error && <Alert severity="warning">{error}</Alert>}
        </SimpleDialogStep>
    );
}

VaccinationDetailDialogStep.propTypes = {
    onClose: PropTypes.func,
    vaccinationId: PropTypes.string.isRequired
}

export default VaccinationDetailDialogStep;