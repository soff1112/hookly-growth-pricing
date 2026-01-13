import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to new features. When downgrading, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: "What happens when my trial ends?",
    answer:
      "After your 7-day trial, you'll be prompted to choose a plan to continue. If you don't select a plan, your account will automatically switch to the Free tier with limited features. Your data will be preserved.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption (256-bit SSL) for all data transfers and storage. We're GDPR compliant and never sell your data to third parties. Your social insights and strategies remain confidential.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee for new subscribers. If you're not satisfied with Hookly within the first 14 days, contact our support team for a full refund—no questions asked.",
  },
  {
    question: "Can I add more team seats?",
    answer:
      "Pro plans include 5 team seats. Additional seats can be purchased at $29/month each. Enterprise customers have unlimited seats included in their custom pricing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise plans. All payments are processed securely through Stripe.",
  },
];

export const PricingFAQ = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Hookly's pricing and plans.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
