"use client";

import { Button } from "@/components/ui/button";
import { checkoutAction } from "@/lib/actions";
import { useActionState } from "react";

export function ProductBuyForm({ variantId }: { variantId: string }) {
  const [state, formAction, isPending] = useActionState(checkoutAction, null);

  return (
    <form action={formAction}>
      <input type="hidden" name="variantId" value={variantId} />
      <Button type="submit" size="sm" disabled={isPending}>
        {isPending ? "Please wait" : "Add to Cart"}
      </Button>
    </form>
  );
}
