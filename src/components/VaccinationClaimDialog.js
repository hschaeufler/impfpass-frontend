import SimpleDialog from "./SimpleDialog";
import PropTypes from "prop-types";
import CameraDialogStep from "./CameraDialogStep";
import VaccinationClaimDialogStep from "./VaccinationClaimDialogStep";
import {useState, useEffect} from "react";
import VaccinationClaimSuccessDialogStep from "./VaccinationClaimSuccessDialogStep";


function VaccinationClaimDialog(props) {
    const {onClose, ...args} = props;
    const [registrationId, setRegistrationId] = useState(null);
    const [vaccinationClaim, setVaccinationClaim] = useState(null);

    useEffect(() => {
        return function cleanup() {
            setRegistrationId(null);
            setVaccinationClaim(null);
        }
    }, []);

    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    function handleQRCode(code) {
        if (code) {
            setRegistrationId(code);
        }
    }

    function handleVaccinationClaim(vaccinationClaim) {
        if (vaccinationClaim) {
            setVaccinationClaim(vaccinationClaim);
        }
    }

    return (
        <SimpleDialog {...args} onClose={handleClose} title={"Camera"}>
            {(!registrationId && !vaccinationClaim) &&
                <CameraDialogStep onClose={handleClose} onQRCode={handleQRCode}/>}
            {(registrationId && !vaccinationClaim) &&
                <VaccinationClaimDialogStep onClose={handleClose} registrationId={registrationId}
                                        onVaccinationClaim={handleVaccinationClaim}/>}
            {(registrationId && vaccinationClaim) &&
                <VaccinationClaimSuccessDialogStep vaccinationClaim={vaccinationClaim}
                                               onClose={handleClose}></VaccinationClaimSuccessDialogStep>}
        </SimpleDialog>
    );
}

VaccinationClaimDialog.propTypes = {
    onClose: PropTypes.func
}

export default VaccinationClaimDialog;