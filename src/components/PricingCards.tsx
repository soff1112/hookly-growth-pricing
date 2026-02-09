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
      "3 competitors",
      "1 own account",
      "10 AI generations/month",
      "5 transcriptions/month",
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
  },
  {
    name: "Pro",
    monthlyPrice: "$49",
    yearlyPrice: "$37",
    description: "For serious content creators",
    features: [
      "20 competitors",
      "3 own accounts",
      "500 AI generations/month",
      "200 transcriptions/month",
    ],
    cta: "Start Free Trial",
    variant: "secondary" as const,
  },
  {
    name: "Agency",
    monthlyPrice: "$199",
    yearlyPrice: "$149",
    description: "For agencies and teams",
    features: [
      "100 competitors",
      "10 own accounts",
      "5000 AI generations/month",
      "2000 transcriptions/month",
    ],
    cta: "Start Free Trial",
    variant: "primary" as const,
    isPopular: true,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 max-w-5xl mx-auto">
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
