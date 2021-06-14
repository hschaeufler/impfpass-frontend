import {Button} from "@material-ui/core";
import React, {useState} from 'react';
import SimpleDialogStep from "./SimpleDialogStep";
import PropTypes from "prop-types";
import Camera from "./Camera";
import SwitchCameraIcon from '@material-ui/icons/SwitchCamera';


function CameraDialogStep({onClose, ...args}) {

    const [cameraSwitchCallback, setCameraSwitchCallback] = useState(() => () => {
    });


    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    function handleSwitchCamera() {
        cameraSwitchCallback();
    }

    function registerCameraSwitchCallback(callBack) {
        console.log(callBack);
        setCameraSwitchCallback(() => () => callBack());
    }

    function handleQRCode(qrCode) {
        console.log(qrCode);
    }


    const dialogActions = <React.Fragment>
        <Button startIcon={<SwitchCameraIcon></SwitchCameraIcon>} onClick={handleSwitchCamera} autoFocus size="large"
                color="primary">Switch Camera</Button>
    </React.Fragment>

    return (
        <SimpleDialogStep onClose={handleClose}
                          dialogActions={dialogActions}>
            <Camera registerCameraSwitchCallback={registerCameraSwitchCallback} onQRCode={handleQRCode}/>
        </SimpleDialogStep>
    );
}

CameraDialogStep.propTypes = {
    onVaccination: PropTypes.func,
    onClose: PropTypes.func,
}

export default CameraDialogStep;