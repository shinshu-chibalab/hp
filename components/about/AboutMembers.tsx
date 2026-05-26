import Link from "next/link";



type Props = {

  description: string;

  link: string;

};



export function AboutMembers({

  description,

  link,

}: Props) {

  return (

    <section className="
      max-w-5xl
      mx-auto
      px-6
      py-24
    ">

      <div className="
        rounded-3xl
        p-12
        shadow-sm
      ">

        {/* title */}
        <h2 className="
          text-4xl
          font-bold
          mb-8
        ">

          Members

        </h2>



        {/* description */}
        <p className="
          text-lg
          leading-9
          text-gray-700
          mb-10
        ">

          {description}

        </p>



        {/* button */}
        <Link
          href={link}
          className="
            inline-block
            px-8
            py-4
            rounded-full
            border-2
            border-orange-400
            hover:shadow-xl
            transition
          "
        >

          メンバー一覧を見る

        </Link>

      </div>

    </section>

  );

}