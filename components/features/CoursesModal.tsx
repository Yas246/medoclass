"use client";

import { useEffect } from "react";

interface CourseLink {
  title: string;
  url: string;
  year?: string;
}

interface CoursesModalProps {
  isOpen: boolean;
  onClose: () => void;
  moduleName: string;
  courses: CourseLink[];
}

export function CoursesModal({
  isOpen,
  onClose,
  moduleName,
  courses,
}: CoursesModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    // Cleanup function pour restaurer l'overflow quand la modal se ferme
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative glass rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-teal-500/20">
          <div>
            <h2 className="text-2xl font-bold text-teal">{moduleName}</h2>
            <p className="text-sm opacity-70 mt-1">
              {courses.length} cours disponible{courses.length > 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-teal-500/20 rounded-lg transition-colors text-teal hover:text-teal-700"
            aria-label="Fermer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Courses List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 gap-3">
            {courses.map((course, idx) => (
              <a
                key={idx}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-gradient-to-r from-teal-500/10 to-teal-500/5 hover:from-teal-500/20 hover:to-teal-500/10 rounded-xl transition-all duration-200 hover:scale-[1.02] border border-teal-500/20"
              >
                <div className="flex-1">
                  <p className="font-semibold text-teal group-hover:text-teal-700">
                    {course.title}
                  </p>
                  {course.year && (
                    <p className="text-xs text-teal/70 mt-1">
                      Année {course.year}
                    </p>
                  )}
                </div>
                <svg
                  className="w-5 h-5 text-teal opacity-0 group-hover:opacity-100 transition-opacity"
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

        {/* Footer */}
        <div className="p-4 border-t border-teal-500/20 bg-teal-500/5">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-coral-500 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
