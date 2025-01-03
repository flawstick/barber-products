import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-xl border border-border">
      <Image
        src="/placeholder.svg?height=1000&width=1920"
        alt="Barber shop interior"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
      <div className="z-10 flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
        <Scissors className="h-16 w-16 text-primary" />
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          {t("title")}
        </h1>
        <p className="text-muted-foreground mb-4 text-xl max-w-2xl">
          {t("subtitle")}
        </p>
        <Button
          asChild
          size="lg"
          className="relative overflow-hidden group transition-colors duration-300 hover:scale-110 transition-all duration-300"
        >
          <Link href="#products" className="z-10 relative">
            {t("shopNow")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
