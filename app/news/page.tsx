import { NewsSection } from "@/components/news/NewsSection";

import { getAllNews } from "@/lib/news";

export default async function NewsPage() {

  const newsList = await getAllNews();

  return (
    
    <NewsSection
      newsList={newsList}
      title="News"
    />

  );

}