import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (yearly: boolean) => void;
  currency: "USD" | "EUR";
  onCurrencyChange: (currency: "USD" | "EUR") => void;
}
export const PricingToggle = ({
  isYearly,
  onToggle,
  currency,
  onCurrencyChange
}: PricingToggleProps) => {
  return <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
      {/* Billing Toggle */}
      <div className="inline-flex items-center bg-secondary rounded-xl p-1">
        <button onClick={() => onToggle(false)} className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200", !isYearly ? "bg-card text-foreground shadow-soft" : "text-muted-foreground hover:text-foreground")}>
          Monthly
        </button>
        <button onClick={() => onToggle(true)} className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2", isYearly ? "bg-card text-foreground shadow-soft" : "text-muted-foreground hover:text-foreground")}>
          Yearly
          <motion.span initial={{
          scale: 0.9
        }} animate={{
          scale: 1
        }} className="px-2 py-0.5 rounded-full text-xs font-semibold gradient-bg text-white">
            Save 25%
          </motion.span>
        </button>
      </div>

      {/* Currency Selector */}
      
    </div>;
};