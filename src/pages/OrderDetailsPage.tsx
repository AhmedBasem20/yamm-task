import { useParams } from "react-router-dom";


const OrderDetailsPage = () => {
  const { orderId } = useParams();


  return (
    <div>
      <h2>Order Details</h2>
     
    </div>
  );
};

export default OrderDetailsPage;
