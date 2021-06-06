import {DialogActions, DialogContent} from "@material-ui/core";
import React, {useContext, useEffect, useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import VaccineService from "../services/VaccineService";
import _ from "lodash";
import {TextField} from "@material-ui/core";
import AuthContext from "../context/AuthContext";
import FormControlInput from "./FormControlInput";
import {func} from "prop-types";
import AutocompleteField from "./AutocompleteField";


function VacinationDialogStep(props) {

    const {authToken} = useContext(AuthContext);

    const [vaccines, setVaccines] = useState([]);
    const [diseases, setDiseases] = useState([]);

    const [vaccination, setVaccination] = useState({
        "vaccine" : "",
        "disease" : "",
        "chargeNumber" : ""
    });

    function handleChange(e) {
        const {id, value, type, name, checked} = e.target;
        const inputVal = type === 'checkbox' ? checked : value;
        const inputID = id ? id : name;
        setVaccination({...vaccination, [inputID]: inputVal});
    }

    function handleVaccineChangeSelect(e) {
        console.log(e);
        const {value} = e.target;
        const disease = value && value.disease ? value.disease : "";
        setVaccination({...vaccination, ["disease"]: disease});
    }

    useEffect(async () => {
        const vaccineList = await VaccineService.getVaccines(authToken);
        setVaccines(vaccineList);
        const diseaseList = _.map(_.uniqBy(vaccineList, "disease"), "disease");
        setDiseases(diseaseList);

    }, []);

    return (
        <React.Fragment>
            <DialogContent>
                <AutocompleteField
                    id="vaccine"
                    label="Vaccine"
                    onChange={handleChange}
                    onChangeSelect={handleVaccineChangeSelect}
                    options={_.map(vaccines,(vaccine)=>{
                        vaccine.label = vaccine.name +" - " + vaccine.disease + " - " + vaccine.authorizationHolder;
                        return vaccine;
                    })}></AutocompleteField>
                {vaccination.vaccine}
                <AutocompleteField
                    id="disease"
                    label="Disease"
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
                    fullWidth></FormControlInput>
            </DialogContent>
            <DialogActions>

            </DialogActions>
        </React.Fragment>);
}

export default VacinationDialogStep;