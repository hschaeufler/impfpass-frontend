import {Dialog, useMediaQuery} from "@material-ui/core";
import {useTheme} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import SimpleDialogTitle from "./SimpleDialogTitle";
import {useEffect, useState} from "react";


function SimpleDialog(props) {
    const {id, title, onClose, ...args} = props;
    const theme = useTheme();

    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, []);

    function handleClose() {
        setOpen(false);
        if (onClose) {
            onClose();
        }
    }

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return (<Dialog fullWidth fullScreen={fullScreen} open={open} onClose={handleClose} id={id} {...args}>
        <SimpleDialogTitle onClose={handleClose}>{title}</SimpleDialogTitle>
        {open && props.children}
    </Dialog>)
}

SimpleDialog.propType = {
    id: PropTypes.string.isRequired,
    title: PropTypes.any,
    onClose: PropTypes.func
}

export default SimpleDialog;