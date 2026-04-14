"use client";

import { useCart } from "../../../context/CartContext";

export default function ProductClient({ product }: any) {
  const { addToCart } = useCart();

  const imageUrl = product.image?.formats?.medium?.url || product.image?.url;

  return (
    <div className="product-page">
      <div className="product-page-content">
        {imageUrl && (
          <img
            className="product-page-img"
            src={`http://localhost:1337${imageUrl}`}
            alt={product.name}
          />
        )}

        <div className="product-page-info">
          <h1>{product.name}</h1>

          <p className="product-page-category">
            <b>category:</b> {product.category?.name}
          </p>

          <p className="product-page-description">{product.description}</p>

          <h2 className="product-page-price">{product.price} ₽</h2>

          <button className="product-page-button" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
