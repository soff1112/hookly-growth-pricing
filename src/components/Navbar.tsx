import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const navLinks = [{
  label: "Features",
  href: "#features"
}, {
  label: "How it Works",
  href: "#how-it-works"
}, {
  label: "Pricing",
  href: "#pricing"
}, {
  label: "Demo",
  href: "#demo"
}];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <motion.nav initial={{
    opacity: 0,
    y: -10
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4
  }} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-foreground">Hookly</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {}



          )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="default">
              Log in
            </Button>
            <Button variant="gradient" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden pb-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => <a key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>)}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  Log in
                </Button>
                <Button variant="gradient">Get Started</Button>
              </div>
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
};