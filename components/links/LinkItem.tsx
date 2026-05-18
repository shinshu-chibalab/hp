import Link from "next/link";



type Props = {

  title: string;

  description?: string;

  url: string;

};



export function LinkItem({

  title,

  description,

  url,

}: Props) {

  return (

    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        border-b
        border-gray-200
        py-6
        hover:bg-gray-50
        transition
      "
    >

      <div className="
        text-2xl
        font-semibold
        mb-2
      ">

        {title}

      </div>



      {description && (

        <div className="
          text-gray-600
        ">

          {description}

        </div>

      )}

    </a>

  );

}