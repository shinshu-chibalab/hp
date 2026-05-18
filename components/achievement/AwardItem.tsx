type Props = {

  date: string;

  title: string;

  description: string;

  link: string;

};



export function AwardItem({

  date,

  title,

  description,

  link,

}: Props) {

  return (

    <div className="
      border-b
      border-gray-200
      py-8
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



      {/* description */}
      <p className="
        text-gray-700
        leading-8
        mb-5
      ">

        {description}

      </p>



      {/* link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-blue-600
          underline
        "
      >

        詳細を見る

      </a>

    </div>

  );

}