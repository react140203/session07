import Link from "next/link";
import { GoBack } from "@/components/GoBack";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const getData = async () => {
  const resp = await fetch("https://jsonplaceholder.ir/posts", {
    cache: "no-cache",
  });
  await sleep(4000);
  return resp.json();
};

//Server Component
export default async function Page() {
  const posts = await getData();

  return (
    <>
      <h1>Blog </h1>
      <GoBack></GoBack>
      {posts.map((p: any) => (
        <Link className="flex bg-slate-300" key={p.id} href={"/blog/" + p.id}>
          {p.title}
        </Link>
      ))}
    </>
  );
}

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.ir/posts").then((res) =>
    res.json()
  );

  return posts.map((post: any) => ({
    id: post.id,
  }));
}
