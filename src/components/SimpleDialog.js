import {Dialog, useMediaQuery} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';


function SimpleDialog(props){
    const {...args} = props;
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return (<Dialog fullWidth fullScreen={fullScreen} {...args}>
        {props.children}
    </Dialog>)
}