import { Card, CardContent, Typography, Box, Avatar, Link } from "@mui/material";
import { Order } from "../types";

interface OrderSummaryProps {
    order: Order;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
    return (
        <Card variant="outlined" sx={{ mb: 3, p: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={order.store_logo} alt="Store Logo" />
                    <Box>
                        <Typography variant="h6">Order #{order.id}</Typography>
                        <Typography variant="body2">
                            Store: <Link href={order.store_url} target="_blank">{order.store_name}</Link>
                        </Typography>
                        <Typography variant="body2">
                            Total Amount: <strong>${order.amount}</strong>
                        </Typography>
                        <Typography variant="body2">
                            Decision: <strong>{order.decision || "Not yet decided"}</strong>
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default OrderSummary;
