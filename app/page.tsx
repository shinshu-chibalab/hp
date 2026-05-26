import { HeroSection } from "@/components/about/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ResearchSection } from "@/components/about/ResearchSection";
import { AccessInfo } from "@/components/access/AccessInfo";
import { ContactInfo } from "@/components/access/ContactInfo";
import { NewsSection } from "@/components/news/NewsSection";
import { getAllResearch } from "@/lib/research";
import { getAllNews } from "@/lib/news";



export default async function
HomePage() {

  /* =========================
     research list
  ========================= */

  const researchList =
    await getAllResearch();



  /* =========================
     news list
  ========================= */

  const newsList =
    await getAllNews();



  return (

    <main>

      {/* ======================
         Hero
      ====================== */}

      <HeroSection
        title=""
        images={[
          "/msm.png",
          "/scone_msm.png",
          "/VR_exp.JPG"
        ]}
      />



      {/* ======================
         About
      ====================== */}

      <AboutSection
        title="About"
        description={`
          本研究室では、
          筋骨格モデルや生体信号解析を通じて、
          人の運動メカニズムの解明を
          目指しています。

          医工学・リハビリテーション工学・
          シミュレーション技術を融合し、
          次世代の運動支援技術の
          研究を行っています。
        `}
      />



      {/* ======================
         Featured Research
      ====================== */}

      <ResearchSection
        researches={researchList}
        title="Featured Research"
        limit={2}
        showMoreButton
      />



      {/* ======================
         Latest News
      ====================== */}

      <NewsSection
        newsList={newsList}
        title="Latest News"
        limit={2}
        showMoreButton
      />



      {/* ======================
         Members
      ====================== */}

      {/*
      <MembersCountSection
        title="Members"
        count={{
          Professor: 1,
          Doctor: 0,
          M2: 0,
          M1: 4,
          B4: 3,
        }}
      />
      */}



      {/* ======================
         Access
      ====================== */}

      <section className="
        bg-gray-50
        py-28
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-6
          grid
          md:grid-cols-2
          gap-12
        ">

          <AccessInfo
            title="Access"
            postCode="〒000-0000"
            address="○○県○○市○○1-1-1"
            building="○○大学 ○○棟"
            tel="000-000-0000"
          />



          <ContactInfo
            title="Contact"
            email="example@example.com"
            memo={`
              研究室見学や
              共同研究に関する
              お問い合わせは
              メールにてお願いいたします。
            `}
          />

        </div>

      </section>

    </main>

  );

}