import React from "react";
import type { Metadata } from "next";

type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
};

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  description: "danh sách bài viết",
};

const ArticleList: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: "Accusamus beatae ad facilis",
      thumbnailUrl:
        "bg-green-300 h-36 flex flex-col justify-center items-center rounded-lg shadow-lg",
    },
    {
      id: 2,
      title: "Reprehenderit est deserunt",
      thumbnailUrl:
        "bg-green-500 h-36 flex flex-col justify-center items-center rounded-lg shadow-lg",
    },
    {
      id: 3,
      title: "Officia porro iure quia",
      thumbnailUrl:
        "bg-pink-300 h-36 flex flex-col justify-center items-center rounded-lg shadow-lg",
    },
    {
      id: 4,
      title: "Qui eius qui autem sed",
      thumbnailUrl:
        "bg-teal-300 h-36 flex flex-col justify-center items-center rounded-lg shadow-lg",
    },
    {
      id: 5,
      title: "Epudiandae iusto deleniti",
      thumbnailUrl:
        "bg-green-700 h-36 flex flex-col justify-center items-center rounded-lg shadow-lg",
    },
    {
      id: 6,
      title: "Iusto sunt nobis quasi veritatis",
      thumbnailUrl:
        "bg-yellow-300 h-80 flex flex-col justify-center items-center rounded-lg shadow-lg",
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts?.map((item: Post) => (
          <div className={item.thumbnailUrl}>
            <div className="text-gray-500">150 x 150</div>
            <p className="mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
