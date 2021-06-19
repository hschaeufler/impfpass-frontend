import {FormControl, FormHelperText, TextField} from "@material-ui/core";
import PropTypes from "prop-types";


function FormControlInput(props) {

    const {id,helperText,...args} = props;

    return (<FormControl {...args}>
        <TextField id={id} aria-describedby={id + "helper-text"} {...args}/>
        {helperText && <FormHelperText id={id + "helper-text"}>{helperText}</FormHelperText>}
    </FormControl>);
}

FormControlInput.propTypes = {
    id : PropTypes.string.isRequired,
    helperText: PropTypes.string,
    label: PropTypes.string
}

export default FormControlInput;