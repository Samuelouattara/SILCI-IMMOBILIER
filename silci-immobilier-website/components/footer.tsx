import { Phone, Mail, MapPin, Clock } from "lucide-react";
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

const contactInfo = [
  {
    icon: Phone,
    items: [
      { label: "+225 27 24 32 45 38", href: "tel:+2252724324538" },
      { label: "+225 07 97 88 88 61", href: "tel:+2250797888861" },
    ],
  },
  {
    icon: Mail,
    items: [
      { label: "silci0immobilier@gmail.com", href: "mailto:silci0immobilier@gmail.com" },
    ],
  },
  {
    icon: MapPin,
    items: [
      {
        label: "Mockey-Ville, Grand-Bassam",
        href: "https://maps.google.com/?q=Grand-Bassam,Côte+d'Ivoire",
      },
      { label: "Côte d'Ivoire", href: null },
    ],
  },
  {
    icon: Clock,
    items: [
      { label: "Lun - Ven : 8h - 18h", href: null },
      { label: "Sam : 9h - 14h", href: null },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <svg viewBox="0 0 120 60" className="h-12 w-24" aria-hidden="true">
                <ellipse cx="25" cy="8" rx="6" ry="6" fill="#F26522" />
                <ellipse cx="60" cy="8" rx="6" ry="6" fill="#F26522" />
                <ellipse cx="95" cy="8" rx="6" ry="6" fill="#F26522" />
                <path d="M10 50 L25 20 L40 50" stroke="#8B1538" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M45 50 L60 20 L75 50" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M80 50 L95 20 L110 50" stroke="#808080" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <p className="mt-4 text-sm font-medium text-white/80">
              La Crédibilité notre quotidien
            </p>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets immobiliers en Côte d&apos;Ivoire.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((group) => (
                <li key={group.icon.name} className="flex gap-3">
                  <group.icon className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                  <div className="space-y-1">
                    {group.items.map((item) =>
                      item.href ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block text-sm text-white/60 hover:text-secondary transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span key={item.label} className="block text-sm text-white/60">
                          {item.label}
                        </span>
                      )
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-1">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
                Services
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
                Entreprise
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
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
            <a
              href="https://www.silici-immo.ci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-sm hover:text-secondary transition-colors"
            >
              www.silici-immo.ci
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
