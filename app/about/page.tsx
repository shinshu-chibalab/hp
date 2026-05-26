import { HeroSection } from "@/components/about/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { AboutMembers } from "@/components/about/AboutMembers";
import { EventSection } from "@/components/about/EventSection";
import { ResearchSection } from "@/components/about/ResearchSection";
import { MessageSection } from "@/components/about/MessageSection";

import { getAllResearch } from "@/lib/research";

export default async function
IntroductionPage() {

  const researchList = await getAllResearch();

  return (

    <div>

      <HeroSection
        title="生体モデリング研究室"
        images={[
          "/about/sleeping.jpg",
          "/about/milk.jpg",
          "/about/sushi.jpg",
        ]}
      />

      <AboutSection
        title="About Us"
        description={`
          本研究室では、
          筋骨格モデルや生体信号解析を通じて、
          人の運動メカニズムの解明を
          目指しています。

          医工学・リハビリテーション工学・
          シミュレーション技術を融合し、
          次世代の運動支援技術の
          開発を行っています。
        `}
      />

      <AboutMembers
        description={`
          研究室には、学部生から大学院生まで
          多様なメンバーが在籍しています。 
        `}
        link="/members"
      />

      <ResearchSection
        researches={researchList}
        limit={3}
        showMoreButton
      />

      <EventSection
        events={[

          {
            month: "4月",
            title: "研究室配属",
            description:
              "新メンバーが研究室に加入します。",
          },

          {
            month: "8月",
            title: "研究室合宿",
            description:
              "研究発表や交流を行います。",
          },

          {
            month: "9月",
            title: "学会発表",
            description:
              "国内外の学会で研究成果を発表します。",
          },

          {
            month: "3月",
            title: "卒業研究発表",
            description:
              "1年間の研究成果を発表します。",
          },

        ]}
      />

      <MessageSection
        messages={[

          {
            name: "田中太郎",
            message:
              "楽しく研究できる環境です。",
          },

          {
            name: "佐藤花子",
            message:
              "先輩後輩関係なく相談しやすいです。",
          },

          {
            name: "鈴木一郎",
            message:
              "学会発表など貴重な経験ができます。",
          },

        ]}
      />
    </div>

  );

}