import SimpleDialog from "./SimpleDialog";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import CameraDialogStep from "./CameraDialogStep";


function VaccinationClaimDialog(props) {
    const {onClose, ...args} = props;

    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    return (
        <SimpleDialog {...args} onClose={handleClose} title={"Camera"}>
            <CameraDialogStep onClose={handleClose}/>
        </SimpleDialog>
    );
}

VaccinationClaimDialog.propTypes = {
    onClose: PropTypes.func
}

export default VaccinationClaimDialog;