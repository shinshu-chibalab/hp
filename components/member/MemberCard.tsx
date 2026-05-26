type Props = {

  member: {
    job: string;
    name: string;
    image: string;
    hobby: string;
    message: string;
  };

};

export function MemberCard({
  member,
}: Props) {

  return (

    <div className="
      bg-white
      rounded-3xl
      overflow-hidden

      border
      border-orange-100

      shadow-md

      transition
      duration-300
    ">

      {/* image */}
      <div className="
        w-full
        aspect-square
        overflow-hidden
      ">

        <img
          src={member.image}
          alt={member.name}
          className="
            w-full
            h-full
            object-cover

            hover:scale-105
            transition
            duration-500
          "
        />

      </div>



      {/* contents */}
      <div className="p-6">

        {/* name */}
        <h2 className="
          text-2xl
          font-bold
          mb-2
        ">

          {member.name}

        </h2>



        {/* job */}
        <div className="
          inline-block
          px-3
          py-1
          rounded-full

          bg-orange-100
          text-orange-700

          text-sm
          font-medium

          mb-5
        ">

          {member.job}

        </div>



        {/* hobby */}
        <div className="mb-4">

          <div className="
            text-sm
            text-gray-500
            mb-1
          ">

            趣味

          </div>

          <div className="
            text-gray-800
          ">

            {member.hobby}

          </div>

        </div>



        {/* message */}
        <div>

          <div className="
            text-sm
            text-gray-500
            mb-1
          ">

            一言

          </div>

          <p className="
            text-gray-700
            leading-7
          ">

            {member.message}

          </p>

        </div>

      </div>

    </div>

  );

}