import React from "react";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({

    container: {
        height: "95vh",
    },
    formContainer: {
        paddingTop: "4vh"
    }
}));


function VaccinationPageTemplate(props) {
    const classes = useStyles();

    const {fab} = props;

    return (
        <Grid className={classes.container} container>
            <Container maxWidth="lg">
                {props.children}
            </Container>
            {fab}
        </Grid>
    );
}

VaccinationPageTemplate.propTypes = {
    fab: PropTypes.element
}

export default VaccinationPageTemplate;