type Props = {

  name: string;

  message: string;

};



export function MessageCard({
  name,
  message,
}: Props) {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-md
      p-8
      hover:shadow-xl
      transition
      h-full
    ">

      {/* message */}
      <p className="
        text-gray-700
        leading-8
        mb-6
      ">

        「{message}」

      </p>



      {/* name */}
      <div className="
        text-right
        text-gray-500
        font-semibold
      ">

        — {name}

      </div>

    </div>

  );

}