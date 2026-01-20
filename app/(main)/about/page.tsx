"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GlassCard } from "@/components/ui/GlassCard";

export default function AboutPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const sections = contentRef.current.querySelectorAll(".animate-section");
      gsap.fromTo(
        sections,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        },
      );
    }
  }, []);

  return (
    <div ref={contentRef} className="space-y-8 max-w-4xl mx-auto">
      <section className="animate-section">
        <GlassCard>
          <h1 className="text-4xl font-bold mb-4 text-teal">
            À Propos de WICEN
          </h1>
          <p className="text-lg opacity-80">
            Building a better world, one student at a time.
          </p>
        </GlassCard>
      </section>

      <section className="animate-section">
        <GlassCard>
          <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
          <p className="opacity-80 mb-4">
            WICEN est une plateforme éducative dédiée aux étudiants en médecine
            au Maroc. Notre objectif est de faciliter l&apos;accès aux
            ressources pédagogiques et de créer une communauté
            d&apos;apprentissage solidaire.
          </p>
          <p className="opacity-80">
            Nous croyons que chaque étudiant mérite d&apos;avoir accès à des
            matériaux de qualité pour réussir ses études et devenir un
            professionnel de santé compétent et bienveillant.
          </p>
        </GlassCard>
      </section>

      <section className="animate-section">
        <GlassCard>
          <h2 className="text-2xl font-bold mb-4">Ce que nous offrons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold mb-2">📚 Cours Organisés</h3>
              <p className="text-sm opacity-80">
                Accédez à des cours structurés pour chaque année d&apos;étude
                médicale.
              </p>
            </div>
            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold mb-2">📝 Articles Éducatifs</h3>
              <p className="text-sm opacity-80">
                Des articles sur des sujets médicaux, techniques
                d&apos;apprentissage et bien-être.
              </p>
            </div>
            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold mb-2">🎯 Ressources Internat</h3>
              <p className="text-sm opacity-80">
                Préparez-vous efficacement au concours de l&apos;internat.
              </p>
            </div>
            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold mb-2">💡 Support Étudiant</h3>
              <p className="text-sm opacity-80">
                Conseils pour réussir vos études et maintenir votre équilibre.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="animate-section">
        <GlassCard>
          <h2 className="text-2xl font-bold mb-4">Medoclass-Oujda</h2>
          <p className="opacity-80 mb-4">
            Medoclass-Oujda est notre section dédiée aux cours organisés par
            année. Vous y trouverez des ressources pour chaque année du cursus
            médical, de la première année jusqu&apos;à l&apos;internat.
          </p>
          <p className="opacity-80">
            Chaque module contient des liens vers des ressources externes,
            principalement sur Google Drive, où vous pouvez accéder aux cours
            complets, supports PDF et autres matériaux pédagogiques.
          </p>
        </GlassCard>
      </section>

      <section className="animate-section">
        <GlassCard>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="opacity-80">
            Nous sommes toujours ouverts aux suggestions et collaborations.
            N&apos;hésitez pas à nous contacter pour améliorer cette plateforme.
          </p>
        </GlassCard>
      </section>
    </div>
  );
}
