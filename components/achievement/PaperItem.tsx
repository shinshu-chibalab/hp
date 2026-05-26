import Link from "next/link";



type Props = {

  slug: string;

  title: string;

  authors: string;

  journal: string;

  date: string;

};



export function PaperItem({

  slug,

  title,

  authors,

  journal,

  date,

}: Props) {

  return (

    <Link href={`/achievements/${slug}`}>

      <div className="
        border-b
        border-gray-200
        py-8
        hover:bg-gray-50
        transition
        cursor-pointer
      ">

        {/* date */}
        <div className="
          text-sm
          text-gray-500
          mb-3
        ">

          {date}

        </div>



        {/* title */}
        <h3 className="
          text-2xl
          font-semibold
          leading-relaxed
          mb-4
        ">

          {title}

        </h3>



        {/* authors */}
        <div className="
          text-gray-700
          mb-3
        ">

          {authors}

        </div>



        {/* journal */}
        <div className="
          text-gray-500
        ">

          {journal}

        </div>

      </div>

    </Link>

  );

}