import CameraService from "simple-camera-service";
import React, {useState, useEffect, useRef} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import PropTypes, {func} from "prop-types";


const useStyles = makeStyles((theme) => ({
    video : {
        width: "100%"
    }

}));

function Camera({registerCameraSwitchCallback, onQRCode}) {
    const streamRef = useRef();
    const css = useStyles();

    function setVideoStream(stream) {
        streamRef.current.srcObject = stream;
    }

    async function cleanUp() {
        CameraService.stopStream();
    }
    
    function handleQRCode(codeString) {
        if(onQRCode){
            onQRCode(codeString);
        }
    }

    function scanStreamForQRCode(){
        if(onQRCode){
            CameraService.scanStreamForQRCode((code)=>{
                handleQRCode(code.data);
            });
        }
    }

    async function startStream() {
        const stream = await CameraService.getDefaultVideoStream();
        scanStreamForQRCode();
        setVideoStream(stream);
    }

    async function handleCameraSwitch(){
        const stream = await CameraService.switchCamera();
        scanStreamForQRCode();
        setVideoStream(stream);
    }

    useEffect(() => {
        if(registerCameraSwitchCallback){
            registerCameraSwitchCallback(handleCameraSwitch);
        }
        startStream();
        return cleanUp;
    }, []);


    return (
        <video className={css.video} autoPlay ref={streamRef}></video>
    )
}

Camera.propTypes = {
    registerCameraSwitchCallback: PropTypes.func,
    onQRCode: PropTypes.func
}


export default Camera;