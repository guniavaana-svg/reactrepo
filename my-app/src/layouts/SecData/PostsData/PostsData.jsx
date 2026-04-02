import "./POstsData.css";
const postsData = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/497441362/photo/imperial-pen-peak-of-zhangjiajie.webp?s=1024x1024&w=is&k=20&c=PblHDnbhLA9YDuCja8RKNThFWxmHlR8aGlLfdwIDagw=",
    title: "post1",
    description: "this is post 1 description",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/497441362/photo/imperial-pen-peak-of-zhangjiajie.webp?s=1024x1024&w=is&k=20&c=PblHDnbhLA9YDuCja8RKNThFWxmHlR8aGlLfdwIDagw=",
    title: "post2",
    description: "this is post 2 description",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/497441362/photo/imperial-pen-peak-of-zhangjiajie.webp?s=1024x1024&w=is&k=20&c=PblHDnbhLA9YDuCja8RKNThFWxmHlR8aGlLfdwIDagw=",
    title: "post3",
    description: "this is post 3 description",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/497441362/photo/imperial-pen-peak-of-zhangjiajie.webp?s=1024x1024&w=is&k=20&c=PblHDnbhLA9YDuCja8RKNThFWxmHlR8aGlLfdwIDagw=",
    title: "post4",
    description: "this is post 4 description",
  },
  {
    id: 5,
    image:
      "https://media.istockphoto.com/id/497441362/photo/imperial-pen-peak-of-zhangjiajie.webp?s=1024x1024&w=is&k=20&c=PblHDnbhLA9YDuCja8RKNThFWxmHlR8aGlLfdwIDagw=",
    title: "post5",
    description: "this is post 5 description",
  },
  {
    id: 6,
    image:
      "https://media.istockphoto.com/id/497441362/photo/imperial-pen-peak-of-zhangjiajie.webp?s=1024x1024&w=is&k=20&c=PblHDnbhLA9YDuCja8RKNThFWxmHlR8aGlLfdwIDagw=",
    title: "post6",
    description: "this is post 6 description",
  },
];

export default function Posts() {
  console.log(postsData);
  return (
    <div className="posts">
      {postsData.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.image} alt="" />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
