type Props = {

  month: string;

  title: string;

  description: string;

};

export function EventItem({
  month,
  title,
  description,
}: Props) {

  return (

    <div className="
      relative
      pl-10
      pb-12
      border-l-2
      border-gray-300
    ">

      {/* circle */}
      <div className="
        absolute
        -left-[11px]
        top-1
        w-5
        h-5
        rounded-full
        bg-blue-500
      " />



      {/* month */}
      <div className="
        text-blue-600
        font-bold
        text-lg
        mb-2
      ">

        {month}

      </div>



      {/* title */}
      <h3 className="
        text-2xl
        font-semibold
        mb-3
      ">

        {title}

      </h3>



      {/* description */}
      <p className="
        text-gray-700
        leading-8
      ">

        {description}

      </p>

    </div>

  );

}