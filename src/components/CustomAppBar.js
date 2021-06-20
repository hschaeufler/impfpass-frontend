import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import Typography from "@material-ui/core/Typography";
import React from "react";


function CustomAppBar(props) {

    return (<AppBar position="static" {...props}>
        <Toolbar>
            <LocalHospitalIcon fontSize="large"></LocalHospitalIcon>
            <Typography align="center" component="h1" variant="h6">VacBook</Typography>
        </Toolbar>
    </AppBar>);
}

export default CustomAppBar;