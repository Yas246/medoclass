export interface Article {
  id: number
  slug: string
  title: string
  description: string
  content: string
  date: string
  category: string
  readTime?: string
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'le-serment-d-hippocrate',
    title: 'Le Serment d\'Hippocrate',
    description: 'Le fondement éthique de la médecine à travers les âges',
    content: `
      <h2>Le Serment d'Hippocrate</h2>
      <p>Le Serment d'Hippocrate est un serment traditionnellement prêté par les médecins. Il est attribué à Hippocrate, le père de la médecine, qui vivait en Grèce antique au Ve siècle avant J.-C.</p>

      <h3>Historique</h3>
      <p>Ce serment marque l'origine de l'éthique médicale occidentale. Il établit les principes fondamentaux de la pratique médicale, incluant la bienveillance, le confidentiality et l'intégrité professionnelle.</p>

      <h3>Principes clés</h3>
      <ul>
        <li>Respect de la vie humaine</li>
        <li>Refus de causer du tort</li>
        <li>Respect de la confidentialité</li>
        <li>Transmission des connaissances</li>
        <li>Pratique médicale éthique</li>
      </ul>

      <h3>Relevance moderne</h3>
      <p>Aujourd'hui, le serment est encore prononcé lors des cérémonies de remise des diplômes médicaux dans de nombreux pays, symbolisant l'engagement des nouveaux médecins envers l'éthique professionnelle.</p>

      <p>Ce serment représente bien plus qu'une simple tradition : il est le pilier fondamental de la relation médecin-patient et de la confiance du public envers la profession médicale.</p>
    `,
    date: '2024-01-01',
    category: 'Éthique',
    readTime: '5 min',
  },
  {
    id: 2,
    slug: 'burnout',
    title: 'Le Burnout chez les étudiants en médecine',
    description: 'Comprendre et prévenir l\'épuisement professionnel durant les études médicales',
    content: `
      <h2>Le Burnout chez les étudiants en médecine</h2>

      <p>Le burn-out chez les étudiants en médecine résulte d'une accumulation de pression académique, émotionnelle et physique tout au long du cursus médical. Ce phénomène, de plus en plus répandu, mérite une attention particulière.</p>

      <h3>Signes du burnout</h3>
      <ul>
        <li>Épuisement émotionnel et physique</li>
        <li>Cynisme et détachement vis-à-vis des études</li>
        <li>Sentiment d'inefficacité personnelle</li>
        <li>Troubles du sommeil</li>
        <li>Anxiété et dépression</li>
      </ul>

      <h3>Causes principales</h3>
      <p>Les études de médecine sont connues pour être exigeantes : volume important de matière à assimiler, horaires chargés, stages hospitaliers intensifs, et pression constante de performance. Cette combinaison crée un environnement propice à l'épuisement.</p>

      <h3>Prévention</h3>
      <ul>
        <li>Maintenir un équilibre vie étude-vie personnelle</li>
        <li>Pratiquer une activité physique régulière</li>
        <li>Consacrer du temps aux loisirs et à la socialisation</li>
        <li>Ne pas hésiter à demander de l'aide</li>
        <li>Utiliser les ressources de support psychologique disponibles</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Il est essentiel de reconnaître les signes de burnout et d'agir rapidement. Votre santé mentale est aussi importante que votre réussite académique. Prenez soin de vous pour pouvoir prendre soin des autres.</p>
    `,
    date: '2024-01-15',
    category: 'Bien-être',
    readTime: '8 min',
  },
  {
    id: 3,
    slug: 'dopamine',
    title: 'La Dopamine : Comprendre le neurotransmetteur',
    description: 'Le rôle crucial de la dopamine dans le cerveau et son impact sur le comportement',
    content: `
      <h2>La Dopamine : Comprendre le neurotransmetteur</h2>

      <p>La dopamine est un neurotransmetteur essentiel qui joue un rôle crucial dans de nombreuses fonctions cérébrales, notamment la motivation, la récompense, le mouvement et la cognition.</p>

      <h3>Qu'est-ce que la dopamine?</h3>
      <p>La dopamine est une molécule chimique produite par le cerveau. Elle appartient à la famille des catécholamines et agit comme un neurotransmetteur, transmettant des signaux entre les neurones.</p>

      <h3>Fonctions principales</h3>
      <ul>
        <li><strong>Système de récompense :</strong> La dopamine est libérée lorsque nous anticipons ou recevons une récompense, créant une sensation de plaisir.</li>
        <li><strong>Motivation :</strong> Elle nous pousse à agir pour atteindre nos objectifs.</li>
        <li><strong>Mouvement :</strong> Essentielle pour le contrôle des mouvements volontaires.</li>
        <li><strong>Mémoire et apprentissage :</strong> Facilite la consolidation des souvenirs.</li>
        <li><strong>Attention et concentration :</strong> Améliore la focalisation cognitive.</li>
      </ul>

      <h3>Dopamine et études médicales</h3>
      <p>Pour les étudiants en médecine, comprendre la dopamine est essentiel car de nombreux médicaments et conditions neurologiques (comme la maladie de Parkinson) sont liés au système dopaminergique.</p>

      <h3>Conclusion</h3>
      <p>La dopamine est bien plus qu'un simple "messager chimique du plaisir". Elle est au cœur de notre motivation, de notre apprentissage et de notre capacité à nous mouvoir. Comprendre son fonctionnement nous aide à mieux appréhender le comportement humain et nombreuses pathologies.</p>
    `,
    date: '2024-02-01',
    category: 'Neuroscience',
    readTime: '6 min',
  },
  {
    id: 4,
    slug: 'techniques-memorisation',
    title: 'Techniques de Mémorisation pour les Étudiants',
    description: 'Méthodes efficaces pour retenir l\'information médicale',
    content: `
      <h2>Techniques de Mémorisation pour les Étudiants en Médecine</h2>

      <p>Le volume d'information à retenir durant les études de médecine est immense. Heureusement, il existe des techniques de mémorisation éprouvées pour optimiser votre apprentissage.</p>

      <h3>1. La répétition espacée</h3>
      <p>Cette méthode consiste à réviser l'information à intervalles croissants. Au lieu de "bourrer le crâne" une seule fois, révisez régulièrement : après 1 jour, 3 jours, 1 semaine, 2 semaines, etc. Cela consolide la mémoire à long terme.</p>

      <h3>2. Les mnémotechniques</h3>
      <p>Créez des acronymes, des rimes ou des phrases pour retenir des listes. Par exemple, pour les nerfs crâniens, utilisez des phrases mnémotechniques classiques.</p>

      <h3>3. La méthode Feynman</h3>
      <p>Essayez d'expliquer un concept complexe avec des mots simples, comme si vous l'enseigniez à un enfant. Si vous n'y arrivez pas, c'est que vous n'avez pas parfaitement compris le concept.</p>

      <h3>4. Les cartes mémo (Flashcards)</h3>
      <p>Utilisez des applications comme Anki pour créer des flashcards. Elles utilisent la répétition espacée automatiquement et sont excellentes pour les faits et définitions.</p>

      <h3>5. L'association d'images</h3>
      <p>Associez l'information à des images mentales vivantes et mémorables. Le cerveau retient mieux les images que le texte abstrait.</p>

      <h3>6. Le palais de mémoire</h3>
      <p>Visualisez un lieu que vous connaissez bien (votre chambre) et placez mentalement les informations à retenir à différents endroits. Parcourez ensuite ce lieu mentalement pour récupérer les informations.</p>

      <h3>Conseils pratiques</h3>
      <ul>
        <li>Étudiez dans un environnement calme</li>
        <li>Faites des pauses régulières (technique Pomodoro)</li>
        <li>Dormez suffisamment (le sommeil consolide la mémoire)</li>
        <li>Faites de l'exercice physique (améliore la cognition)</li>
        <li>Évitez la multitâche</li>
      </ul>

      <h3>Conclusion</h3>
      <p>La clé de la mémorisation efficace n'est pas de travailler plus dur, mais de travailler smarter. Expérimentez différentes techniques pour trouver celles qui fonctionnent le mieux pour vous.</p>
    `,
    date: '2024-02-15',
    category: 'Méthodologie',
    readTime: '7 min',
  },
]
