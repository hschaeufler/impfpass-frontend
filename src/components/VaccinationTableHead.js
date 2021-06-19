import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import VaccinationTable from "./VaccinationTable";
import UserRoleArray from "../enum/UserRoleArray";
import UserRole from "../enum/UserRole";
import PropTypes from "prop-types"

function VaccinationTableHead({type, ...args}) {


    return (
        <TableHead {...args}>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Vaccine</TableCell>
                <TableCell>Disease</TableCell>
                <TableCell>Charge</TableCell>
                {type === UserRole.Doctor
                    ? <TableCell>Vaccinated Person</TableCell>
                    : <TableCell>Doctors Office</TableCell>
                }
            </TableRow>
        </TableHead>
    );
}

VaccinationTableHead.propTypes = {
    type: PropTypes.oneOf(UserRoleArray).isRequired
}


export default VaccinationTableHead;