import {Button, DialogActions, DialogContent} from "@material-ui/core";
import React from 'react';
import PropTypes from "prop-types";


function SimpleDialogStep(props) {

    const {onClose, dialogActions, ...args} = props;

    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    return (
        <React.Fragment>
            <DialogContent {...args}>
                {props.children}
            </DialogContent>
            <DialogActions>
                {onClose && <Button autoFocus size="large" onClick={handleClose} color="primary">Cancel</Button>}
                {dialogActions}
            </DialogActions>
        </React.Fragment>);
}

SimpleDialogStep.propTypes = {
    dialogActions: PropTypes.element,
    onClose: PropTypes.func,
}

export default SimpleDialogStep;