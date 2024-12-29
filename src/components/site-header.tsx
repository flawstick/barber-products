import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import { Cart } from "@/components/cart";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sidebar } from "@/components/sidebar";
import { LocaleSwitcher } from "./locale-switch";
import { useTranslations } from "next-intl";

export function SiteHeader() {
  const t = useTranslations("siteHeader");

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-20 border-b border-border">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4">
        <div className="ltr:mr-7 rtl:ml-7 flex items-center gap-3">
          <Sidebar />
          <Logo className="size-8" />
          <Link
            href="/"
            className="flex items-center gap-2 px-2 text-xl font-bold tracking-tighter ltr:-ml-2 rtl:-mr-2 md:ml-0"
          >
            {t("brandName")}
          </Link>
        </div>
        <nav className="text-muted-foreground hover:[&_a]:text-foreground hidden items-center gap-6 text-sm font-medium md:flex [&_a]:transition-colors">
          <Link href="/">{t("navigation.products")}</Link>
          <Link href="/about">{t("navigation.about")}</Link>
          <Link href="/services">{t("navigation.services")}</Link>
          <Link href="/contact">{t("navigation.contact")}</Link>
        </nav>
        <div className="ltr:ml-auto rtl:mr-auto flex items-center gap-2">
          <SearchBar className="hidden sm:block" />
          <LocaleSwitcher />
          <ThemeToggle />
          <Cart />
        </div>
      </div>
    </header>
  );
}

function SearchBar({ className }: { className?: string }) {
  const t = useTranslations("siteHeader.searchBar");

  return (
    <form className={cn("relative max-w-lg lg:max-w-xs", className)}>
      <Search className="text-muted-foreground absolute left-2 top-2 size-4" />
      <Input
        type="search"
        placeholder={t("placeholder")}
        className="h-8 rounded-lg pl-8 text-sm sm:w-[200px] md:w-[200px] lg:w-[200px]"
      />
    </form>
  );
}
