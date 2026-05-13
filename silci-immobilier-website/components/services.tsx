"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, Hammer, Truck, FileCheck, Key } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Achat & Vente de Terrain",
    description:
      "Trouvez le terrain idéal pour votre projet ou vendez votre bien en toute sécurité avec notre accompagnement expert.",
    color: "bg-primary",
  },
  {
    icon: MapPin,
    title: "Aménagement Foncier",
    description:
      "Lotissement et viabilisation de terrains pour des projets résidentiels et commerciaux de qualité.",
    color: "bg-[#1A1A1A]",
  },
  {
    icon: Hammer,
    title: "Construction",
    description:
      "De la conception à la réalisation, nous construisons vos rêves avec expertise et professionnalisme.",
    color: "bg-primary",
  },
  {
    icon: FileCheck,
    title: "Suivi de Dossier",
    description:
      "Accompagnement complet dans toutes vos démarches administratives et juridiques immobilières.",
    color: "bg-[#808080]",
  },
  {
    icon: Truck,
    title: "Location d'Engins",
    description:
      "Mise à disposition d&apos;engins de chantier modernes pour tous vos travaux de construction.",
    color: "bg-secondary",
  },
  {
    icon: Key,
    title: "Gestion Immobilière",
    description:
      "Prise en charge complète de la gestion de vos biens immobiliers pour une tranquillité d&apos;esprit totale.",
    color: "bg-[#1A1A1A]",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
            Des solutions complètes pour vos projets immobiliers
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SILCI-IMMOBILIER vous accompagne à chaque étape de vos projets avec expertise
            et professionnalisme depuis 2021.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group h-full p-8 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
