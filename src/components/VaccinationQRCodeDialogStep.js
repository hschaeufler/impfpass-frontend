import {Button, DialogActions, DialogContent} from "@material-ui/core";
import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import QRCode from "./QRCode";
import {Alert} from "@material-ui/lab";


function VaccinationQRCodeDialogStep(props) {

    const {value, onClose} = props;

    const [vaccinationID, setVaccinationID] = useState(null);
    const [exception, setException] = useState(null);



    function handleClose() {
        if (onClose) {
            onClose();
        }
    }


    useEffect(() => {
        setException(null);

        if(value && value.uuid) {
            setVaccinationID(value.uuid);
        } else {
            setException("No valid Vaccination. Please try again!");
        }

    }, [value]);

    return (
        <React.Fragment>
            <DialogContent>
                {vaccinationID && <QRCode data={vaccinationID}></QRCode>}
                {exception &&<Alert severity={"error"}>{exception}</Alert>}
            </DialogContent>
            <DialogActions>
                <Button autoFocus size="large" onClick={handleClose} variant="contained" color="primary">Close</Button>
            </DialogActions>
        </React.Fragment>);
}

VaccinationQRCodeDialogStep.propTypes = {
    value: PropTypes.object.isRequired,
    onClose: PropTypes.func
}

export default VaccinationQRCodeDialogStep;