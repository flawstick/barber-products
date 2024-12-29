"use client";

import { Button } from "@/components/ui/button";
import { checkoutAction } from "@/lib/actions";
import { useActionState } from "react";
import { useTranslations } from "next-intl";

export function ProductBuyForm({ variantId }: { variantId: string }) {
  const [state, formAction, isPending] = useActionState(checkoutAction, null);
  const t = useTranslations("productBuyForm");

  return (
    <form action={formAction}>
      <input type="hidden" name="variantId" value={variantId} />
      <Button type="submit" size="sm" disabled={isPending}>
        {isPending ? t("pleaseWait") : t("addToCart")}
      </Button>
    </form>
  );
}
