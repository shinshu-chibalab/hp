import { ConferenceItem } from "@/components/achievement/ConferenceItem";


type Conference = {

  date: string;

  conference: string;

  address: string;

  link: string;

};



type Props = {

  conferences: Conference[];

};



export function
ConferenceSection({
  conferences,
}: Props) {

  return (

    <section className="
      max-w-7xl
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

        Conferences

      </h2>



      {/* list */}
      <div>

        {conferences.map(conference => (

          <ConferenceItem
            key={
              conference.date +
              conference.conference
            }
            date={conference.date}
            conference={
              conference.conference
            }
            address={
              conference.address
            }
            link={conference.link}
          />

        ))}

      </div>

    </section>

  );

}