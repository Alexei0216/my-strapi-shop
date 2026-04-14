import { fetchCategories, fetchProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";

export default async function Home() {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return (
    <section>
      <div className="products-cards">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
