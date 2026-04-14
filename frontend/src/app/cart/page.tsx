"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            borderBottom: "1px solid #eee",
            padding: "10px 0",
          }}
        >
          <h3>{item.name}</h3>
          <p>
            {item.price} ₽ × {item.quantity}
          </p>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <h2 style={{ marginTop: "20px" }}>Total: {total} ₽</h2>
      )}
    </div>
  );
}
