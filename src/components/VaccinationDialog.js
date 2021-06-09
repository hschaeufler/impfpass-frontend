import SimpleDialog from "./SimpleDialog";
import VaccinationDialogStep from "./VaccinationDialogStep";
import PropTypes from "prop-types";
import VaccinationQRCodeDialogStep from "./VaccinationQRCodeDialogStep";
import {useEffect, useState} from "react";


function VaccinationDialog(props){

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
                <VaccinationDialogStep onClose={handleClose} onVaccination={handleVaccination}></VaccinationDialogStep>
                : <VaccinationQRCodeDialogStep value={vaccination} onClose={handleClose}></VaccinationQRCodeDialogStep>}
        </SimpleDialog>
    );
}

VaccinationDialog.propTypes = {
    onClose: PropTypes.func
}

export default VaccinationDialog;