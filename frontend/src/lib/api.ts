export async function fetchCategories() {
  const res = await fetch("http://localhost:1337/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error loading categories");
  }

  const data = await res.json();
  return data.data;
}

export async function fetchProducts() {
  const res = await fetch("http://localhost:1337/api/products?populate=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error loading products");
  }

  const data = await res.json();
  return data.data;
}

export async function fetchProductById(id: string) {
  const res = await fetch(
    `http://localhost:1337/api/products/${id}?populate=*`,
    { cache: "no-store" },
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    const text = await res.text();
    console.error("API error:", text);
    throw new Error("Error loading product");
  }

  const data = await res.json();
  return data.data;
}
