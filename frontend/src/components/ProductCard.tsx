"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  documentId: string;
  name: string;
  price: number;
  image?: {
    url: string;
  };
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const imageUrl = product.image?.url;

  return (
    <div className="product-card">
      <Link className="product-card-link" href={`/product/${product.documentId}`}>
        <div className="product-card-top">
          {imageUrl && (
            <img src={`http://localhost:1337${imageUrl}`} alt={product.name} />
          )}

          <h3>{product.name}</h3>
        </div>
      </Link>

      <div className="product-card-bottom">
        <p className="product-card-price">{product.price} $</p>

        <button
          className="product-card-button"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
