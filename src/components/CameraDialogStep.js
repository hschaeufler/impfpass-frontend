import {Button} from "@material-ui/core";
import React, {useState} from 'react';
import SimpleDialogStep from "./SimpleDialogStep";
import PropTypes from "prop-types";
import Camera from "./Camera";
import SwitchCameraIcon from '@material-ui/icons/SwitchCamera';


function CameraDialogStep({onClose, onQRCode,...args}) {

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
        if(onQRCode){
            onQRCode(qrCode);
        }
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
    onQRCode: PropTypes.func,
    onClose: PropTypes.func,
}

export default CameraDialogStep;