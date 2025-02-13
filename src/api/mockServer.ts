const API_URL = "http://localhost:5000/refundOrders";

export const fetchOrders = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch orders");
  return await response.json();
};

export const updateOrderStatus = async (id: string, active: boolean) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ active })
  });
  if (!response.ok) throw new Error("Failed to update order status");
};

export const updateOrderDecision = async (id: string, decision: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ decision })
  });
  if (!response.ok) throw new Error("Failed to update order decision");
};
