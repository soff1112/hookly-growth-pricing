import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureRow {
  feature: string;
  free: boolean | string;
  creator: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

interface FeatureSection {
  category: string;
  features: FeatureRow[];
}

const comparisonData: FeatureSection[] = [
  {
    category: "Analytics",
    features: [
      { feature: "Profile analyses", free: "5/month", creator: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
      { feature: "Engagement metrics", free: true, creator: true, pro: true, enterprise: true },
      { feature: "Viral hook insights", free: true, creator: true, pro: true, enterprise: true },
      { feature: "Real-time trend alerts", free: false, creator: true, pro: true, enterprise: true },
      { feature: "Hook performance scoring", free: false, creator: true, pro: true, enterprise: true },
    ],
  },
  {
    category: "Competitor Intelligence",
    features: [
      { feature: "Competitor tracking", free: false, creator: "3 profiles", pro: "Unlimited", enterprise: "Unlimited" },
      { feature: "Benchmark reports", free: false, creator: true, pro: true, enterprise: true },
      { feature: "Content gap analysis", free: false, creator: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Marketing Strategy",
    features: [
      { feature: "Strategy workspace", free: false, creator: false, pro: true, enterprise: true },
      { feature: "AI Strategy chat", free: false, creator: false, pro: true, enterprise: true },
      { feature: "Content calendar", free: false, creator: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Collaboration",
    features: [
      { feature: "Team seats", free: "1", creator: "1", pro: "5", enterprise: "Unlimited" },
      { feature: "Role permissions", free: false, creator: false, pro: true, enterprise: true },
      { feature: "Shared workspaces", free: false, creator: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Exports & API",
    features: [
      { feature: "PDF exports", free: false, creator: true, pro: true, enterprise: true },
      { feature: "White-label reports", free: false, creator: false, pro: true, enterprise: true },
      { feature: "API access", free: false, creator: false, pro: true, enterprise: true },
      { feature: "Custom integrations", free: false, creator: false, pro: false, enterprise: true },
    ],
  },
];

const plans = ["Free", "Creator", "Pro", "Enterprise"];

const renderValue = (value: boolean | string) => {
  if (typeof value === "string") {
    return <span className="text-sm text-foreground font-medium">{value}</span>;
  }
  if (value) {
    return (
      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
        <Check className="w-3 h-3 text-primary" />
      </div>
    );
  }
  return <Minus className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
};

export const ComparisonTable = () => {
  return (
    <section className="py-16 lg:py-24 bg-hookly-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Compare Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect plan for your needs with our detailed feature comparison.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-6xl mx-auto overflow-x-auto"
        >
          <div className="min-w-[640px]">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 mb-2 sticky top-0 bg-hookly-light py-4 border-b border-border">
              <div className="col-span-1" />
              {plans.map((plan, index) => (
                <div
                  key={plan}
                  className={cn(
                    "text-center font-semibold text-sm",
                    index === 2 ? "text-primary" : "text-foreground"
                  )}
                >
                  {plan}
                  {index === 2 && (
                    <div className="text-[10px] font-normal text-primary mt-0.5">
                      Most Popular
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sections */}
            {comparisonData.map((section, sectionIndex) => (
              <div key={section.category} className="mb-6">
                <div className="py-3 px-4 bg-secondary/50 rounded-lg mb-2">
                  <span className="text-sm font-semibold text-foreground">
                    {section.category}
                  </span>
                </div>
                {section.features.map((row, rowIndex) => (
                  <div
                    key={row.feature}
                    className={cn(
                      "grid grid-cols-5 gap-4 py-3 px-4",
                      rowIndex !== section.features.length - 1 && "border-b border-border/50"
                    )}
                  >
                    <div className="col-span-1 text-sm text-muted-foreground">
                      {row.feature}
                    </div>
                    <div className="text-center">{renderValue(row.free)}</div>
                    <div className="text-center">{renderValue(row.creator)}</div>
                    <div className="text-center">{renderValue(row.pro)}</div>
                    <div className="text-center">{renderValue(row.enterprise)}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
