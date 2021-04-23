import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginIcon from "../icons/LoginIcon";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import {deepOrange, deepPurple} from '@material-ui/core/colors';

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

    const classes = useStyles();


    return (<Container className={classes.root} maxWidth="sm">
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
                    autofocus
                    id="mail"
                    type="email"
                    autocomplete>
                </TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Passwort"
                    id="password"
                    type="password">
                </TextField>
                <Button
                    fullWidth
                    color="primary"
                    size="large"
                    variant="contained"
                    startIcon={<LoginIcon></LoginIcon>}
                    className={classes.submitButton}>
                    Log in</Button>
            </form>
            <Button
                fullWidth
                color="primary"
                size="large"
                variant="outlined"
                startIcon={<LoginIcon></LoginIcon>}
                className={classes.submitButton}>No account? Sign up</Button>
        </Container>

    )
}

export default LogInComponent;