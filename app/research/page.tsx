import { ResearchSection } from "@/components/about/ResearchSection";
import { getAllResearch } from "@/lib/research";

export default async function
ResearchPage() {

  const researchList =
    await getAllResearch();

  return (

    <ResearchSection
      researches={researchList}
      title="Research"
      description={`
        本研究室では、
        生体信号解析、
        筋骨格シミュレーション、
        リハビリテーション工学など、
        人の運動と医工学に関する
        研究を行っています。
      `}
    />

  );

}