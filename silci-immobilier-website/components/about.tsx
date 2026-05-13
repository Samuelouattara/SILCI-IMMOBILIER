"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Award, Clock } from "lucide-react";

const stats = [
  { value: "5M", label: "Capital Social (FCFA)", icon: Shield },
  { value: "99", label: "Ans d'immatriculation", icon: Clock },
  { value: "2021", label: "Année de création", icon: Award },
  { value: "100%", label: "Satisfaction client", icon: Users },
];

const values = [
  {
    title: "Crédibilité",
    description: "Notre parole est notre engagement. Nous honorons chaque promesse faite à nos clients.",
  },
  {
    title: "Transparence",
    description: "Des transactions claires et documentées pour une confiance mutuelle durable.",
  },
  {
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, du plus modeste au plus ambitieux.",
  },
  {
    title: "Accompagnement",
    description: "Un suivi personnalisé à chaque étape pour garantir votre satisfaction.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-24 md:py-32 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">
              À Propos de nous
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
              SILCI-IMMOBILIER, votre partenaire de confiance
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">SOCIÉTÉ IMMOBILIÈRE DE LOTISSEMENT ET CONSTRUCTION DE CÔTE D&apos;IVOIRE</strong> (S.I.L.C.I), 
                fondée en décembre 2021, est une SARL basée à Grand-Bassam, dans le quartier Mockey-Ville.
              </p>
              <p>
                Notre mission est de vous accompagner dans tous vos projets immobiliers avec 
                professionnalisme et intégrité. Notre slogan &quot;La Crédibilité notre quotidien&quot; 
                reflète notre engagement envers l&apos;excellence et la satisfaction de nos clients.
              </p>
              <p>
                Dirigée par M. KOUADIO YAO SYLVAIN, notre entreprise met son expertise au service 
                de vos ambitions, qu&apos;il s&apos;agisse d&apos;acquisition de terrain, de construction 
                ou d&apos;aménagement foncier.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-4 bg-card rounded-lg border border-border"
                >
                  <h4 className="font-semibold text-foreground">{value.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-primary/5 rounded-2xl -rotate-3" />
            <div className="absolute inset-0 bg-secondary/5 rounded-2xl rotate-3" />
            
            <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border shadow-xl">
              <div className="flex justify-center mb-10">
                <svg viewBox="0 0 200 100" className="h-20 md:h-24 w-auto">
                  <ellipse cx="45" cy="15" rx="10" ry="10" fill="#F26522" />
                  <ellipse cx="100" cy="15" rx="10" ry="10" fill="#F26522" />
                  <ellipse cx="155" cy="15" rx="10" ry="10" fill="#F26522" />
                  <path d="M20 85 L45 35 L70 85" stroke="#8B1538" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M75 85 L100 35 L125 85" stroke="#1A1A1A" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M130 85 L155 35 L180 85" stroke="#808080" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-4"
                  >
                    <stat.icon className="h-6 w-6 mx-auto mb-3 text-primary" />
                    <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">NRCCM:</span> N°CI-GRDBASSAM-2021-B-12398
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">N° CC:</span> 22 42 777 L
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
