import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import { AbstractIntlMessages } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function ProductsPage({ params: { locale } }: any) {
  const products = await getProducts({ limit: 100 });
  const messages = await getMessages({ locale });
  let t = messages.productsPage as AbstractIntlMessages;

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-8">
      <h1 className="text-4xl font-bold text-foreground">
        {t.title as string}
      </h1>
      <p className="text-xl text-muted-foreground">{t.description as string}</p>
      <ProductList list={products} showViewAll={false} />
    </div>
  );
}
