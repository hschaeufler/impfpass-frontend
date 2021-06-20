import {Button} from "@material-ui/core";
import React, {useContext, useEffect, useState} from 'react';
import VaccineService from "../services/VaccineService";
import _ from "lodash";
import AuthContext from "../context/AuthContext";
import FormControlInput from "./FormControlInput";
import AutocompleteField from "./AutocompleteField";
import VaccinationService from "../services/VaccinationService";
import Alert from "@material-ui/lab/Alert";
import SimpleDialogStep from "./SimpleDialogStep";
import PropTypes from "prop-types";


function VaccinationRegistrationDialogStep(props) {

    const {onClose, onVaccination} = props;

    const {authToken} = useContext(AuthContext);

    const [vaccines, setVaccines] = useState([]);
    const [diseases, setDiseases] = useState([]);

    const [vaccination, setVaccination] = useState({
        vaccine: "",
        disease: "",
        chargeNumber: ""
    });

    const [showError, setShowError] = useState(false);
    const [error, setError] = useState("");

    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    async function handleSubmit() {
        setError(null);
        if (!validateForm()) {
            setShowError(true);
            return;
        }

        try {
            const result = await VaccinationService.saveRegistration(vaccination, authToken);

            if (onVaccination) {
                onVaccination(result);
            }

        } catch (exception) {
            setError(exception);
        }

    }

    function handleChange(e) {
        const {id, value, type, name, checked} = e.target;
        const inputVal = type === 'checkbox' ? checked : value;
        const inputID = id ? id : name;
        console.log(e);
        setVaccination({...vaccination, [inputID]: inputVal});
    }

    function handleVaccineChangeSelect(e) {
        console.log(e);
        const {value} = e.target;
        const disease = value && value.disease ? value.disease : "";
        setVaccination({...vaccination, ["disease"]: disease});
    }

    function validateForm() {
        return vaccination.vaccine && vaccination.disease && vaccination.chargeNumber;
    }

    useEffect(() => {
        async function getVaccines() {
            const vaccineList = await VaccineService.getVaccines(authToken);
            setVaccines(vaccineList);
            const diseaseList = _.map(_.uniqBy(vaccineList, "disease"), "disease");
            setDiseases(diseaseList);
        }

        getVaccines();
    }, []);

    const dialogActions = <Button autoFocus size="large" onClick={handleSubmit} variant="contained"
                                  color="primary">Submit</Button>;

    return (
        <SimpleDialogStep onClose={handleClose}
                          dialogActions={dialogActions}>
            <AutocompleteField
                id="vaccine"
                label="Vaccine"
                onChangeSelect={handleVaccineChangeSelect}
                onChange={handleChange}
                value={vaccination.vaccine}
                options={_.map(vaccines, (vaccine) => {
                    vaccine.label = vaccine.name + " - " + vaccine.disease + " - " + vaccine.authorizationHolder;
                    return vaccine;
                })}
                error={showError && !vaccination.vaccine}
            ></AutocompleteField>
            <AutocompleteField
                id="disease"
                label="Disease"
                error={showError && !vaccination.disease}
                onChange={handleChange}
                options={diseases}
                value={vaccination.disease}
                label="Disease"></AutocompleteField>
            <FormControlInput
                id="chargeNumber"
                label="Charge Nr."
                helperText="Enter Charge Number here"
                value={vaccination.chargeNumber}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                error={showError && !vaccination.chargeNumber}
                fullWidth></FormControlInput>
            {error && <Alert severity="warning">{error}</Alert>}
        </SimpleDialogStep>
    );
}

VaccinationRegistrationDialogStep.propTypes = {
    onVaccination: PropTypes.func,
    onClose: PropTypes.func
}

export default VaccinationRegistrationDialogStep;