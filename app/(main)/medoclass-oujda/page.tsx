"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { YearCard } from "@/components/features/YearCard";

export default function MedoclassPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".year-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
      );
    }
  }, []);

  const years = [
    {
      year: 1,
      title: "1ère Année",
      description: "Fondamentaux des sciences médicales",
      href: "/medoclass-oujda/1ere-annee",
    },
    {
      year: 2,
      title: "2ème Année",
      description: "Physiologie et Sémiologie",
      href: "/medoclass-oujda/2eme-annee",
    },
    {
      year: 3,
      title: "3ème Année",
      description: "Pharmaco, Imagerie et Pathologies",
      href: "/medoclass-oujda/3eme-annee",
    },
    {
      year: 4,
      title: "4ème Année",
      description: "Pathologies Spécialisées",
      href: "/medoclass-oujda/4eme-annee",
    },
    {
      year: 5,
      title: "5ème Année",
      description: "Pathologies avancées et conduite pratique",
      href: "/medoclass-oujda/5eme-annee",
    },
    {
      year: 6,
      title: "Internat",
      description: "Préparation au concours",
      href: "/medoclass-oujda/internat",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-teal">
          Ressources Médicales
        </h1>
        <p className="text-lg text-teal/80 max-w-2xl mx-auto">
          Accédez à une collection complète de cours, articles et supports
          pédagogiques pour toutes les années d&apos;étude.
        </p>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {years.map((yearData) => (
          <div key={yearData.year} className="year-card">
            <YearCard {...yearData} />
          </div>
        ))}
      </div>
    </div>
  );
}
