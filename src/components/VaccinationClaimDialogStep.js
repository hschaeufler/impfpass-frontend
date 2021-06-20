import React, {useContext, useEffect, useState} from 'react';
import SimpleDialogStep from "./SimpleDialogStep";
import PropTypes from "prop-types";
import VaccinationService from "../services/VaccinationService";
import AuthContext from "../context/AuthContext";
import FormControlInput from "./FormControlInput";
import Alert from "@material-ui/lab/Alert";
import {Button} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';


function VaccinationClaimDialogStep({registrationId, onClose, onVaccinationClaim}) {

    const {authToken} = useContext(AuthContext);

    const [error, setError] = useState("");

    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    function buildClaimObject(registrationId) {
        return {registrationId: registrationId};
    }

    useEffect(() => {
        setError(null);
    }, []);

    async function handleVaccinationClaim() {
        const claimObject = buildClaimObject(registrationId);
        try {
            const vaccinationClaim = await VaccinationService.saveClaim(claimObject, authToken);
            if(onVaccinationClaim){
                onVaccinationClaim(vaccinationClaim);
            }
        } catch (exception) {
            setError(exception);
        }
    }

    const dialogActions = (
        <React.Fragment>
            <Button startIcon={<SendIcon></SendIcon>} onClick={handleVaccinationClaim} autoFocus
                    size="large" variant="contained" color="primary">Submit</Button>
        </React.Fragment>);

    return (
        <SimpleDialogStep dialogActions={dialogActions} onClose={handleClose}>
            <FormControlInput
                id="registrationId"
                label="Registration Id"
                helperText="When the number is not Ok, please Scan QRCode again!"
                value={registrationId}
                disabled
                margin="normal"
                variant="outlined"
                fullWidth></FormControlInput>
            {error && <Alert severity="warning">{error}</Alert>}
        </SimpleDialogStep>
    );
}

VaccinationClaimDialogStep.propTypes = {
    registrationId: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    onVaccinationClaim: PropTypes.func
}

export default VaccinationClaimDialogStep;