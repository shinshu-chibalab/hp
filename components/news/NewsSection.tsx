import Link from "next/link";

import { NewsCard } from "@/components/news/NewsCard";



type News = {

  slug: string;

  title: string;

  date: string;

  thumbnail: string;

};



type Props = {

  newsList: News[];

  title?: string;

  limit?: number;

  showMoreButton?: boolean;

};



export function NewsSection({

  newsList,

  title = "News",

  limit,

  showMoreButton = false,

}: Props) {



  /*
    limit が指定されていれば
    表示件数を制限
  */

  const displayedNews =

    limit
      ? newsList.slice(0, limit)
      : newsList;



  return (

    <section className="
      max-w-7xl
      mx-auto
      px-6
      py-28
    ">

      {/* title */}
      <h2 className="
        text-4xl
        md:text-5xl
        font-bold
        text-center
        mb-16
      ">

        {title}

      </h2>



      {/* news cards */}
      <div className="
        flex
        flex-col
        gap-8
      ">

        {displayedNews.map(news => (

          <NewsCard
            key={news.slug}
            slug={news.slug}
            title={news.title}
            date={news.date}
            thumbnail={news.thumbnail}
          />

        ))}

      </div>



      {/* more button */}
      {showMoreButton && (

        <div className="
          text-center
          mt-14
        ">

          <Link
            href="/research"
            className="
              inline-block
              px-8
              py-4

              rounded-full

              border-2
              border-orange-400

              bg-white/70
              backdrop-blur-sm

              text-black
              text-lg
              font-semibold

              shadow-md

              hover:shadow-xl

              transition
              duration-300
            "
          >

            すべての研究を見る

          </Link>

        </div>

      )}

    </section>

  );

}