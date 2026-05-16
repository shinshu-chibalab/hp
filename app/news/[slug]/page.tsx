import { notFound } from "next/navigation";

import { getNewsBySlug } from "@/lib/news";

type Props = {

  params: Promise<{
    slug: string;
  }>;

};

export default async function NewsDetailPage({
  params,
}: Props) {

  const { slug } = await params;

  try {

    const news =
      await getNewsBySlug(slug);

    return (

      <div className="
        max-w-4xl
        mx-auto
        px-6
        py-12
      ">

        {/* 日付 */}
        <div className="
          text-gray-500
          mb-4
        ">

          {news.date}

        </div>

        {/* タイトル */}
        <h1 className="
          text-4xl
          font-bold
          mb-8
        ">

          {news.title}

        </h1>

        {/* サムネイル */}
        <img
          src={news.thumbnail}
          alt={news.title}
          className="
            w-full
            rounded-2xl
            mb-10
          "
        />

        {/* Markdown本文 */}
        <article
          className="
            prose
            prose-lg
            max-w-none
          "
          dangerouslySetInnerHTML={{
            __html: news.contentHtml,
          }}
        />

      </div>

    );

  } catch {

    notFound();

  }

}