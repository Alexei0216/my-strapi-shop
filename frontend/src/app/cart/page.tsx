"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-content">
      <h2 className="cart-title">Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          {item.image?.url && (
            <img
              className="cart-item-image"
              src={`http://localhost:1337${item.image.url}`}
              alt={item.name}
            />
          )}

          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>
              {item.price} $ x {item.quantity}
            </p>
          </div>

          <button
            className="cart-item-button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && <h2 className="cart-total">Total: {total} $</h2>}
    </div>
  );
}
