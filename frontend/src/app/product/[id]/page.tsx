import { fetchProductById } from "../../../lib/api";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
