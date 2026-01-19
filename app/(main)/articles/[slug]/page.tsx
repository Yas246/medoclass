import { notFound } from 'next/navigation'
import { articles } from '@/lib/data/articles'
import { Badge } from '@/components/ui/Badge'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto">
      <div className="glass rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <Badge>{article.category}</Badge>
          <span className="text-sm opacity-60">{article.date}</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {article.title}
        </h1>

        <p className="text-xl opacity-80 mb-8">
          {article.description}
        </p>

        <div
          className="prose prose-lg max-w-none
            prose-headings:text-2xl prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
            prose-p:text-opacity-80 prose-p:leading-relaxed
            prose-ul:space-y-2 prose-ul:mt-4
            prose-li:marker:text-blue-600
            prose-strong:font-semibold"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-60">Temps de lecture</p>
              <p className="font-semibold">{article.readTime}</p>
            </div>
            <div>
              <p className="text-sm opacity-60">Catégorie</p>
              <p className="font-semibold">{article.category}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Articles similaires</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles
            .filter((a) => a.id !== article.id)
            .slice(0, 3)
            .map((similarArticle) => (
              <a
                key={similarArticle.id}
                href={`/articles/${similarArticle.slug}`}
                className="block p-4 glass rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <h4 className="font-semibold mb-2 line-clamp-2">{similarArticle.title}</h4>
                <p className="text-sm opacity-80 line-clamp-2">{similarArticle.description}</p>
              </a>
            ))}
        </div>
      </div>
    </article>
  )
}
