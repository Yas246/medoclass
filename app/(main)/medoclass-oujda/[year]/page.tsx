"use client";

import { useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { gsap } from "gsap";
import { ResourceLink } from "@/components/features/ResourceLink";
import { CoursesModal } from "@/components/features/CoursesModal";
import { yearsData } from "@/lib/data/years-content";

interface YearPageProps {
  params: {
    year: string;
  };
}

const yearTitles: Record<string, string> = {
  "1ere-annee": "1ère Année",
  "2eme-annee": "2ème Année",
  "3eme-annee": "3ème Année",
  "4eme-annee": "4ème Année",
  "5eme-annee": "5ème Année",
  internat: "Internat",
};

interface ModuleData {
  id: string;
  name: string;
  description?: string;
  driveUrl?: string;
  courses?: Array<{ title: string; url: string; year?: string }>;
  exams?: Array<{ year: string; title: string; url: string }>;
  corrections?: Array<{ year: string; title: string; url: string }>;
}

// ModuleAccordion Component for mobile
function ModuleAccordion({
  module,
  onCoursesClick,
}: {
  module: ModuleData;
  onCoursesClick: (module: ModuleData) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCoursesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCoursesClick(module);
  };

  return (
    <div className="glass rounded-lg overflow-hidden">
      {/* Header - Always visible */}
      <div className="w-full p-4 flex items-center justify-between text-left">
        <div
          className="flex-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="font-semibold text-lg">{module.name}</h3>
          {module.description && (
            <p className="text-xs opacity-70 mt-1 line-clamp-1">
              {module.description}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-2 ml-4">
          {/* Bouton Cours - toujours visible */}
          {(module.driveUrl || module.courses) && (
            <button
              onClick={handleCoursesClick}
              className="hidden sm:inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-teal-500 to-coral-500 text-white rounded-lg hover:opacity-90 transition-opacity text-xs font-semibold"
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Cours
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-teal-500/10 rounded-lg transition-colors"
          >
            <svg
              className={`w-5 h-5 transition-transform duration-300 text-teal ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Collapsible Content */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pt-0 border-t border-teal-500/20">
          {/* Mobile Course Button */}
          {(module.driveUrl || module.courses) && (
            <div className="sm:hidden mb-4">
              <button
                onClick={handleCoursesClick}
                className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-teal-500 to-coral-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Accéder aux cours
              </button>
            </div>
          )}

          {/* Exams Section */}
          {module.exams && module.exams.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-3 flex items-center text-teal">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Examens ({module.exams.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {module.exams.map((exam, idx) => (
                  <a
                    key={idx}
                    href={exam.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 bg-teal-500/10 hover:bg-teal-500/20 rounded-lg transition-colors text-sm group"
                  >
                    <span className="font-medium">{exam.year}</span>
                    <span className="text-xs opacity-70">
                      {exam.title.trim()}
                    </span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Corrections Section */}
          {module.corrections && module.corrections.length > 0 && (
            <div>
              <h4 className="font-semibold text-sm mb-3 flex items-center"
                  style={{ color: "var(--accent-primary)" }}>
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Corrections ({module.corrections.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {module.corrections.map((correction, idx) => (
                  <a
                    key={idx}
                    href={correction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm group"
                    style={{
                      backgroundColor: "rgba(255, 107, 107, 0.1)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(255, 107, 107, 0.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(255, 107, 107, 0.1)")
                    }
                  >
                    <span className="font-medium">{correction.year}</span>
                    <span className="text-xs opacity-70">
                      {correction.title.trim()}
                    </span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function YearPage({ params }: YearPageProps) {
  const { year } = params;
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const sections =
        containerRef.current.querySelectorAll(".animate-section");
      gsap.fromTo(
        sections,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
        },
      );
    }
  }, [year]);

  if (!yearTitles[year]) {
    notFound();
  }

  const yearInfo = yearsData[year];

  const handleCoursesClick = (module: ModuleData) => {
    if (module.courses && module.courses.length > 0) {
      // Ouvrir le modal si plusieurs cours
      setSelectedModule(module);
    } else if (module.driveUrl) {
      // Ouvrir le lien directement si un seul cours
      window.open(module.driveUrl, '_blank');
    }
  };

  return (
    <div ref={containerRef} className="space-y-8">
      <section className="animate-section">
        <div className="glass rounded-2xl p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-teal">
            {yearTitles[year]}
          </h1>
          <p className="text-lg opacity-80">
            {yearInfo?.description ||
              `Cours et ressources pour la ${yearTitles[year]}`}
          </p>
        </div>
      </section>

      <section className="animate-section">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">Modules & Ressources</h2>
          <div className="space-y-4">
            {yearInfo?.modules.map((module) => (
              <ModuleAccordion
                key={module.id}
                module={module}
                onCoursesClick={handleCoursesClick}
              />
            ))}
          </div>
        </div>
      </section>

      {yearInfo?.resources && yearInfo.resources.length > 0 && (
        <section className="animate-section">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Ressources Supplémentaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {yearInfo.resources.map((resource) => (
                <ResourceLink
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  driveUrl={resource.url}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="animate-section">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Informations Pratiques</h2>
          <div className="space-y-4">
            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold mb-2">📚 Méthodologie</h3>
              <p className="text-sm opacity-80">
                Organisez votre temps de révision et utilisez les ressources
                disponibles de manière efficace. N&apos;hésitez pas à consulter
                plusieurs sources pour chaque module.
              </p>
            </div>
            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold mb-2">💡 Conseils</h3>
              <p className="text-sm opacity-80">
                Participer activement aux cours, prendre des notes structurées,
                et revoir régulièrement les matières sont les clés de la
                réussite.
              </p>
            </div>
            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold mb-2">🤝 Support</h3>
              <p className="text-sm opacity-80">
                Travaillez en groupe, partagez vos ressources et n&apos;hésitez
                pas à demander de l&apos;aide à vos camarades ou enseignants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal des cours - en dehors des sections pour être en premier plan */}
      {selectedModule && selectedModule.courses && selectedModule.courses.length > 0 && (
        <CoursesModal
          isOpen={!!selectedModule}
          onClose={() => setSelectedModule(null)}
          moduleName={selectedModule.name}
          courses={selectedModule.courses}
        />
      )}
    </div>
  );
}
