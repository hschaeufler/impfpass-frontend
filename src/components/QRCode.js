import PropTypes from 'prop-types';
import React, {useEffect, useState} from "react";
import QRCodeService from "../services/QRCodeService";
import {Alert} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    qrcode: {
        width: "100%"
    },
}));


function QRCode({data,...args}) {

    const [dataUrl, setDataUrl] = useState(null);
    const [exception, setException] = useState(null);

    useEffect(async () => {
        setException(null);

        try {
            const qrCodeDataURL = await QRCodeService.createQRCode(data);
            setDataUrl(qrCodeDataURL);
        } catch (exception){
            setException(exception);
        }
    },[dataUrl]);

    const css = useStyles();

    return (<React.Fragment>
        {exception && <Alert severity={"error"}>{exception}</Alert>}
        {dataUrl && <img className={css.qrcode} src={dataUrl} alt={data}/>}
    </React.Fragment>);
}

QRCode.propTypes = {
    data: PropTypes.string.isRequired
}

export default QRCode;