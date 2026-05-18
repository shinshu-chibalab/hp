import { MessageCard } from "@/components/about/MessageCard";



type Message = {

  name: string;

  message: string;

};



type Props = {

  messages: Message[];

};



export function
MessageSection({
  messages,
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
        text-center
        mb-16
      ">

        Messages

      </h2>



      {/* cards */}
      <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-10
      ">

        {messages.map(message => (

          <MessageCard
            key={
              message.name +
              message.message
            }
            name={message.name}
            message={message.message}
          />

        ))}

      </div>

    </section>

  );

}