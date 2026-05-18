type Props = {

  title: string;

  description: string;

};



export function AboutSection({
  title,
  description,
}: Props) {

  return (

    <section className="
      max-w-5xl
      mx-auto
      px-6
      py-28
      text-center
    ">

      {/* title */}
      <h2 className="
        text-4xl
        md:text-5xl
        font-bold
        mb-12
      ">

        {title}

      </h2>



      {/* description */}
      <p className="
        text-lg
        md:text-xl
        leading-10
        text-gray-700
        whitespace-pre-line
      ">

        {description}

      </p>

    </section>

  );

}