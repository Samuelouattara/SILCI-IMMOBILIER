"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Achat de Terrain", href: "#services" },
    { name: "Vente de Terrain", href: "#services" },
    { name: "Aménagement Foncier", href: "#services" },
    { name: "Construction", href: "#services" },
    { name: "Location d'Engins", href: "#services" },
  ],
  company: [
    { name: "À Propos", href: "#apropos" },
    { name: "Nos Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <svg viewBox="0 0 120 60" className="h-12 w-24">
                <ellipse cx="25" cy="8" rx="6" ry="6" fill="#F26522" />
                <ellipse cx="60" cy="8" rx="6" ry="6" fill="#F26522" />
                <ellipse cx="95" cy="8" rx="6" ry="6" fill="#F26522" />
                <path d="M10 50 L25 20 L40 50" stroke="#8B1538" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M45 50 L60 20 L75 50" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M80 50 L95 20 L110 50" stroke="#808080" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <p className="mt-4 text-white/60 leading-relaxed">
              La Crédibilité notre quotidien. Votre partenaire de confiance pour tous vos projets immobiliers en Côte d&apos;Ivoire.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:+22527243245 38" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+225 27 24 32 45 38</span>
              </a>
              <a href="mailto:silci0immobilier@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                <span>silci0immobilier@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4" />
                <span>Mockey-Ville, Grand-Bassam</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informations Légales</h4>
            <div className="space-y-3 text-white/60 text-sm">
              <p><span className="text-white/80">Forme juridique:</span> SARL</p>
              <p><span className="text-white/80">Capital:</span> 5 000 000 FCFA</p>
              <p><span className="text-white/80">NRCCM:</span> N°CI-GRDBASSAM-2021-B-12398</p>
              <p><span className="text-white/80">N° CC:</span> 22 42 777 L</p>
              <p><span className="text-white/80">Gérant:</span> M. KOUADIO YAO SYLVAIN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SILCI-IMMOBILIER. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <a href="https://www.silici-immo.ci" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                www.silici-immo.ci
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
