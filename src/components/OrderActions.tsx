import { MenuItem, Select, Switch, IconButton, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateOrderStatus, updateOrderDecision } from "../api/mockServer";
import Toast from "./Toast";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

interface OrderActionsProps {
  orderId: string;
  active: boolean;
  decision: string | null;
}

const decisionOptions = ["Accept", "Reject", "Escalate"];

const OrderActions: React.FC<OrderActionsProps> = ({ orderId, active, decision }) => {
  const [orderActive, setOrderActive] = useState<boolean>(active);
  const [orderDecision, setOrderDecision] = useState<string>(decision || "Not yet");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const navigate = useNavigate();

  const handleToggle = async () => {
    try {
      await updateOrderStatus(orderId, !orderActive);
      setOrderActive((prev) => !prev);
      setToast({ message: "Status updated successfully!", type: "success" });
    } catch (error) {
      setToast({ message: "Failed to update status", type: "error" });
    }
  };

  const handleDecisionChange = async (event: SelectChangeEvent<string>) => {
    const newDecision = event.target.value;
    try {
      await updateOrderDecision(orderId, newDecision);
      setOrderDecision(newDecision);
      setToast({ message: "Decision updated successfully!", type: "success" });
    } catch (error) {
      setToast({ message: "Failed to update decision", type: "error" });
    }
  };

  const containerStyle = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <Select value={orderDecision} onChange={handleDecisionChange} size="small">
        {decisionOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <Switch checked={orderActive} onChange={handleToggle} />
      <IconButton onClick={() => navigate(`/order/${orderId}`)}>
        <ArrowCircleRightOutlinedIcon />
      </IconButton>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
};

export default OrderActions;
