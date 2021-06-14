import SimpleDialog from "./SimpleDialog";
import VaccinationRegistrationDialogStep from "./VaccinationRegistrationDialogStep";
import PropTypes from "prop-types";
import VaccinationQRCodeDialogStep from "./VaccinationQRCodeDialogStep";
import {useEffect, useState} from "react";


function VaccinationRegistrationDialog(props){

    const {onClose} = props;

    const [vaccination, setVaccination] = useState(null);

    useEffect(()=>{
        setVaccination(null);
    },[]);

    function handleVaccination(vaccination){
        setVaccination(vaccination);
    }

    function handleClose(){
        if(onClose){
            onClose();
        }
    }

    return (
        <SimpleDialog {...props} title={"Vaccination"}>
            {!vaccination ?
                <VaccinationRegistrationDialogStep onClose={handleClose} onVaccination={handleVaccination}></VaccinationRegistrationDialogStep>
                : <VaccinationQRCodeDialogStep value={vaccination} onClose={handleClose}></VaccinationQRCodeDialogStep>}
        </SimpleDialog>
    );
}

VaccinationRegistrationDialog.propTypes = {
    onClose: PropTypes.func
}

export default VaccinationRegistrationDialog;