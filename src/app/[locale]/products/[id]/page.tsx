"use server";

import { getProducts } from "@/lib/products";
import { ProductBuyForm } from "@/components/product-buy-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { getMessages } from "next-intl/server";
import { isRTL } from "@/lib/rtl";

export default async function ProductPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  const messages = await getMessages({ locale });
  const products = await getProducts({ limit: 100 });
  const product = products.data.find((p: any) => p.id === id);

  let t = messages.productPage as any; // AbstractIntlMessages

  if (!product) {
    notFound();
  }

  const reviews = [t.reviews.review1, t.reviews.review2, t.reviews.review3];
  let rtl: boolean = isRTL(locale);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <Button asChild variant="ghost" className="mb-8 text-lg">
        <Link href="/products" className="flex items-center">
          {rtl ? (
            <ArrowRight className="ml-2 h-6 w-6" />
          ) : (
            <ArrowLeft className="mr-2 h-6 w-6" />
          )}
          {t.backToProducts}
        </Link>
      </Button>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg animate-fade-in">
          <Image
            src={product.images?.[0] ?? "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between animate-slide-up">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mb-4">
              {product.price.display_amount}
            </p>
            <div className="text-lg text-muted-foreground mb-6">
              <p className="mb-4">{product.description}</p>
              <p className="mb-4">{t.description.crafted}</p>
              <p>{t.description.experience}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {t.keyFeaturesTitle}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{t.keyFeatures[1]}</li>
                <li>{t.keyFeatures[2]}</li>
                <li>{t.keyFeatures[3]}</li>
                <li>{t.keyFeatures[4]}</li>
                <li>{t.keyFeatures[5]}</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <ProductBuyForm variantId={product.price.id} />
          </div>
        </div>
      </div>

      <section className="mt-16 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">{t.customerReviews}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review: any, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating
                        ? "text-yellow-500 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-2">"{review.comment}"</p>
              <p className="font-semibold">- {review.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
