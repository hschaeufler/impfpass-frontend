import React, {useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginIcon from "../icons/LoginIcon";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import SignUpComponent from "./SignUpComponent";
import {Link} from "react-router-dom";
import Alert from '@material-ui/lab/Alert';



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
}));

function LogInComponent(props) {

    useEffect(() => {
        setShowError(false);
        setAuthException(null);
    },[])

    const {onLogin,toSignup,...args} = props;

    const [credentials, setCredentials] = useState({
        mail : "",
        password : "",
    });

    const [showError, setShowError] = useState(false);
    const [authException, setAuthException] = useState(null);

    const classes = useStyles();

    function handleChange(event){
        const {id, value} = event.target;
        setCredentials({...credentials,[id] : value});
    }

    async function handleLogin(event){
        if(!credentials.mail || !credentials.password) {
            setShowError(true);
            return;
        }
        if(onLogin){
            try {
                await onLogin(credentials.mail, credentials.password);
            } catch(exception){
                setAuthException(exception);
            }
        }
    }



    return (<Container className={classes.root} {...args}>
            <Avatar className={classes.avatar}>
                <LoginIcon>
                </LoginIcon>
            </Avatar>
            <Typography align="center" component="h1" variant="h4">
                Log in
            </Typography>
            <Typography align="center" component="h1" variant="h5">
                Log in with Account
            </Typography>
            <form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Mail"
                    autoFocus
                    id="mail"
                    type="email"
                    error = {showError && !credentials.mail}
                    onChange={handleChange}
                    value={credentials.mail}>
                </TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Passwort"
                    id="password"
                    type="password"
                    error = {showError && !credentials.password}
                    value={credentials.password}
                    onChange={handleChange}>
                </TextField>
                {authException && <Alert severity="warning">{authException}</Alert>}
                <Button
                    fullWidth
                    color="primary"
                    size="large"
                    variant="contained"
                    startIcon={<LoginIcon></LoginIcon>}
                    className={classes.submitButton}
                    onClick={handleLogin}>
                    Log in</Button>
                <Button
                    fullWidth
                    color="primary"
                    size="large"
                    variant="outlined"
                    startIcon={<LoginIcon></LoginIcon>}
                    to={toSignup}
                    component={Link}
                    className={classes.submitButton}>No account? Sign up</Button>
            </form>
        </Container>

    )
}

SignUpComponent.propTypes = {
    toSignup : PropTypes.string.isRequired
}

export default LogInComponent;