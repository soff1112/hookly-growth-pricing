import { motion } from "framer-motion";
import { Shield, RefreshCw, Lock, FileCheck } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Secure payments",
    description: "Powered by Stripe",
  },
  {
    icon: RefreshCw,
    title: "Cancel anytime",
    description: "No lock-in contracts",
  },
  {
    icon: Lock,
    title: "GDPR compliant",
    description: "Your data is protected",
  },
  {
    icon: FileCheck,
    title: "No hidden fees",
    description: "What you see is what you pay",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-12 lg:py-16 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <item.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
