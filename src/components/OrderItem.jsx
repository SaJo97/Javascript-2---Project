import { useState } from "react";
import { Link } from "react-router";

const OrderItem = ({ order }) => {
  const [showMore, setShowMore] = useState(false); // Local state to manage visibility of additional items

  const toggleShowMore = () => {
    setShowMore(prevShowMore => !prevShowMore); // Toggle the visibility state
  };

  return (
    <div className="order-container">
      <Link to={`/order/${order._id}`}>
        <h3>Order ID: {order._id}</h3>
      </Link>
      <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
      <p>Total Price: {order.totalPrice} kr</p>
      <h4>Products:</h4>
      <ul>
        {order.products.slice(0, 3).map(product => (
          <li key={product._id}>
            <h3>{product.product.name} - Quantity: {product.quantity}</h3>
            <img src={product.product.images[0]} alt={product.product.name} width="100" />
            <p>Total: {(product.product.price * product.quantity).toFixed(2)} kr</p>
          </li>
        ))}
        {showMore && order.products.slice(3).map(product => (
          <li key={product._id}>
            <h3>{product.product.name} - Quantity: {product.quantity}</h3>
            <img src={product.product.images[0]} alt={product.product.name} width="100" />
            <p>Total: {(product.product.price * product.quantity).toFixed(2)} kr</p>
          </li>
        ))}
      </ul>
      {order.products.length > 3 && (
        <button onClick={toggleShowMore}>
          {showMore ? 'Show Less' : `And ${order.products.length - 3} more items...`}
        </button>
      )}
    </div>
  );
};

export default OrderItem;