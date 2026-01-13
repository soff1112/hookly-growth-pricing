import { useState } from "react";
import { PricingToggle } from "./PricingToggle";
import { PricingCard } from "./PricingCard";

const pricingPlans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "Explore Hookly's core insights",
    features: [
      "Limited profile analyses",
      "Basic engagement metrics",
      "Viral hook insights",
      "Community support",
    ],
    cta: "Get Started Free",
    variant: "default" as const,
  },
  {
    name: "Creator",
    monthlyPrice: "$49",
    yearlyPrice: "$37",
    description: "For serious content creators",
    features: [
      "Unlimited analyses",
      "Advanced competitor tracking",
      "Real-time trend alerts",
      "Hook performance scoring",
      "Export reports (PDF)",
    ],
    cta: "Start Free Trial",
    variant: "secondary" as const,
  },
  {
    name: "Pro",
    monthlyPrice: "$199",
    yearlyPrice: "$149",
    description: "For agencies and teams",
    features: [
      "Everything in Creator",
      "Marketing Strategy workspace",
      "AI Strategy chat",
      "Team collaboration (5 seats)",
      "White-label reports",
      "API access",
    ],
    cta: "Start Free Trial",
    variant: "primary" as const,
    isPopular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited seats",
      "Custom data retention",
      "SLA & dedicated support",
      "Custom onboarding",
    ],
    cta: "Contact Sales",
    variant: "default" as const,
  },
];

export const PricingCards = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD");

  return (
    <section id="pricing" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PricingToggle
          isYearly={isYearly}
          onToggle={setIsYearly}
          currency={currency}
          onCurrencyChange={setCurrency}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              isPopular={plan.isPopular}
              variant={plan.variant}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
