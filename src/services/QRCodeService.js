import QRCode from 'qrcode';

const QRCodeService =(function (){

    const OPTIONS = { scale : "10"};

    async function createQRCode(data){
        return QRCode.toDataURL(data,OPTIONS);
    }


    return {createQRCode}

})();

export default QRCodeService;
