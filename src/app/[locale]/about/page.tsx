import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Scissors, Users, Award, Smile } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src="/placeholder.svg?height=1000&width=1920"
          alt="Barber Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            {t("title")}
          </h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">{t("ourStoryTitle")}</h2>
        <p className="text-lg mb-6">{t("ourStoryContent1")}</p>
        <p className="text-lg mb-8">{t("ourStoryContent2")}</p>

        <h2 className="text-3xl font-bold mb-6">{t("whyChooseUsTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              icon: Scissors,
              title: t("reasons.qualityFirstTitle"),
              desc: t("reasons.qualityFirstDescription"),
            },
            {
              icon: Users,
              title: t("reasons.expertAdviceTitle"),
              desc: t("reasons.expertAdviceDescription"),
            },
            {
              icon: Award,
              title: t("reasons.satisfactionGuaranteedTitle"),
              desc: t("reasons.satisfactionGuaranteedDescription"),
            },
            {
              icon: Smile,
              title: t("reasons.communityFocusedTitle"),
              desc: t("reasons.communityFocusedDescription"),
            },
          ].map(({ icon: Icon, title, desc }, index) => (
            <div className="flex items-start" key={index}>
              <Icon className="h-8 w-8 text-primary ltr:mr-4 rtl:ml-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg mb-8">{t("closingContent")}</p>

        <Button asChild size="lg">
          <Link href="/">{t("exploreButton")}</Link>
        </Button>
      </div>
    </div>
  );
}
