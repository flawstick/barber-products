import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { isRTL } from "@/lib/rtl";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barber Products and Checkout",
  description: "A template to showcase barber products and a checkout flow.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  if (!routing.locales.includes(locale as any)) notFound();
  const messages = await getMessages();
  let rtl = isRTL(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn("flex min-h-svh flex-col antialiased", inter.className)}
        style={{ direction: rtl ? "rtl" : "ltr" }}
        dir={rtl ? "rtl" : "ltr"}
      >
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
