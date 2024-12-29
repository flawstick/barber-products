import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import { useTranslations } from "next-intl";

export default async function BeardCarePage() {
  const products = await getProducts({ category: "beard-care" });
  const t = useTranslations("beardCarePage");

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground">{t("title")}</h1>
      <p className="text-lg text-muted-foreground">{t("description")}</p>
      <ProductList list={products} />
    </div>
  );
}
