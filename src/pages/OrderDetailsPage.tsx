import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOrderDetails } from "../api/mockServer";
import { Order, TableHeader, Item } from "../types";
import DataTable from "../components/DataTable";
import OrderSummary from "../components/OrderSummary";


const headers: TableHeader<Item>[] = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'price', label: 'Price', render: (row) => `$${row.price}` },
    { id: 'quantity', label: 'Quantity' },
    { id: 'total_price', label: 'Total Price', render: (row) => `$${row.price * row.quantity}` },
];

const OrderDetailsPage = () => {
    const { id } = useParams();
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            fetchOrderDetails(id)
                .then((res) => {
                    setOrder(res);
                    setLoading(false);
                })
                .catch((err) => {
                    setError("Failed to fetch order details: " + err);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!order) return <p style={{ color: "red" }}>Order not found</p>;

    return (
        <div style={{ maxWidth: "800px", margin: "auto" }}>
            {/* Order Summary */}
            <OrderSummary order={order} />

            {/* Order Items Table */}
            <DataTable headers={headers} data={order.items} pagination={false} />
        </div>
    );
};

export default OrderDetailsPage;
