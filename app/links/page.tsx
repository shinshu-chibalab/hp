import { LinkSection } from "@/components/links/LinkSection";

import { links } from "@/data/links";



export default function
LinksPage() {

  const universityLinks =
    links.filter(
      link =>
        link.category ===
        "University"
    );



  const researchLinks =
    links.filter(
      link =>
        link.category ===
        "Research"
    );


    
    const softwareLinks =
    links.filter(
      link =>
        link.category ===
        "Software"
    );


  return (

    <main>

      <LinkSection
        title="University"
        links={universityLinks}
      />



      <LinkSection
        title="Research"
        links={researchLinks}
      />

      <LinkSection
        title="Software"
        links={softwareLinks}
      />

    </main>

  );

}