import Link from "next/link";

const fetchAllPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

export default async function Home() {
  const posts = await fetchAllPost();

  return (
    <div>
      <h1 className="text-3xl">All Post Title</h1>
      <hr />
      <div className="flex  mx-auto flex-col gap-2 p-2 rounded-md border bg-slate-400">
        {posts.map((post) => {
          return <div key={post.id} className=" bg-slate-300 rounded-lg capitalize"><Link href={`/blog/${post.id}`} className="p-2">{post.title}</Link></div>;
        })}
      </div>
    </div>
  );
}
