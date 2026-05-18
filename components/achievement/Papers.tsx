type Props = {

  paper: {

    title: string;

    authors: string;

    journal: string;

    date: string;

    volume: number;

    number: number;

    firstPage: number;

    lastPage: number;

    language: string;

    publishingType: string;

    doi: string;

    abstract: string;

    doiLink: string;

    pubmed?: string;

    pubmedCentral?: string;

  };

};



export function Papers({
  paper,
}: Props) {

  return (

    <article className="
      max-w-5xl
      mx-auto
      px-6
      py-24
    ">

      {/* title */}
      <h1 className="
        text-4xl
        font-bold
        leading-relaxed
        mb-10
      ">

        {paper.title}

      </h1>



      {/* meta */}
      <div className="
        space-y-4
        text-lg
        text-gray-700
        mb-16
      ">

        <div>
          <span className="font-semibold">
            Authors:
          </span>
          {" "}
          {paper.authors}
        </div>

        <div>
          <span className="font-semibold">
            Journal:
          </span>
          {" "}
          {paper.journal}
        </div>

        <div>
          <span className="font-semibold">
            Date:
          </span>
          {" "}
          {paper.date}
        </div>

        <div>
          <span className="font-semibold">
            Volume / Number:
          </span>
          {" "}
          {paper.volume}
          {" / "}
          {paper.number}
        </div>

        <div>
          <span className="font-semibold">
            Pages:
          </span>
          {" "}
          {paper.firstPage}
          {" - "}
          {paper.lastPage}
        </div>

        <div>
          <span className="font-semibold">
            Language:
          </span>
          {" "}
          {paper.language}
        </div>

        <div>
          <span className="font-semibold">
            Type:
          </span>
          {" "}
          {paper.publishingType}
        </div>

        <div>
          <span className="font-semibold">
            DOI:
          </span>
          {" "}
          <a
            href={paper.doiLink}
            target="_blank"
            className="
              text-blue-600
              underline
            "
          >
            {paper.doi}
          </a>
        </div>

      </div>



      {/* abstract */}
      <section>

        <h2 className="
          text-3xl
          font-bold
          mb-6
        ">

          Abstract

        </h2>

        <p className="
          leading-9
          text-gray-700
          whitespace-pre-line
        ">

          {paper.abstract}

        </p>

      </section>



      {/* external links */}
      <section className="mt-16">

        <h2 className="
          text-3xl
          font-bold
          mb-6
        ">

          External Links

        </h2>

        <div className="
          flex
          flex-col
          gap-4
        ">

          {paper.pubmed && (

            <a
              href={paper.pubmed}
              target="_blank"
              className="
                text-blue-600
                underline
              "
            >

              PubMed

            </a>

          )}



          {paper.pubmedCentral && (

            <a
              href={paper.pubmedCentral}
              target="_blank"
              className="
                text-blue-600
                underline
              "
            >

              PubMed Central

            </a>

          )}

        </div>

      </section>

    </article>

  );

}