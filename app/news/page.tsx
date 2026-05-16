import { NewsCard } from "@/components/NewsCard";

import { getAllNews } from "@/lib/news";

export default async function NewsPage() {

  const newsList = await getAllNews();

  return (

    <div className="
      max-w-5xl
      mx-auto
      py-12
      px-6
    ">

      <h1 className="
        text-4xl
        font-bold
        mb-10
      ">

        ニュース

      </h1>

      <div className="
        flex
        flex-col
        gap-8
      ">

        {newsList.map(news => (

          <NewsCard
            key={news.slug}
            slug={news.slug}
            title={news.title}
            date={news.date}
            thumbnail={news.thumbnail}
          />

        ))}

      </div>

    </div>

  );

}