import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopify Products and Checkout",
  description: "A template to showcase Shopify products and a checkout flow.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("flex min-h-svh flex-col antialiased", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </TooltipProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
