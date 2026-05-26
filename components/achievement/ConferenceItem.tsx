type Props = {

  date: string;

  conference: string;

  address: string;

  link: string;

};



export function
ConferenceItem({

  date,

  conference,

  address,

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



      {/* conference */}
      <h3 className="
        text-2xl
        font-semibold
        mb-3
      ">

        {conference}

      </h3>



      {/* address */}
      <div className="
        text-gray-700
        mb-4
      ">

        {address}

      </div>



      {/* link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-blue-600
          underline
          hover:!text-orange-500
        "
      >

        Conference Link

      </a>

    </div>

  );

}