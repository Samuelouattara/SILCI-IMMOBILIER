"use client";

import { motion } from "framer-motion";
import { ArrowDown, Building2, MapPin, Hammer, Truck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Animated Shapes */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-3xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-secondary blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <svg viewBox="0 0 200 100" className="h-24 md:h-32 w-auto">
              <motion.ellipse
                initial={{ cy: -20, opacity: 0 }}
                animate={{ cy: 15, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                cx="45" cy="15" rx="10" ry="10" fill="#F26522"
              />
              <motion.ellipse
                initial={{ cy: -20, opacity: 0 }}
                animate={{ cy: 15, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                cx="100" cy="15" rx="10" ry="10" fill="#F26522"
              />
              <motion.ellipse
                initial={{ cy: -20, opacity: 0 }}
                animate={{ cy: 15, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                cx="155" cy="15" rx="10" ry="10" fill="#F26522"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                d="M20 85 L45 35 L70 85"
                stroke="#8B1538"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                d="M75 85 L100 35 L125 85"
                stroke="#FFFFFF"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                d="M130 85 L155 35 L180 85"
                stroke="#808080"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
          >
            SILCI-IMMOBILIER
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl text-secondary font-medium italic"
          >
            La Crédibilité notre quotidien
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Votre partenaire de confiance pour tous vos projets immobiliers en Côte d&apos;Ivoire.
            Achat, vente de terrain, aménagement foncier et construction.
          </motion.p>

          {/* Service Pills */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: Building2, text: "Vente de Terrain" },
              { icon: MapPin, text: "Aménagement Foncier" },
              { icon: Hammer, text: "Construction" },
              { icon: Truck, text: "Location d'Engins" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <item.icon className="h-4 w-4 text-secondary" />
                <span className="text-sm text-white/90">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              Découvrir nos services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-md font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Nous contacter
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-sm">Défiler</span>
            <ArrowDown className="h-5 w-5 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
