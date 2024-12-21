'use client'

export default function Articles() {
  const articles = [
    {
      title: "Article Title",
      description: "Brief description of the article...",
      date: "2024-01-01",
      link: "https://yourblog.com/article",
    },
    // Add more articles
  ];

  return (
    <section id="articles" className="py-20">
      <h2 className="text-3xl font-bold mb-10">Articles</h2>
      <div className="grid gap-8">
        {articles.map((article, index) => (
          <article key={index} className="border rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">{article.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {article.description}
            </p>
            <time className="text-sm text-gray-500">{article.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
} 