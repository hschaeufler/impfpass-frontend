import React from 'react';
import FormControlInput from "./FormControlInput";
import PropTypes from "prop-types";
const {DateTime} = require("luxon");

function VaccinationCard({value, ...args}) {

    const dateTimeFormat = "dd.MM.yyyy HH:mm:ss";

    return (<React.Fragment {...args}>
        <FormControlInput
            disabled
            id="vaccinationId"
            label="Vaccination Id"
            value={value.uuid ? value.uuid : ""}
            margin="normal"
            variant="filled"
            fullWidth></FormControlInput>
        <FormControlInput
            disabled
            id="registrationId"
            label="Registration Id"
            value={value.registrationId ? value.registrationId : ""}
            margin="normal"
            variant="outlined"
            fullWidth></FormControlInput>
        <FormControlInput
            id="vaccinationDate"
            label="Vaccination Date"
            value={value.timestamp ? DateTime.fromISO(value.timestamp).toFormat(dateTimeFormat) : ""}
            disabled
            margin="normal"
            variant="outlined"
            fullWidth></FormControlInput>
        <FormControlInput
            id="registrationDate"
            label="Vaccination Registration Date"
            value={value.registrationTimestamp ? DateTime.fromISO(value.registrationTimestamp).toFormat(dateTimeFormat) : ""}
            disabled
            margin="normal"
            variant="outlined"
            fullWidth></FormControlInput>
        <FormControlInput
            id="vaccine"
            label="Vaccine"
            value={value.vaccine ? value.vaccine : ""}
            disabled
            margin="normal"
            variant="outlined"
            fullWidth></FormControlInput>
        <FormControlInput
            id="disease"
            label="Disease"
            value={value.disease ? value.disease : ""}
            disabled
            margin="normal"
            variant="outlined"
            fullWidth></FormControlInput>
        <FormControlInput
            id="chargeNumber"
            label="Charge Nr."
            value={value.chargeNumber ? value.chargeNumber : ""}
            disabled
            margin="normal"
            variant="outlined"
            fullWidth></FormControlInput>
        <FormControlInput
            id="vaccinatedPerson"
            label="Vaccinated Person"
            value={value.vaccinatedperson ? value.vaccinatedperson : ""}
            disabled
            margin="normal"
            variant="outlined"
            fullWidth></FormControlInput>
        <FormControlInput
            id="doctorsOffice"
            label="Doctor's Office"
            value={value.doctorsOffice ? value.doctorsOffice : ""}
            disabled
            margin="normal"
            variant="outlined"
            fullWidth></FormControlInput>
        <FormControlInput
            id="location"
            label="Location"
            value={value.location ? value.location : ""}
            disabled
            margin="normal"
            variant="outlined"
            fullWidth></FormControlInput>
    </React.Fragment>);
}

VaccinationCard.PropType = {
    value: PropTypes.object.isRequired
}

export default VaccinationCard;