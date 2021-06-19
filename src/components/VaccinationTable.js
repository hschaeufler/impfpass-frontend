import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import VaccinationTableRow from "./VaccinationTableRow";
import _ from "lodash";
import PropTypes from "prop-types";
import UserRoleArray from "../enum/UserRoleArray";
import VaccinationTableHead from "./VaccinationTableHead";
function VaccinationTable({value,type,...args}) {


    return (
        <TableContainer component={Paper}>
            <Table aria-label="Vaccinations">
                <VaccinationTableHead type={type}></VaccinationTableHead>
               <TableBody>
                    {_.sortBy(value, ["timestamp"], ["desc"]).map((vaccination, index) =>
                        <VaccinationTableRow type={type} key={vaccination.uuid ? vaccination.uuid : index}
                                             value={vaccination}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

VaccinationTable.propTypes = {
    value: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.oneOf(UserRoleArray).isRequired
}

export default VaccinationTable;