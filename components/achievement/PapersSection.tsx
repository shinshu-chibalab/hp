import { PaperItem } from "@/components/achievement/PaperItem";


type Paper = {

  slug: string;

  title: string;

  authors: string;

  journal: string;

  date: string;

};



type Props = {

  papers: Paper[];

};



export function PapersSection({
  papers,
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

        論文

      </h2>



      {/* papers */}
      <div className="
        flex
        flex-col
        gap-8
      ">

        {papers.map(paper => (

          <PaperItem
            key={paper.slug}
            slug={paper.slug}
            title={paper.title}
            authors={paper.authors}
            journal={paper.journal}
            date={paper.date}
          />

        ))}

      </div>

    </section>

  );

}