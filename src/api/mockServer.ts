const API_URL = "http://localhost:5000/refundOrders";

export const fetchOrders = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch orders");
  return await response.json();
};
