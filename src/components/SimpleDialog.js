import {Dialog, IconButton, useMediaQuery} from "@material-ui/core";
import {useTheme} from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";
import CloseIcon from '@material-ui/icons/Close';
import CloseButton from "./CloseButton";
import SimpleDialogTitle from "./SimpleDialogTitle";
import {useEffect, useState} from "react";


function SimpleDialog(props) {
    const {id, title, onClose, ...args} = props;
    const theme = useTheme();

    const [open,setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, []);

    function handleClose(){
        setOpen(false);
        if(onClose){
            onClose();
        }
    }

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return (<Dialog fullWidth fullScreen={fullScreen} open={open} onClose={handleClose} id={id} {...args}>
        <SimpleDialogTitle onClose={handleClose}>{title}</SimpleDialogTitle>
        {props.children}
    </Dialog>)
}

SimpleDialog.propType = {
    id: PropTypes.string.isRequired,
    title: PropTypes.any
}

export default SimpleDialog;