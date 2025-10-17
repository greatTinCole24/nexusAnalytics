import { Button } from '@nexus/ui';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Start exploring Nexus with synthetic data and core dashboards.',
    features: ['1 organization', '3 members', '10 NL queries / day', '3 dashboards'],
    cta: 'Start for free'
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'Unlock live data sync, sharing controls, and higher quotas.',
    features: ['Unlimited NL queries', '20 dashboards', 'Usage analytics', 'Priority support'],
    cta: 'Upgrade with Stripe'
  },
  {
    name: 'Enterprise',
    price: 'Talk to us',
    description: 'Custom SLAs, white-glove onboarding, and dedicated success team.',
    features: ['Dedicated cluster', 'SSO / SCIM', 'Custom connectors', 'Insights automation'],
    cta: 'Book a demo'
  }
];

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 px-6 py-16 text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-semibold">Pricing that scales with your roster.</h1>
        <p className="mx-auto max-w-2xl text-white/70">
          Every plan includes secure hosting on Vercel, automatic migrations via Prisma, and the Ask Nexus natural language copilot.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">{tier.name}</h2>
              <p className="text-3xl font-bold">{tier.price}</p>
              <p className="text-sm text-white/70">{tier.description}</p>
            </div>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-white/70">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-8" variant={tier.name === 'Pro' ? 'default' : 'outline'}>
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
