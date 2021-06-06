import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function CloseButton(props) {
    return (
        <IconButton {...props}>
            <CloseIcon></CloseIcon>
        </IconButton>
    );
}

export default CloseButton;