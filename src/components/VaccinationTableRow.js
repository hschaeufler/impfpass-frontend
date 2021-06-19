import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import UserRole from "../enum/UserRole";
import PropTypes from "prop-types";
import UserRoleArray from "../enum/UserRoleArray";
import HybridLink from "./HybridLink";

const {DateTime} = require("luxon");

function VaccinationTableRow({value, type, ...args}) {

    const dateTimeFormat = "dd.MM.yyyy HH:mm:ss";


    return (<TableRow component={HybridLink} to={"/vaccination/" + value.uuid}>
            <TableCell>{value.uuid ? value.uuid : ""}</TableCell>
            <TableCell>{value.timestamp ? DateTime.fromISO(value.timestamp).toFormat(dateTimeFormat) : ""}</TableCell>
            <TableCell>{value.vaccine ? value.vaccine : ""}</TableCell>
            <TableCell>{value.disease ? value.disease : ""}</TableCell>
            <TableCell>{value.chargeNumber ? value.chargeNumber : ""}</TableCell>
            {type === UserRole.Doctor
                ? <TableCell>{value.vaccinatedperson ? value.vaccinatedperson : ""}</TableCell>
                : <TableCell>{value.doctorsOffice ? value.doctorsOffice : ""}</TableCell>}
        </TableRow>
    );
}

VaccinationTableRow.propTypes = {
    value: PropTypes.object.isRequired,
    type: PropTypes.oneOf(UserRoleArray).isRequired
}


export default VaccinationTableRow;