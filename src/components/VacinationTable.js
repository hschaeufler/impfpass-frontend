import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    fabButton: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));


function VacinationTable(){


    const classes = useStyles();

    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Impfungen">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Impfstoff</TableCell>
                        <TableCell>Datum</TableCell>
                        <TableCell>Arzt</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>550e8400-e29b-11d4-a716-446655440000</TableCell>
                        <TableCell>Corona Astra Zeneca</TableCell>
                        <TableCell>18.04.2021 12:30</TableCell>
                        <TableCell>Dr. Musterman</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>550e8400-e29b-11d4-a716-446655440123</TableCell>
                        <TableCell>Anti Pockenimpfung</TableCell>
                        <TableCell>18.01.2020 12:30</TableCell>
                        <TableCell>Dr. Musterman</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>550e8400-e29b-11d4-a716-446655440123</TableCell>
                        <TableCell>Zeckenweck</TableCell>
                        <TableCell>18.01.2020 12:30</TableCell>
                        <TableCell>Dr. Musterman</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default VacinationTable;