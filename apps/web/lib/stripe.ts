import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? 'sk_test_123', {
  apiVersion: '2023-10-16'
});

export async function createCheckoutSession(planId: string) {
  const url = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
  return stripe.checkout.sessions.create({
    mode: 'subscription',
    success_url: `${url}/billing/success`,
    cancel_url: `${url}/pricing`,
    line_items: [
      {
        price: planId,
        quantity: 1
      }
    ]
  });
}
