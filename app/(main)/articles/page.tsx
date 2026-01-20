"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArticleCard } from "@/components/features/ArticleCard";
import { articles } from "@/lib/data/articles";

export default function ArticlesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".article-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
      );
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-teal">
          Articles
        </h1>
        <p className="text-lg opacity-80">
          Découvrez nos articles sur la médecine, l&apos;apprentissage et le
          bien-être étudiant
        </p>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <ArticleCard
              title={article.title}
              slug={article.slug}
              description={article.description}
              date={article.date}
              category={article.category}
              image={article.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
