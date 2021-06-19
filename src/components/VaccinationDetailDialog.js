import SimpleDialog from "./SimpleDialog";
import PropTypes from "prop-types";
import VaccinationDetailDialogStep from "./VaccinationDetailDialogStep";


function VaccinationDetailDialog(props) {

    const {onClose, vaccinationId} = props;


    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    return (
        <SimpleDialog {...props} title={"Vaccination Detail"}>
            {vaccinationId && <VaccinationDetailDialogStep onClose={handleClose}
                                         vaccinationId={vaccinationId}></VaccinationDetailDialogStep>}
        </SimpleDialog>
    );
}

VaccinationDetailDialog.propTypes = {
    vaccinationId: PropTypes.string.isRequired,
    onClose: PropTypes.func
}

export default VaccinationDetailDialog;