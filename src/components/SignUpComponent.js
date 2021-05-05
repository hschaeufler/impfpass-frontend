import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginIcon from "../icons/LoginIcon";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import RegisterIcon from "../icons/RegisterIcon";
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(2),
        width: theme.spacing(7),
        height: theme.spacing(7),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main
    },
    submitButton: {
        marginTop: theme.spacing(2),
    },
    dropDown: {
        marginTop: theme.spacing(2),
    },
}));

function SignUpComponent(props) {

    const {onSignUp,toLogin, ...args} = props;

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        password: "",
        isDoctor: false,
        officeName: "",
        place: "",
    });

    const classes = useStyles();

    const [showError, setShowError] = useState(false);

    function handleChange(e) {
        const {id, value, type, name, checked} = e.target;

        const inputVal = type === 'checkbox' ? checked : value;
        const inputID = id ? id : name;

        setUser({...user, [inputID]: inputVal});
    }

    function validateForm(user){
        const requiredFieldsAreSet = user
            && user.firstName
            && user.lastName
            && user.mail
            && user.password
            && user.place
            && (!user.isDoctor || user.officeName );

        return requiredFieldsAreSet;

    }

    function handleSignUp(event){
        if(!validateForm(user)){
            setShowError(true);
            return;
        }

        if(onSignUp){
            onSignUp(user);
        }
    }

    return (<Container className={classes.root} {...args}>
            <Avatar className={classes.avatar}>
                <RegisterIcon>
                </RegisterIcon>
            </Avatar>
            <Typography align="center" component="h1" variant="h4">
                Sign Up
            </Typography>
            <Typography align="center" component="h1" variant="h5">
                Please insert your Details
            </Typography>
            <form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="First Name"
                    autofocus
                    id="firstName"
                    onChange={handleChange}
                    value={user.firstName}
                    error = {showError && !user.firstName}
                    autocomplete>
                </TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Last Name"
                    onChange={handleChange}
                    value={user.lastName}
                    error = {showError && !user.lastName}
                    id="lastName"
                    autocomplete>
                </TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="E-Mail"
                    onChange={handleChange}
                    value={user.mail}
                    error = {showError && !user.mail}
                    id="mail"
                    type="email"
                    autocomplete>
                </TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handleChange}
                    value={user.password}
                    error = {showError && !user.password}
                    label="Password"
                    id="password"
                    type="password">
                </TextField>
                <FormControlLabel
                    control={
                        <Checkbox
                            id="isDoctor"
                            onChange={handleChange}
                            checked={user.isDoctor}
                            color="primary"/>
                    }
                    label="I'm a Doctor"
                />
                {user.isDoctor && <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={user.officeName}
                    onChange={handleChange}
                    error = {showError && !user.officeName}
                    label="Doctor's Office"
                    id="officeName">
                </TextField>}
                <Select variant="outlined"
                        fullWidth
                        id="place"
                        name="place"
                        className={classes.dropDown}
                        value={user.place}
                        error = {showError && !user.place}
                        onChange={handleChange}>
                    <MenuItem value="BW">Baden-Württemberg</MenuItem>
                    <MenuItem value="Bayern">Bayern</MenuItem>
                    <MenuItem value="NRW">Nord-Rhein-Westfalen</MenuItem>
                </Select>
                <Button
                    fullWidth
                    color="primary"
                    size="large"
                    variant="contained"
                    onClick={handleSignUp}
                    startIcon={<LoginIcon></LoginIcon>}
                    className={classes.submitButton}>
                    Submit</Button>
                <Button
                    fullWidth
                    color="primary"
                    size="large"
                    variant="outlined"
                    startIcon={<LoginIcon></LoginIcon>}
                    component={Link}
                    to={toLogin}
                    className={classes.submitButton}>Already a Member? Log in</Button>
            </form>
        </Container>

    )
}

SignUpComponent.propTypes = {
    toLogin : PropTypes.string.isRequired
}


export default SignUpComponent;