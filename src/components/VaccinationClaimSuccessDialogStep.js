import React from 'react';
import SimpleDialogStep from "./SimpleDialogStep";
import PropTypes from "prop-types";
import FormControlInput from "./FormControlInput";
import Alert from "@material-ui/lab/Alert";

const {DateTime} = require("luxon");


function VaccinationClaimSuccessDialogStep({vaccinationClaim,onClose}) {

    const dateTimeFormat = "dd.MM.yyyy HH:mm:ss";

    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    return (
        <SimpleDialogStep>
            <FormControlInput
                id="registrationId"
                label="Registration Id"
                value={vaccinationClaim.registrationId}
                disabled
                margin="normal"
                variant="outlined"
                fullWidth></FormControlInput>
            <FormControlInput
                id="claimId"
                label="Vaccination Id"
                value={vaccinationClaim.uuid}
                disabled
                margin="normal"
                variant="outlined"
                fullWidth></FormControlInput>
            <FormControlInput
                id="vaccinatedPerson"
                label="vaccinated Person"
                helperText="This should be your name!"
                value={vaccinationClaim.vaccinatedperson}
                disabled
                margin="normal"
                variant="outlined"
                fullWidth></FormControlInput>
            <Alert severity="success">You have successful submited your Vaccination!</Alert>
        </SimpleDialogStep>
    );
}

VaccinationClaimSuccessDialogStep.propTypes = {
    vaccinationClaim: PropTypes.object.isRequired,
    onClose: PropTypes.func,
}

export default VaccinationClaimSuccessDialogStep;