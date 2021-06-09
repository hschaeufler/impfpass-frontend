import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControlInput from "./FormControlInput";
import React from "react";
import PropTypes from "prop-types";

function AutocompleteField(props){
    const {id,options,label,onChange,value,onChangeSelect,selectValue,error,...args} = props;

    const [objectValue, setObjectValue] = React.useState("");
    const [inputValue, setInputValue] = React.useState('');

    function buildEventObjekt(id, val){
        const event = {};
        event.target = {};
        event.target.id = id;
        event.target.value = val;
        return event;
    }

 function handleChange(event, newVal){
     setObjectValue(newVal);
     if(onChangeSelect){
         const eventObj = buildEventObjekt(id,newVal);
         onChangeSelect(eventObj);
     }
   }


    function handleInputChange(event, newVal){
        if(onChange){
            const eventObj = buildEventObjekt(id,newVal);
            onChange(eventObj);
        } else {
            setInputValue(newVal);
        }
    }






    return(<Autocomplete
        id={id}
        fullWidth
        freeSolo
        value={selectValue ? selectValue: objectValue}
        onChange={handleChange}
        inputValue={value ? value : inputValue}
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
            error={error}
            {...params}
            fullWidth></FormControlInput>}
    ></Autocomplete>);
}

AutocompleteField.propTypes = {
    id : PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onChangeSelect: PropTypes.func,
    value: PropTypes.any,
    selectValue: PropTypes.any,
    error: PropTypes.any
}


export default AutocompleteField;