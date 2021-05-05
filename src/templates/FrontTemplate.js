import React from "react";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        backgroundImage: "url('/image/couple.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
    },
    container: {
        height: "95vh",
    },
    formContainer: {
        paddingTop : "4vh"
    }
}));


function FrontTemplate(props) {
    const classes = useStyles();


    return (
        <Grid className={classes.container} container>
            <Grid className={classes.imageContainer} item xs={false} md={7} lg={8} xl={9}>
            </Grid>
            <Grid className={classes.formContainer} item component={Paper} elevation={3} xs={12} md={5} lg={4} xl={3}>
                {props.children}
            </Grid>
        </Grid>
    );
}

export default FrontTemplate;