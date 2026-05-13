"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const marqueeItems = [
  "ACHAT DE TERRAIN",
  "VENTE DE TERRAIN",
  "AMÉNAGEMENT FONCIER",
  "LOTISSEMENT",
  "CONSTRUCTION",
  "SUIVI DE DOSSIER",
  "LOCATION D'ENGINS",
  "GESTION IMMOBILIÈRE",
];

export function Marquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-8 bg-primary overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="flex animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center shrink-0 px-8"
            >
              <span className="text-lg md:text-xl font-semibold text-primary-foreground whitespace-nowrap">
                {item}
              </span>
              <span className="ml-8 text-secondary">•</span>
            </div>
          ))}
        </div>
      </motion.div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
