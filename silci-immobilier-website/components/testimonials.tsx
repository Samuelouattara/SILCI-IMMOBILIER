"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amadou K.",
    role: "Propriétaire",
    content: "Grâce à SILCI-IMMOBILIER, j'ai pu acquérir un terrain sécurisé à Grand-Bassam. Leur professionnalisme et leur transparence m'ont convaincu. Je recommande vivement!",
    location: "Abidjan",
  },
  {
    name: "Marie-Claire D.",
    role: "Investisseur",
    content: "L'équipe de SILCI m'a accompagné dans tout le processus d'achat et de lotissement. Un service irréprochable et des conseils précieux.",
    location: "Grand-Bassam",
  },
  {
    name: "Jean-Paul T.",
    role: "Entrepreneur",
    content: "La location d'engins chez SILCI est un vrai plus pour nos chantiers. Matériel de qualité et service réactif. Partenaire de confiance!",
    location: "Bassam",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
            Ce que disent nos clients
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre plus grande fierté et la preuve de notre engagement quotidien.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow"
              >
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
