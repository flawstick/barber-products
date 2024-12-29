"use client";

import { Hero } from "@/components/hero";
import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("landingPage");
  const [products, setProducts] = useState<any>({ data: [] });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    getProducts({ limit: 4 }).then((data) => setProducts(data as any));
  }, []);

  const featuredProduct = products.data[0];

  const sectionRefs = {
    hero: useRef(null),
    featuredProduct: useRef(null),
    products: useRef(null),
    categories: useRef(null),
    reviews: useRef(null),
    commitment: useRef(null),
    faq: useRef(null),
  };

  const sectionInView = {
    hero: useInView(sectionRefs.hero, { once: true }),
    featuredProduct: useInView(sectionRefs.featuredProduct, { once: true }),
    products: useInView(sectionRefs.products, { once: true }),
    categories: useInView(sectionRefs.categories, { once: true }),
    reviews: useInView(sectionRefs.reviews, { once: true }),
    commitment: useInView(sectionRefs.commitment, { once: true }),
    faq: useInView(sectionRefs.faq, { once: true }),
  };

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-4 py-8">
      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className={getSectionClass(sectionInView.hero)}
      >
        <Hero />
      </section>

      {/* Featured Product Section */}
      <section
        ref={sectionRefs.featuredProduct}
        id="featured-product"
        className={getSectionClass(sectionInView.featuredProduct)}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("featuredProduct.title")}
        </h2>
        <div className="bg-card rounded-lg border border-border overflow-hidden relative">
          <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground py-1 px-3 rounded-full font-semibold text-sm">
            {t("featuredProduct.badge")}
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5">
              <Link href={`/products/${featuredProduct?.id}`} className="block">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={featuredProduct?.images?.[0] || "/placeholder.svg"}
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
                {featuredProduct?.description?.length > 100
                  ? `${featuredProduct?.description.slice(0, 100)}...`
                  : featuredProduct?.description}{" "}
                {t("featuredProduct.descriptionExtra")}
              </p>
              <div className="flex items-center">
                <div className="text-xl md:text-2xl font-bold ltr:mr-4 rtl:ml-4">
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
                <h4 className="text-lg font-semibold">
                  {t("featuredProduct.keyFeaturesTitle")}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                  {Array(5)
                    .fill(0)
                    .map((feature, index) => (
                      <li key={index}>
                        {t(`featuredProduct.keyFeatures.feature${index + 1}`)}
                      </li>
                    ))}
                </ul>
              </div>
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link href={`/products/${featuredProduct?.id}`}>
                  {t("featuredProduct.viewProductButton")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        ref={sectionRefs.products}
        id="products"
        className={getSectionClass(sectionInView.products)}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-foreground">
            {t("products.title")}
          </h2>
          <Button variant="outline">
            <Link href="/products/">{t("products.viewAllButton")}</Link>
          </Button>
        </div>
        <ProductList list={products} />
      </section>

      {/* Categories Section */}
      <section
        ref={sectionRefs.categories}
        className={getSectionClass(sectionInView.categories)}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Scissors,
              title: t("categories.premiumTools.title"),
              description: t("categories.premiumTools.description"),
            },
            {
              icon: Comb,
              title: t("categories.stylingEssentials.title"),
              description: t("categories.stylingEssentials.description"),
            },
            {
              icon: Spray,
              title: t("categories.hairCare.title"),
              description: t("categories.hairCare.description"),
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center"
            >
              <category.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section
        ref={sectionRefs.reviews}
        className={getSectionClass(sectionInView.reviews)}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("reviews.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["review1", "review2"].map((key) => (
            <Card key={key} className="p-4">
              <CardContent>
                <div className="flex items-center mb-4">
                  {[...Array(parseInt(t(`reviews.${key}.rating`)))].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-current"
                      />
                    ),
                  )}
                </div>
                <p className="text-muted-foreground mb-2">
                  "{t(`reviews.${key}.comment`)}"
                </p>
                <p className="font-semibold">- {t(`reviews.${key}.author`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section
        ref={sectionRefs.commitment}
        className={getSectionClass(sectionInView.commitment)}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("commitment.title")}
        </h2>
        <div className="relative h-96 rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Barber working in a salon"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-black/70 to-transparent flex items-center">
            <div className="text-white max-w-md ltr:ml-8 rtl:mr-8">
              <h3 className="text-2xl font-bold mb-4">
                {t("commitment.subtitle")}
              </h3>
              <p>{t("commitment.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={sectionRefs.faq}
        className={getSectionClass(sectionInView.faq)}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("faq.title")}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {["question1", "question2", "question3", "question4"].map((key) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger>{t(`faq.${key}.question`)}</AccordionTrigger>
              <AccordionContent>{t(`faq.${key}.answer`)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}

function getSectionClass(inView: boolean) {
  return `transition-all duration-1000 ease-in-out ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;
}
