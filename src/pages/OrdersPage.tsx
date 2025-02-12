import { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { fetchOrders } from "../api/mockServer";
import DataTable from "../components/DataTable";
import { Order, TableHeader } from "../types";

const headers: TableHeader<Order>[] = [
    { id: 'id', label: 'ID', render: (row) => row.id },
    { id: 'reason', label: 'Reason', render: (row) => row.reason },
    {
        id: 'store_name', label: 'Store', render: (row) =>
        <a href={row.store_url} target="_blank">
            {row.store_name}
        </a>
    },
    { id: 'amount', label: 'Amount', render: (row) => `$${row.amount}` },
    { id: 'items', label: 'Items', render: (row) => <Chip label={row.items.length}></Chip> }
];

const OrdersPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchOrders()
            .then((data) => {
                setOrders(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch data: " + err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <DataTable headers={headers} data={orders} />
    );
};

export default OrdersPage;
