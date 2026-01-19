import Link from "next/link";

export function Footer() {
  return (
    <footer className="glass mx-4 mb-4 mt-8 rounded-2xl px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-coral-500 bg-clip-text text-transparent mb-4">
            WICEN
          </h3>
          <p className="text-sm opacity-80">
            Plateforme éducative pour les étudiants en médecine au Maroc
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Liens Rapides</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-teal transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className="hover:text-teal transition-colors"
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-teal transition-colors"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/medoclass-oujda"
                className="hover:text-teal transition-colors"
              >
                Medoclass-Oujda
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Légal</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>© 2026 WICEN</li>
            <li>Tous droits réservés</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
