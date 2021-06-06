import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControlInput from "./FormControlInput";
import React from "react";
import PropTypes from "prop-types";

function AutocompleteField(props){
    const {id,options,label,onChange,onChangeSelect,...args} = props;

    const [value, setValue] = React.useState("");
    const [inputValue, setInputValue] = React.useState('');

    function buildEventObjekt(id, val){
        const event = {};
        event.target = {};
        event.target.id = id;
        event.target.value = val;
        return event;
    }

    function handleChange(event, newVal){
        setValue(newVal);
        if(onChangeSelect){
            const eventObj = buildEventObjekt(id,newVal);
            onChangeSelect(eventObj);
        }
    }

    function handleInputChange(event, newVal){
        setInputValue(newVal);
        if(onChange){
            const eventObj = buildEventObjekt(id,newVal);
            onChange(eventObj);
        }
    }





    return(<Autocomplete
        id={id}
        fullWidth
        freeSolo
        value={value}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        options={options}
        {...args}
        getOptionLabel={(option)=> option.name ? option.name : option}
        renderOption={(option) => (
            <React.Fragment>
                {option.label ? option.label : option }
            </React.Fragment>
        )}
        renderInput={(params) => <FormControlInput
            margin="normal"
            variant="outlined"
            label={label}
            {...params}
            fullWidth></FormControlInput>}
    ></Autocomplete>);
}

AutocompleteField.propTypes = {
    id : PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string,
    onChangeSelect: PropTypes.func,
    inputValue: PropTypes.string,
    value: PropTypes.any,
}


export default AutocompleteField;