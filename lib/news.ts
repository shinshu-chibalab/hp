import fs from "fs";

import path from "path";

import matter from "gray-matter";

import { remark } from "remark";

import html from "remark-html";

const newsDirectory = path.join(
  process.cwd(),
  "data/news"
);

export type NewsMeta = {

  slug: string;

  title: string;

  date: string;

  thumbnail: string;

};

export async function getAllNews() {

  const fileNames = fs.readdirSync(newsDirectory);

  const newsList = fileNames.map(fileName => {

    const fullPath = path.join(
      newsDirectory,
      fileName
    );

    const fileContents = fs.readFileSync(
      fullPath,
      "utf8"
    );

    const { data } = matter(fileContents);

    return data as NewsMeta;

  });

  return newsList;

}

export async function getNewsBySlug(
  slug: string
) {

  const fullPath = path.join(
    newsDirectory,
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(
    fullPath,
    "utf8"
  );

  const { data, content } =
    matter(fileContents);

  const processedContent =
    await remark()
      .use(html)
      .process(content);

  const contentHtml =
    processedContent.toString();

  return {

    ...(data as NewsMeta),

    contentHtml,

  };

}
