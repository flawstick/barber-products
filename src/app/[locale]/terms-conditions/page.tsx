import { useTranslations } from "next-intl";

export default function TermsConditionsPage() {
  const t = useTranslations("termsConditionsPage");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="prose dark:prose-invert text-foreground">
        <p>{t("lastUpdated", { date: new Date().toLocaleDateString() })}</p>
        <p>{t("intro")}</p>

        {[
          "useWebsite",
          "productInfo",
          "orderingPayment",
          "shippingDelivery",
          "returnsRefunds",
          "intellectualProperty",
          "limitationLiability",
          "changesTerms",
          "contactUs",
        ].map((section) => (
          <div key={section}>
            <h2>{t(`sections.${section}.title`)}</h2>
            <p>{t(`sections.${section}.content`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
