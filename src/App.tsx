import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<OrdersPage />} />
          <Route path="order/:id" element={<OrderDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
