import Link from "next/link";

import { ResearchCard } from "@/components/about/ResearchCard";

import {
  ResearchMeta,
} from "@/lib/research";



type Props = {

  researches: ResearchMeta[];

  title?: string;

  description?: string;

  limit?: number;

  showMoreButton?: boolean;

};



export function
ResearchSection({

  researches,

  title = "Research",

  description,

  limit,

  showMoreButton = false,

}: Props) {



  const displayedResearches =
    limit
      ? researches.slice(0, limit)
      : researches;



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
        mb-8
        text-center
      ">

        {title}

      </h2>



      {/* description */}
      {description && (

        <p className="
          text-lg
          text-gray-600
          leading-9
          whitespace-pre-line
          text-center
          max-w-4xl
          mx-auto
          mb-16
        ">

          {description}

        </p>

      )}



      {/* cards */}
      <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-10
      ">

        {displayedResearches.map(
          research => (

          <ResearchCard
            key={research.slug}
            slug={research.slug}
            title={research.title}
            thumbnail={research.thumbnail}
            summary={research.summary}
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
              bg-black
              text-white
              text-lg
              hover:bg-gray-800
              transition
            "
          >

            すべての研究を見る

          </Link>

        </div>

      )}

    </section>

  );

}