import { AwardItem } from "@/components/achievement/AwardItem";



type Award = {

  date: string;

  title: string;

  description: string;

  link: string;

};



type Props = {

  awards: Award[];

};



export function AwardSection({
  awards,
}: Props) {

  return (

    <section className="
      max-w-5xl
      mx-auto
      px-6
      py-28
    ">

      {/* title */}
      <h2 className="
        text-4xl
        md:text-5xl
        font-bold
        mb-16
      ">

        Awards

      </h2>



      {/* awards */}
      <div>

        {awards.map(award => (

          <AwardItem
            key={
              award.date +
              award.title
            }
            date={award.date}
            title={award.title}
            description={
              award.description
            }
            link={award.link}
          />

        ))}

      </div>

    </section>

  );

}