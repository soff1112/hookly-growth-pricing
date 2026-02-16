import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureRow {
  feature: string;
  free: string;
  agency: string;
}

const comparisonData: FeatureRow[] = [
  { feature: "Competitors tracked", free: "3", agency: "100" },
  { feature: "Own accounts", free: "1", agency: "10" },
  { feature: "AI generations/month", free: "10", agency: "5000" },
  { feature: "Transcriptions/month", free: "5", agency: "2000" },
];

const plans = ["Free", "Agency"];

const renderValue = (value: string) => {
  return <span className="text-sm text-foreground font-medium">{value}</span>;
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
            <div className="grid grid-cols-3 gap-4 mb-2 sticky top-0 bg-hookly-light py-4 border-b border-border">
              <div className="col-span-1" />
              {plans.map((plan, index) => (
                <div
                  key={plan}
                  className={cn(
                    "text-center font-semibold text-sm",
                    index === 1 ? "text-primary" : "text-foreground"
                  )}
                >
                  {plan}
                  {index === 1 && (
                    <div className="text-[10px] font-normal text-primary mt-0.5">
                      Most Popular
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Rows */}
            {comparisonData.map((row, rowIndex) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-3 gap-4 py-3 px-4",
                  rowIndex !== comparisonData.length - 1 && "border-b border-border/50"
                )}
              >
                <div className="col-span-1 text-sm text-muted-foreground">
                  {row.feature}
                </div>
                <div className="text-center">{renderValue(row.free)}</div>
                <div className="text-center">{renderValue(row.agency)}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
