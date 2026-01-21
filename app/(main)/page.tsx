"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { GlassCard } from "@/components/ui/GlassCard";
import { YearCard } from "@/components/features/YearCard";
import { ArticleCard } from "@/components/features/ArticleCard";
import { articles } from "@/lib/data/articles";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const yearsGridRef = useRef<HTMLDivElement>(null);
  const articlesSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      );
    }

    // Years grid stagger animation
    if (yearsGridRef.current) {
      const cards = yearsGridRef.current.children;
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
          delay: 0.2,
        },
      );
    }

    // Articles section animation
    if (articlesSectionRef.current) {
      gsap.fromTo(
        articlesSectionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.8 },
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
      description: "Physiologie et pathologie",
      href: "/medoclass-oujda/2eme-annee",
    },
    {
      year: 3,
      title: "3ème Année",
      description: "Sémiologie et clinique",
      href: "/medoclass-oujda/3eme-annee",
    },
    {
      year: 4,
      title: "4ème Année",
      description: "Médecine interne et chirurgie",
      href: "/medoclass-oujda/4eme-annee",
    },
    {
      year: 5,
      title: "5ème Année",
      description: "Spécialités médicales",
      href: "/medoclass-oujda/5eme-annee",
    },
  ];

  const recentArticles = articles.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section - Bold Organic Design */}
      <section ref={heroRef} className="relative py-16">
        {/* Decorative elements */}
        <div className="absolute top-0 left-10 w-32 h-32 bg-teal-500/10 rounded-organic animate-float blur-3xl" />
        <div
          className="absolute bottom-0 right-10 w-40 h-40 bg-coral-500/10 rounded-organic animate-float blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-coral-500/5 animate-pulse-slow" />

          <div className="relative z-10">
            {/* Main heading with organic shape background */}
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-8 bg-gradient-to-r from-teal-500/20 to-coral-500/20 rounded-organic animate-morph blur-2xl" />
              <h1 className="relative text-6xl md:text-7xl font-display font-bold gradient-text leading-tight">
                WICEN
              </h1>
            </div>

            {/* Badge - centered below title */}
            <div className="flex justify-center mb-6">
              <div className="glass px-6 py-2 rounded-full border border-teal-500/30 inline-block">
                <span className="text-sm font-body font-semibold text-teal">
                  🧬 Medical Education Platform
                </span>
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-body font-semibold mb-4 opacity-90">
              Building a better world,
              <span className="text-teal"> one student </span>
              at a time.
            </p>

            <p className="text-lg opacity-70 max-w-3xl mx-auto mb-8 font-body leading-relaxed">
              Plateforme éducative de nouvelle génération dédiée aux étudiants
              en médecine.
              <br />
              Explorez nos cours, articles et ressources pour transformer votre
              parcours médical.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/medoclass-oujda" className="btn-primary">
                Explorer les Cours
                <svg
                  className="inline-block w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/articles"
                className="glass px-8 py-4 rounded-xl font-body font-semibold hover:bg-teal-500/20 transition-all duration-300 hover:scale-105"
              >
                Découvrir les Articles
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-teal">
                  5
                </div>
                <div className="text-sm opacity-70 font-body">Années</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-coral">
                  7+
                </div>
                <div className="text-sm opacity-70 font-body">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-yellow">
                  ∞
                </div>
                <div className="text-sm opacity-70 font-body">Ressources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Years Grid - Modern Title */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="glass px-6 py-2 rounded-full border border-coral-500/30">
              <span className="text-sm font-body font-semibold text-coral">
                📚 Medoclass-Oujda
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Parcours Médical
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto font-body">
            Cours organisés par année d&apos;étude. Chaque étape de votre
            parcours médical, structurée et accessible.
          </p>
        </div>
        <div
          ref={yearsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {years.map((yearData) => (
            <YearCard key={yearData.year} {...yearData} />
          ))}
          <YearCard
            year={6}
            title="Internat"
            description="Préparation au concours"
            href="/medoclass-oujda/internat"
          />
        </div>
      </section>

      {/* Recent Articles - Enhanced Design */}
      <section ref={articlesSectionRef}>
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="glass px-6 py-2 rounded-full border border-teal-500/30">
              <span className="text-sm font-body font-semibold text-teal">
                ✨ Savoir & Bien-être
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Articles Récents
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto font-body">
            Découvrez nos derniers articles sur la médecine, le bien-être
            étudiant et les techniques d&apos;apprentissage
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              slug={article.slug}
              description={article.description}
              date={article.date}
              category={article.category}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-flex items-center glass px-8 py-4 rounded-2xl font-body font-semibold hover:bg-teal-500/20 transition-all duration-300 hover:scale-105 group"
          >
            Voir tous les articles
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Link href="/about">
          <GlassCard className="h-full">
            <h3 className="text-2xl font-bold mb-3">À Propos de WICEN</h3>
            <p className="opacity-80 mb-4">
              Découvrez notre mission et notre engagement envers les étudiants
              en médecine au Maroc.
            </p>
            <span className="text-blue-600 hover:underline">
              En savoir plus →
            </span>
          </GlassCard>
        </Link>
        <Link href="/medoclass-oujda">
          <GlassCard className="h-full">
            <h3 className="text-2xl font-bold mb-3">Ressources Médicales</h3>
            <p className="opacity-80 mb-4">
              Accédez à une collection complète de cours, articles et supports
              pédagogiques pour toutes les années d&apos;étude.
            </p>
            <span className="text-blue-600 hover:underline">
              Explorer les cours →
            </span>
          </GlassCard>
        </Link>
      </section>
    </div>
  );
}
