import Image from "next/image";

export default function Article() {
  return (
    <div>
      <h1>Tiêu đề bài viết</h1>
      <p>Nội dung bài viết...</p>

      <Image
        src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg"
        alt="Mô tả hình ảnh khác"
        width={800}
        height={600}
      />
    </div>
  );
}
