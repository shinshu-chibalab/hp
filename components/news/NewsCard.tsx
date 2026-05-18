import Link from "next/link";

type Props = {

  slug: string;

  title: string;

  date: string;

  thumbnail: string;

};

export function NewsCard({
  slug,
  title,
  date,
  thumbnail,
}: Props) {

  return (

    <Link href={`/news/${slug}`}>

      <div className="
        flex
        gap-6
        p-4
        rounded-2xl
        shadow-md
        hover:shadow-xl
        transition
        bg-white
      ">

        <img
          src={thumbnail}
          alt={title}
          className="
            w-48
            h-32
            object-cover
            rounded-xl
          "
        />

        <div className="
          flex
          flex-col
          justify-center
        ">

          <div className="
            text-sm
            text-gray-500
            mb-2
          ">

            {date}

          </div>

          <div className="
            text-2xl
            font-semibold
          ">

            {title}

          </div>

        </div>

      </div>

    </Link>

  );

}