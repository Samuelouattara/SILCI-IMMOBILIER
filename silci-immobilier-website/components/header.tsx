"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "Services", href: "#services" },
  { name: "À Propos", href: "#apropos" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <svg viewBox="0 0 120 60" className="h-10 w-20">
                <ellipse cx="25" cy="8" rx="6" ry="6" fill="#F26522" />
                <ellipse cx="60" cy="8" rx="6" ry="6" fill="#F26522" />
                <ellipse cx="95" cy="8" rx="6" ry="6" fill="#F26522" />
                <path d="M10 50 L25 20 L40 50" stroke="#8B1538" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M45 50 L60 20 L75 50" stroke="#1A1A1A" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M80 50 L95 20 L110 50" stroke="#808080" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-foreground tracking-tight">SILCI-IMMOBILIER</span>
              <p className="text-xs text-muted-foreground italic">La Crédibilité notre quotidien</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+22527243245 38"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+225 27 24 32 45 38</span>
            </a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Contactez-nous
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-card border-t border-border"
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-border space-y-3">
            <a href="tel:+22527243245 38" className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              +225 27 24 32 45 38
            </a>
            <a href="mailto:silci0immobilier@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              silci0immobilier@gmail.com
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Mockey-Ville, Grand-Bassam
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
