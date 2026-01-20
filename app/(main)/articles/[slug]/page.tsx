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

        <h1 className="text-4xl font-bold mb-4 text-teal">
          {article.title}
        </h1>

        <p className="text-xl opacity-80 mb-8">
          {article.description}
        </p>

        {article.image && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none
            prose-headings:text-2xl prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-teal prose-h2:font-bold prose-h2:border-b-2 prose-h2:border-teal/50 prose-h2:pb-3
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold prose-h3:text-white
            prose-p:text-opacity-90 prose-p:leading-relaxed prose-p:text-base prose-p:mb-4
            prose-ul:space-y-3 prose-ul:mt-4 prose-ul:ml-6 prose-ul:mb-6
            prose-ol:space-y-3 prose-ol:mt-4 prose-ol:ml-6 prose-ol:mb-6
            prose-li:marker:text-teal prose-li:text-base prose-li:mb-2
            prose-strong:font-semibold prose-strong:text-white
            prose-a:text-teal prose-a:no-underline hover:prose-a:underline"
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
