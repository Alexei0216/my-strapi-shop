"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { TiShoppingCart } from "react-icons/ti";

export default function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <Link href="/">
        <h2 className="logo">MyShop</h2>
      </Link>

      <nav>
        <Link className="header-cart" href="/cart"><TiShoppingCart /> {totalItems}</Link>
      </nav>
    </header>
  );
}
