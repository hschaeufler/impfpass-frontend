import SimpleDialog from "./SimpleDialog";
import VacinationDialogStep from "./VacinationDialogStep";
import PropTypes from "prop-types";


function VaccinationDialog(props){

    const {...args} = props;

    return (
        <SimpleDialog {...args} title={"Vaccination"}>
            <VacinationDialogStep></VacinationDialogStep>
        </SimpleDialog>
    );
}

VaccinationDialog.propTypes = {
    onClose: PropTypes.func
}

export default VaccinationDialog;