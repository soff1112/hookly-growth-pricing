import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  showPromoCode?: boolean;
  variant?: "default" | "primary" | "secondary";
  index: number;
}

export const PricingCard = ({
  name,
  price,
  description,
  features,
  cta,
  isPopular = false,
  showPromoCode = false,
  variant = "default",
  index,
}: PricingCardProps) => {
  const [promoCode, setPromoCode] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col p-6 lg:p-8 rounded-2xl bg-card transition-all duration-300 group",
        isPopular
          ? "border-2 border-primary shadow-glow scale-[1.02] lg:scale-105"
          : "border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1"
      )}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full text-xs font-semibold gradient-bg text-white shadow-glow">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          {price !== "Custom" && (
            <span className="text-muted-foreground">/ mo</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
              isPopular ? "bg-primary/15" : "bg-secondary"
            )}>
              <Check className={cn(
                "w-3 h-3",
                isPopular ? "text-primary" : "text-foreground"
              )} />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Promo Code */}
      {showPromoCode && (
        <div className="mb-4">
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="text-center text-sm h-9 rounded-lg border-border/60 focus:border-primary"
          />
        </div>
      )}

      {/* CTA Button */}
      <Button
        variant={variant === "primary" ? "gradient" : variant === "secondary" ? "gradient-outline" : "outline"}
        size="lg"
        className="w-full"
      >
        {cta}
      </Button>
    </motion.div>
  );
};
