import { NewsSection } from "@/components/news/NewsSection";

import { getAllNews } from "@/lib/news";

export default async function NewsPage() {

  const newsList = await getAllNews();

  newsList.sort((a, b) => {

    return (
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
    );

  });


  return (
    
    <NewsSection
      newsList={newsList}
      title="News"
    />

  );

}