import { Logo } from "@/components/logo";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className=" text-xl font-bold">BarberStyle Essentials</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Elevating your grooming experience with premium barber and hair
              care products.
            </p>
            <div className="mt-8 flex gap-6 text-muted-foreground">
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
              <p className="font-medium">{t("company.title")}</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="/about" className="hover:text-foreground">
                  {t("company.about")}
                </Link>
                <Link href="/services" className="hover:text-foreground">
                  {t("company.services")}
                </Link>
                <Link href="/contact" className="hover:text-foreground">
                  {t("company.contact")}
                </Link>
                <Link href="/careers" className="hover:text-foreground">
                  {t("company.careers")}
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">{t("products.title")}</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="/products" className="hover:text-foreground">
                  {t("products.allProducts")}
                </Link>
                <Link
                  href="/products/hair-care"
                  className="hover:text-foreground"
                >
                  {t("products.hairCare")}
                </Link>
                <Link
                  href="/products/styling"
                  className="hover:text-foreground"
                >
                  {t("products.styling")}
                </Link>
                <Link href="/products/tools" className="hover:text-foreground">
                  {t("products.tools")}
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">{t("helpfulLinks.title")}</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="/faq" className="hover:text-foreground">
                  {t("helpfulLinks.faqs")}
                </Link>
                <Link href="/shipping" className="hover:text-foreground">
                  {t("helpfulLinks.shipping")}
                </Link>
                <Link href="/returns" className="hover:text-foreground">
                  {t("helpfulLinks.returns")}
                </Link>
                <Link href="/track-order" className="hover:text-foreground">
                  {t("helpfulLinks.trackOrder")}
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">{t("legal.title")}</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                <Link href="/privacy-policy" className="hover:text-foreground">
                  {t("legal.privacyPolicy")}
                </Link>
                <Link
                  href="/terms-conditions"
                  className="hover:text-foreground"
                >
                  {t("legal.termsConditions")}
                </Link>
                <Link href="/cookie-policy" className="hover:text-foreground">
                  {t("legal.cookiePolicy")}
                </Link>
                <Link href="/accessibility" className="hover:text-foreground">
                  {t("legal.accessibility")}
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              {t("year", { year: new Date().getFullYear() })} {t("rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
