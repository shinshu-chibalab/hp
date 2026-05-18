import fs from "fs";

import path from "path";

import matter from "gray-matter";

import { remark } from "remark";

import html from "remark-html";



/* =========================
   research directory
========================= */

const researchDirectory = path.join(
  process.cwd(),
  "data/research"
);



/* =========================
   type
========================= */

export type ResearchMeta = {

  slug: string;

  title: string;

  thumbnail: string;

  summary: string;

};



export type Research = ResearchMeta & {

  contentHtml: string;

};



/* =========================
   get all research
========================= */

export async function getAllResearch():
Promise<ResearchMeta[]> {

  const fileNames =
    fs.readdirSync(researchDirectory);

  const researchList = fileNames.map(
    fileName => {

      const fullPath = path.join(
        researchDirectory,
        fileName
      );

      const fileContents =
        fs.readFileSync(
          fullPath,
          "utf8"
        );

      const { data } =
        matter(fileContents);

      return data as ResearchMeta;

    }
  );



  /*
    日付順にしたい場合は
    ここで sort できる
  */

  return researchList;

}



/* =========================
   get research by slug
========================= */

export async function getResearchBySlug(
  slug: string
): Promise<Research> {

  const fullPath = path.join(
    researchDirectory,
    `${slug}.md`
  );



  /*
    markdown 読み込み
  */

  const fileContents =
    fs.readFileSync(
      fullPath,
      "utf8"
    );



  /*
    frontmatter と body 分離
  */

  const {
    data,
    content,
  } = matter(fileContents);



  /*
    markdown → html
  */

  const processedContent =
    await remark()
      .use(html)
      .process(content);

  const contentHtml =
    processedContent.toString();



  return {

    ...(data as ResearchMeta),

    contentHtml,

  };

}



/* =========================
   get all slugs
   (generateStaticParams用)
========================= */

export async function getAllResearchSlugs():
Promise<string[]> {

  const fileNames =
    fs.readdirSync(researchDirectory);

  return fileNames.map(fileName =>

    fileName.replace(/\.md$/, "")

  );

}