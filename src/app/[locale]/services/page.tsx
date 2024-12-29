import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Scissors, Book, PenToolIcon as Tool, Video } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("servicesPage");

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src="/placeholder.svg?height=1000&width=1920"
          alt={t("title")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{t("title")}</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg mb-8 animate-fade-in">{t("intro")}</p>
        <ul className="space-y-8 animate-fade-in">
          {[
            {
              icon: Scissors,
              title: t("services.consultations.title"),
              description: t("services.consultations.description"),
              button: t("services.consultations.button"),
              link: "/contact",
            },
            {
              icon: Tool,
              title: t("services.workshops.title"),
              description: t("services.workshops.description"),
              button: t("services.workshops.button"),
              link: "/workshops",
            },
            {
              icon: Video,
              title: t("services.tutorials.title"),
              description: t("services.tutorials.description"),
              button: t("services.tutorials.button"),
              link: "/tutorials",
            },
            {
              icon: Book,
              title: t("services.education.title"),
              description: t("services.education.description"),
              button: t("services.education.button"),
              link: "/education",
            },
          ].map(({ icon: Icon, title, description, button, link }, index) => (
            <li
              key={index}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="flex items-center mb-4">
                <Icon className="h-8 w-8 text-primary ltr:mr-4 rtl:ml-4" />
                <h2 className="text-2xl font-semibold">{title}</h2>
              </div>
              <p className="text-muted-foreground mb-4">{description}</p>
              <Button asChild>
                <Link href={link}>{button}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-lg mb-4">{t("closing.text")}</p>
          <Button asChild size="lg">
            <Link href="/">{t("closing.button")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
