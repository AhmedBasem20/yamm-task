import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
import { TableHeader } from "../types";
import { useState } from "react";

interface TableProps<T> {
    headers: TableHeader<T>[];
    data: T[];
    pagination?: boolean
}

const DataTable = <T extends object>({
    headers,
    data,
    pagination = true
}: TableProps<T>) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        console.log(event)
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <TableContainer
                component={Paper}
                sx={{
                    overflowX: "auto",
                    maxWidth: "100%",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Table>
                    <TableHead sx={{ backgroundColor: "#EBD9FF" }}>
                        <TableRow >
                            {headers.map((header: TableHeader<T>) => (
                                <TableCell sx={{
                                    fontWeight: "bold",
                                    color: "#6C27FF",
                                    backgroundColor: "#EBD9FF",
                                }} key={header.id}>{header.label}</TableCell>
                            ))}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow>
                                    {headers.map((header: TableHeader<T>) => (
                                        <TableCell key={header.id}>{header.render ? header.render(row) : row[header.id]}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                {pagination &&
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}

                    />

                </TableFooter>
                }
            </TableContainer>
        </>
    );
};

export default DataTable;
