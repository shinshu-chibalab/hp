import { EventItem } from "@/components/about/EventItem";



type Event = {

  month: string;

  title: string;

  description: string;

};



type Props = {

  events: Event[];

};



export function EventSection({
  events,
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
        text-center
      ">

        Annual Events

      </h2>



      {/* timeline */}
      <div className="space-y-4">

        {events.map(event => (

          <EventItem
            key={
              event.month +
              event.title
            }
            month={event.month}
            title={event.title}
            description={
              event.description
            }
          />

        ))}

      </div>

    </section>

  );

}