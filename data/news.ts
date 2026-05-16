export type News = {
    slug: string;
    title: string;
    date: string;
    thumbnail: string;
    contents: string;
}

export const newsList: News[] = [
    {
        slug: "news-1",
        title: "研究室の新しいメンバーが加わりました！",
        date: "2024-06-01",
        thumbnail: "@/public/news1.jpg",
        contents: "この度、研究室に新しいメンバーが加わりました。これから一緒に研究を進めていきますので、よろしくお願いします！"
    },

    {
        slug: "news-2",
        title: "研究室のウェブサイトをリニューアルしました！",
        date: "2024-05-15",
        thumbnail: "@/public/news2.jpg",
        contents: "研究室のウェブサイトがリニューアルされました。より良いユーザーエクスペリエンスを提供するために、多くの改善が加えられました。"
    },

    {
        slug: "news-3",
        title: "研究室の最新論文が国際会議で発表されました！",
        date: "2024-04-20",
        thumbnail: "@/public/news3.jpg",
        contents: "研究室の最新論文が国際会議で発表されました。"
    },
];