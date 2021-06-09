import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import VaccinationTableRow from "./VaccinationTableRow";
import _ from "lodash";
import PropTypes from "prop-types";


function VaccinationTable({value, ...args}) {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="Vaccinations">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Vaccine</TableCell>
                        <TableCell>Disease</TableCell>
                        <TableCell>Charge</TableCell>
                        <TableCell>Doctors Office</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_.sortBy(value, ["timestamp"], ["desc"]).map((vaccination, index) =>
                        <VaccinationTableRow key={vaccination.uuid ? vaccination.uuid : index} value={vaccination}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

VaccinationTable.propTypes = {
    value: PropTypes.arrayOf(PropTypes.object)
}

export default VaccinationTable;