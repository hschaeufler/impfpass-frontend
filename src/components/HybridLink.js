import React from "react";
import {Link} from 'react-router-dom';
import {Link as MaterialLink} from '@material-ui/core';
import PropTypes from "prop-types";


function HybridLink({to, ...args}) {

    return (
        <MaterialLink to={to} {...args} component={Link}></MaterialLink>
    );
}

HybridLink.propTypes = {
    to: PropTypes.string,
}


export default HybridLink;