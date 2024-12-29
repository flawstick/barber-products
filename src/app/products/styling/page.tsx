import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";

export default async function StylingPage() {
  const products = await getProducts({ category: "styling" });

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground">Styling Products</h1>
      <ProductList list={products} />
    </div>
  );
}
