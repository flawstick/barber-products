'use server'

export async function checkoutAction(_prevState: unknown, formData: FormData) {
  const variantId = formData.get('variantId') as string
  // In a real Shopify integration, you would create a checkout session here
  console.log(`Creating Shopify checkout for variant ID: ${variantId}`)
  // For now, we'll just redirect to a dummy checkout page
  return { success: true, checkoutUrl: '/checkout' }
}


