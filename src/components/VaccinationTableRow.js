import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import PropTypes from "prop-types";
const { DateTime } = require("luxon");

function VaccinationTableRow({value, ...args}) {

    const dateTimeFormat =  "dd.MM.yyyy HH:mm:ss";

    return (<TableRow>
            <TableCell>{value.timestamp? DateTime.fromJSDate(value.timestamp).toFormat(dateTimeFormat) : ""}</TableCell>
            <TableCell>{value.vaccine? value.vaccine : ""}</TableCell>
            <TableCell>{value.disease? value.disease : "" }</TableCell>
            <TableCell>{value.chargeNumber ? value.chargeNumber : ""}</TableCell>
            <TableCell>{value.doctorsOffice ? value.doctorsOffice : ""}</TableCell>
            <TableCell>{value.location? value.location: ""}</TableCell>
            <TableCell>{value.uuid ? value.uuid : ""}</TableCell>
        </TableRow>
    );
}

VaccinationTableRow.propTypes = {
    value : PropTypes.object.isRequired,
}

export default VaccinationTableRow;