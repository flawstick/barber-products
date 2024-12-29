import { getProducts } from "@/lib/products";
import { ProductBuyForm } from "@/components/product-buy-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const products = await getProducts({ limit: 100 });
  const product = products.data.find((p: any) => p.id === params.id);

  if (!product) {
    notFound();
  }

  // Dummy reviews data
  const reviews = [
    {
      id: 1,
      author: "John D.",
      rating: 5,
      comment: "Great product! Really improved my styling routine.",
    },
    {
      id: 2,
      author: "Sarah M.",
      rating: 4,
      comment: "Good quality, but a bit pricey. Still worth it though.",
    },
    {
      id: 3,
      author: "Mike R.",
      rating: 5,
      comment: "Best hair product I've used. Highly recommend!",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <Button asChild variant="ghost" className="mb-8 text-lg">
        <Link href="/products" className="flex items-center">
          <ArrowLeft className="mr-2 h-6 w-6" />
          Back to Products
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
              <p className="mb-4">
                Crafted with precision and care, this product embodies the
                essence of professional-grade hair care. Its unique formula is
                designed to deliver exceptional results, whether you're a
                seasoned stylist or an enthusiast looking to elevate your
                grooming routine.
              </p>
              <p>
                Experience the difference that comes from using a product
                trusted by experts in the field. With its carefully selected
                ingredients and innovative technology, this product not only
                styles your hair but also nourishes and protects it, ensuring
                that you look your best while maintaining optimal hair health.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Professional-grade formula for salon-quality results</li>
                <li>Long-lasting hold that keeps your style intact all day</li>
                <li>Suitable for all hair types and textures</li>
                <li>Nourishing ingredients that promote hair health</li>
                <li>Cruelty-free and made with ethically sourced components</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <ProductBuyForm variantId={product.price.id} />
          </div>
        </div>
      </div>

      <section className="mt-16 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
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
