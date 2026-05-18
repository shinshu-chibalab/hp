import { notFound } from "next/navigation";
import { Papers } from "@/components/achievement/Papers";
import { papers } from "@/data/achievement/papers";



type Props = {

  params: Promise<{
    slug: string;
  }>;

};



export default async function
PaperDetailPage({
  params,
}: Props) {

  const { slug } =
    await params;



  const paper = papers.find(
    paper => paper.slug === slug
  );



  if (!paper) {

    notFound();

  }



  return (

    <Papers
      paper={paper}
    />

  );

}