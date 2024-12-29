import { Logo } from "@/components/logo";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <Logo className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">
                BarberStyle Essentials
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Elevating your grooming experience with premium barber and hair
              care products.
            </p>
            <div className="mt-8 flex space-x-6 text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="/about" className="hover:text-foreground">
                  About
                </Link>
                <Link href="/services" className="hover:text-foreground">
                  Services
                </Link>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
                <Link href="/careers" className="hover:text-foreground">
                  Careers
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Products</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="/products" className="hover:text-foreground">
                  All Products
                </Link>
                <Link
                  href="/products/hair-care"
                  className="hover:text-foreground"
                >
                  Hair Care
                </Link>
                <Link
                  href="/products/styling"
                  className="hover:text-foreground"
                >
                  Styling
                </Link>
                <Link href="/products/tools" className="hover:text-foreground">
                  Tools
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="/faq" className="hover:text-foreground">
                  FAQs
                </Link>
                <Link href="/shipping" className="hover:text-foreground">
                  Shipping
                </Link>
                <Link href="/returns" className="hover:text-foreground">
                  Returns
                </Link>
                <Link href="/track-order" className="hover:text-foreground">
                  Track Order
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="/privacy-policy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="hover:text-foreground"
                >
                  Terms & Conditions
                </Link>
                <Link href="/cookie-policy" className="hover:text-foreground">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="hover:text-foreground">
                  Accessibility
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} BarberStyle Essentials. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
