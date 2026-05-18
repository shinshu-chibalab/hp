import Link from "next/link";

type Props = {

  slug: string;

  title: string;

  thumbnail: string;

  summary: string;

};

export function ResearchCard({
  slug,
  title,
  thumbnail,
  summary,
}: Props) {

  return (

    <Link href={`/research/${slug}`}>

      <div className="
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        transition
        bg-white
      ">

        <img
          src={thumbnail}
          alt={title}
          className="
            w-full
            h-52
            object-cover
          "
        />

        <div className="p-6">

          <h3 className="
            text-2xl
            font-bold
            mb-3
          ">

            {title}

          </h3>

          <p className="
            text-gray-600
          ">

            {summary}

          </p>

        </div>

      </div>

    </Link>

  );

}