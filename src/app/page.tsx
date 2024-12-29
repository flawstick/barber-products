"use client";

import { Hero } from "@/components/hero";
import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Star,
  Scissors,
  CombineIcon as Comb,
  SprayCanIcon as Spray,
} from "lucide-react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  const [products, setProducts] = useState<any>({ data: [] });

  useEffect(() => {
    getProducts({ limit: 4 }).then((data) => setProducts(data as any));
  }, []);

  const featuredProduct = products.data[0];

  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const productsRef = useRef(null);
  const categoriesRef = useRef(null);
  const reviewsRef = useRef(null);
  const commitmentRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const featuredInView = useInView(featuredRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });
  const categoriesInView = useInView(categoriesRef, { once: true });
  const reviewsInView = useInView(reviewsRef, { once: true });
  const commitmentInView = useInView(commitmentRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-4 py-8">
      <div
        ref={heroRef}
        className={`transition-all duration-1000 ease-in-out ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Hero />
      </div>

      <section
        ref={featuredRef}
        id="featured-product"
        className={`transition-all duration-1000 ease-in-out ${
          featuredInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Featured Product
        </h2>
        <div className="bg-card rounded-lg border border-border overflow-hidden relative transition-shadow hover:shadow-md">
          <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground py-1 px-3 rounded-full font-semibold text-sm">
            Featured
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5">
              <Link href={`/products/${featuredProduct?.id}`} className="block">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={
                      featuredProduct?.images[0] ||
                      "/placeholder.svg?height=400&width=400"
                    }
                    alt={featuredProduct?.name || "Featured Product"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
            </div>
            <div className="w-full md:w-3/5 p-6 md:p-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold">
                {featuredProduct?.name}
              </h3>
              <p className="text-muted-foreground">
                {featuredProduct?.description &&
                featuredProduct.description.length > 100
                  ? `${featuredProduct.description.slice(0, 100)}...`
                  : featuredProduct?.description}
                Crafted with precision and care, this product embodies the
                pinnacle of barber-grade quality...
              </p>
              <div className="flex items-center">
                <div className="text-xl md:text-2xl font-bold mr-4">
                  {featuredProduct?.price.display_amount}
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                  <li>Professional-grade quality</li>
                  <li>Long-lasting formula</li>
                  <li>Suitable for all hair types</li>
                  <li>Cruelty-free and vegan</li>
                  <li>Nourishing ingredients</li>
                </ul>
              </div>
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link href={`/products/${featuredProduct?.id}`}>
                  View Product
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={productsRef}
        id="products"
        className={`transition-all duration-1000 ease-in-out ${
          productsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-foreground">Our Products</h2>
          <Button asChild variant="outline">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
        <ProductList list={products} />
      </section>

      <section
        ref={categoriesRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ease-in-out ${
          categoriesInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
          <Scissors className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Premium Tools</h3>
          <p className="text-muted-foreground">
            Professional-grade implements for precise cuts and styling.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
          <Comb className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Styling Essentials</h3>
          <p className="text-muted-foreground">
            Versatile products for any look, from volumizing mousses to sleek
            pomades.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
          <Spray className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Hair Care</h3>
          <p className="text-muted-foreground">
            Nourish and protect with our specially formulated products.
          </p>
        </div>
      </section>

      <section
        ref={reviewsRef}
        className={`transition-all duration-1000 ease-in-out ${
          reviewsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-500 fill-current"
                />
              ))}
            </div>
            <p className="text-muted-foreground mb-2">
              "These products have completely transformed my barbershop. The
              quality is unmatched, and my clients consistently rave about the
              results."
            </p>
            <p className="font-semibold">- John D., Professional Barber</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-500 fill-current"
                />
              ))}
            </div>
            <p className="text-muted-foreground mb-2">
              "I've never been able to style my hair this well at home. These
              products are a game-changer! The quality rivals what I've
              experienced in high-end salons."
            </p>
            <p className="font-semibold">- Sarah M., Enthusiast</p>
          </div>
        </div>
      </section>

      <section
        ref={commitmentRef}
        className={`mt-12 transition-all duration-1000 ease-in-out ${
          commitmentInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Our Commitment to Quality
        </h2>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Barber working in a salon"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="text-white max-w-md ml-8">
              <h3 className="text-2xl font-bold mb-4">
                Crafted for Professionals, Perfect for Everyone
              </h3>
              <p>
                Our products are developed in collaboration with top barbers and
                stylists, ensuring professional-grade quality in every item.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={faqRef}
        className={`mt-12 transition-all duration-1000 ease-in-out ${
          faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How often should I use your hair care products?
            </AccordionTrigger>
            <AccordionContent>
              The frequency of use depends on your hair type and the specific
              product. Generally, shampoos and conditioners can be used 2-3
              times a week, while styling products can be used daily. Always
              refer to the product instructions for the best results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Are your products suitable for all hair types?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we have a range of products designed for different hair types
              and textures. Whether you have straight, wavy, curly, or coily
              hair, we have products that cater to your specific needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you offer international shipping?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer international shipping to most countries. Shipping
              rates and delivery times may vary depending on the destination.
              Please check our shipping policy for more details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for unused and unopened products.
              If you're not satisfied with your purchase, please contact our
              customer service team to initiate a return or exchange.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
