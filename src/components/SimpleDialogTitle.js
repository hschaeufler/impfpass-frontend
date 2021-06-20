import CloseButton from "./CloseButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'flex',
    },
    closeButton: {
        marginLeft: "auto"
    },
    titleText: {
        marginTop: "auto",
        marginBottom: "auto"
    }
}));


function SimpleDialogTitle({id, titleText, onClose, children, ...args}) {

    const styles = useStyles();

    function handleClick() {
        if (onClose) {
            onClose();
        }
    }

    return (
        <DialogTitle id={id} disableTypography={true} className={styles.title}>
            <Typography variant="h5" component="h1" className={styles.titleText}>{children}</Typography>
            <CloseButton className={styles.closeButton} onClick={handleClick}></CloseButton>
        </DialogTitle>
    );
}

export default SimpleDialogTitle;