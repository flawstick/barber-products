import { productListSchema } from "@/lib/schema";

// Dummy barber and hair product data
const dummyProducts = [
  {
    id: "prod_1",
    title: "Premium Shampoo",
    description: "Nourishing shampoo for all hair types",
    images: ["/placeholder.svg"],
    category: "hair-care",
    variants: [
      {
        id: "var_1",
        price: 24.99,
      },
    ],
  },
  {
    id: "prod_2",
    title: "Styling Pomade",
    description: "Strong hold pomade for classic styles",
    images: ["/placeholder.svg"],
    category: "styling",
    variants: [
      {
        id: "var_2",
        price: 18.99,
      },
    ],
  },
  {
    id: "prod_3",
    title: "Pro Hair Clippers",
    description: "High-quality clippers for precise cuts",
    images: ["/placeholder.svg"],
    category: "tools",
    variants: [
      {
        id: "var_3",
        price: 89.99,
      },
    ],
  },
  {
    id: "prod_4",
    title: "Beard Oil",
    description: "Moisturizing oil for a soft, manageable beard",
    images: ["/placeholder.svg"],
    category: "beard-care",
    variants: [
      {
        id: "var_4",
        price: 29.99,
      },
    ],
  },
  {
    id: "prod_5",
    title: "Hair Wax",
    description: "Flexible hold wax for textured styles",
    images: ["/placeholder.svg"],
    category: "styling",
    variants: [
      {
        id: "var_5",
        price: 15.99,
      },
    ],
  },
  {
    id: "prod_6",
    title: "Beard Trimmer",
    description: "Precision trimmer for beard maintenance",
    images: ["/placeholder.svg"],
    category: "tools",
    variants: [
      {
        id: "var_6",
        price: 49.99,
      },
    ],
  },
];

export async function getProducts(
  options: { limit?: number; category?: string } = { limit: 6 },
) {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredProducts = dummyProducts;
  if (options.category) {
    filteredProducts = dummyProducts.filter(
      (product) => product.category === options.category,
    );
  }

  const products = filteredProducts.slice(0, options.limit);

  return productListSchema.parse({
    data: products.map((product) => ({
      id: product.id,
      name: product.title,
      description: product.description,
      images: product.images,
      price: {
        id: product.variants[0].id,
        amount: product.variants[0].price,
        display_amount: product.variants[0].price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      },
    })),
    has_more: filteredProducts.length > (options?.limit || 0),
    starting_after: products[products.length - 1]?.id,
  });
}
