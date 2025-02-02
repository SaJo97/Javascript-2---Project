import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchOrderById } from "../store/features/orders/orderSlice";

const OrderInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.orders);

  console.log("Order ID from URL:", id); // Log the order ID
  console.log("Current Order State:", order);

  useEffect(() => {
    const fetchOrder = () => {
      console.log("Fetching order with ID:", id);
      dispatch(fetchOrderById(id)); // Fetch order details when the component mounts
    };

    fetchOrder();
  }, [dispatch, id]);
  console.log("OrderInfo component mounted");

  if (loading) {
    return <p>Loading order details...</p>;
  }

  if (error) {
    return <p>Error fetching order details: {error}</p>;
  }

  if (!order) {
    return <p>No order found.</p>;
  }

  console.log("Fetched Order:", order);
  console.log("Fetched Order Products:", order.products);

  // Calculate total price based on products
  const totalPrice = order.products.reduce((total, product) => {
    return total + product.product.price * product.quantity;
  }, 0);

  // Defensive check for products
  if (
    !order.products ||
    !Array.isArray(order.products) ||
    order.products.length === 0
  ) {
    return <p>No products found in this order.</p>;
  }

  return (
    <div className="order-container">
      <h2>Order ID: {order._id}</h2>
      <p>Total Price: {totalPrice.toFixed(2)}kr</p>
      <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
      <h4>Products:</h4>
      <ul>
        {order.products.map((product) => (
          <li key={product._id}>
            <h3>
              {product.product.name} - Quantity: {product.quantity}
            </h3>
            {product.product.images && product.product.images.length > 0 ? (
              <img
                src={product.product.images[0]}
                alt={product.product.name}
                width="100"
              />
            ) : (
              <p>No image available</p>
            )}
            <p>Price: {product.product.price} kr</p>
            <p>
              Total: {(product.product.price * product.quantity).toFixed(2)} kr
            </p>
            <p>Description: {product.product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderInfo;
