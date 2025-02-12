import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface ColumnConfig<T> {
    key: string;
    label: string;
    render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
    headers: ColumnConfig<T>[];
    data: T[];
}

const DataTable = <T extends object>({
    headers,
    data
}: TableProps<T>) => {

    return (
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
                        {headers.map((header: any) => (
                            <TableCell sx={{
                                fontWeight: "bold",
                                color: "#6C27FF",
                                backgroundColor: "#EBD9FF",
                            }} key={header.id}>{header.label}</TableCell>
                        ))}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow>
                            {headers.map((header: any) => (
                                <TableCell key={header.id}>{header.render(row)}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
