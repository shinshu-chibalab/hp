import { LinkItem } from "@/components/links/LinkItem";



type LinkData = {

  title: string;

  description?: string;

  url: string;

};



type Props = {

  title: string;

  links: LinkData[];

};



export function LinkSection({

  title,

  links,

}: Props) {

  return (

    <section className="
      max-w-5xl
      mx-auto
      px-6
      py-20
    ">

      {/* title */}
      <h2 className="
        text-4xl
        font-bold
        mb-12
      ">

        {title}

      </h2>



      {/* links */}
      <div>

        {links.map(link => (

          <LinkItem
            key={link.url}
            title={link.title}
            description={
              link.description
            }
            url={link.url}
          />

        ))}

      </div>

    </section>

  );

}