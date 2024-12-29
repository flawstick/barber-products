import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts({ limit: 100 });

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-8">
      <h1 className="text-4xl font-bold text-foreground">All Products</h1>
      <p className="text-xl text-muted-foreground">
        Discover our comprehensive range of premium barber and hair care
        products. Each item in our collection is carefully selected and
        formulated to meet the highest standards of quality and performance.
        Whether you're a professional stylist or a grooming enthusiast, you'll
        find the perfect tools and products to achieve your desired look. From
        cutting-edge styling tools to nourishing hair care solutions, our
        products are designed to elevate your grooming experience.
      </p>
      <ProductList list={products} showViewAll={false} />
    </div>
  );
}
