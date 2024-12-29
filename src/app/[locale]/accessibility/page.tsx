import { useTranslations } from "next-intl";

export default function AccessibilityPage() {
  const t = useTranslations("accessibilityPage");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="prose dark:prose-invert text-foreground">
        <p>{t("lastUpdated", { date: new Date().toLocaleDateString() })}</p>
        <p>{t("intro")}</p>

        <h2>{t("measures.title")}</h2>
        <p>{t("measures.content")}</p>
        <ul>
          <li>{t("measures.items.1")}</li>
          <li>{t("measures.items.2")}</li>
          <li>{t("measures.items.3")}</li>
          <li>{t("measures.items.4")}</li>
        </ul>

        <h2>{t("conformance.title")}</h2>
        <p>{t("conformance.content")}</p>

        <h2>{t("feedback.title")}</h2>
        <p>{t("feedback.content")}</p>
        <ul>
          <li>{t("feedback.items.phone")}</li>
          <li>{t("feedback.items.email")}</li>
          <li>{t("feedback.items.address")}</li>
        </ul>
        <p>{t("feedback.responseTime")}</p>

        <h2>{t("compatibility.title")}</h2>
        <p>{t("compatibility.content")}</p>
        <ul>
          <li>{t("compatibility.items.1")}</li>
          <li>{t("compatibility.items.2")}</li>
          <li>{t("compatibility.items.3")}</li>
        </ul>

        <h2>{t("specifications.title")}</h2>
        <p>{t("specifications.content")}</p>
        <ul>
          <li>{t("specifications.items.1")}</li>
          <li>{t("specifications.items.2")}</li>
          <li>{t("specifications.items.3")}</li>
          <li>{t("specifications.items.4")}</li>
        </ul>

        <h2>{t("assessment.title")}</h2>
        <p>{t("assessment.content")}</p>
        <ul>
          <li>{t("assessment.items.1")}</li>
          <li>{t("assessment.items.2")}</li>
        </ul>

        <h2>{t("limitations.title")}</h2>
        <p>{t("limitations.content")}</p>
        <p>{t("limitations.knownLimitationsTitle")}</p>
        <ol>
          <li>{t("limitations.items.1")}</li>
          <li>{t("limitations.items.2")}</li>
        </ol>
      </div>
    </div>
  );
}
