import { ProductBuyForm } from "@/components/product-buy-form";
import { productSchema } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

export function ProductListThumbnail({
  product,
}: {
  product: z.infer<typeof productSchema>;
}) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-card rounded-lg p-4 border border-border transition-shadow hover:shadow-md animate-fade-in">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={product.images?.[0] ?? "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center gap-2 py-2">
          <div className="flex flex-col gap-1">
            <div className="font-medium text-foreground">{product.name}</div>
            <div className="text-muted-foreground">
              {product.price.display_amount}
            </div>
          </div>
          <div className="ltr:ml-auto rtl:mr-auto">
            <ProductBuyForm variantId={product.price.id} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ProductListThumbnailSkeleton() {
  return <div className="bg-muted aspect-square rounded-xl animate-pulse" />;
}
