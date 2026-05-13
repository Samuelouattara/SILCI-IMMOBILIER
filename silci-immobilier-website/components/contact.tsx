"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    const mailtoLink = `mailto:silci0immobilier@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Nom: ${formState.name}\nEmail: ${formState.email}\nTéléphone: ${formState.phone}\n\nMessage:\n${formState.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+225 27 24 32 45 38", "+225 07 97 88 88 61"],
      action: "tel:+22527243245 38",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["silci0immobilier@gmail.com"],
      action: "mailto:silci0immobilier@gmail.com",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Mockey-Ville, Grand-Bassam", "Côte d'Ivoire"],
      action: "https://maps.google.com/?q=Grand-Bassam,Côte+d'Ivoire",
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven: 8h - 18h", "Sam: 9h - 14h"],
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Contact
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
            Parlons de votre projet
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vous avez un projet immobilier? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {item.action ? (
                  <a
                    href={item.action}
                    target={item.action.startsWith("http") ? "_blank" : undefined}
                    rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      {item.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      {item.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* WhatsApp Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              href="https://wa.me/22507978888 61"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Discuter sur WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Achat de terrain">Achat de terrain</option>
                    <option value="Vente de terrain">Vente de terrain</option>
                    <option value="Construction">Construction</option>
                    <option value="Aménagement foncier">Aménagement foncier</option>
                    <option value="Location d'engins">Location d&apos;engins</option>
                    <option value="Autre">Autre demande</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none text-foreground"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-6 w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Send className="h-5 w-5" />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
