import {
  getResearchBySlug,
  getAllResearchSlugs,
} from "@/lib/research";

import { notFound }
  from "next/navigation";



/* =========================
   static generation
========================= */

export async function
generateStaticParams() {

  const slugs =
    await getAllResearchSlugs();

  return slugs.map(slug => ({
    slug,
  }));

}



/* =========================
   props
========================= */

type Props = {

  params: Promise<{
    slug: string;
  }>;

};



/* =========================
   page
========================= */

export default async function
ResearchDetailPage({
  params,
}: Props) {

  const { slug } =
    await params;

  try {

    const research =
      await getResearchBySlug(
        slug
      );

    return (

      <div className="
        max-w-5xl
        mx-auto
        px-6
        py-12
      ">

        {/* title */}
        <h1 className="
          text-5xl
          font-bold
          mb-8
        ">

          {research.title}

        </h1>



        {/* thumbnail */}
        <img
          src={research.thumbnail}
          alt={research.title}
          className="
            w-full
            rounded-2xl
            mb-12
            shadow-md
          "
        />



        {/* markdown contents */}
        <article
          className="
            prose
            prose-lg
            max-w-none
          "
          dangerouslySetInnerHTML={{
            __html:
              research.contentHtml,
          }}
        />

      </div>

    );

  } catch {

    notFound();

  }

}