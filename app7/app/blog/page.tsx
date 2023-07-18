import Link from "next/link";
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
      {posts.map((p: any) => (
        <Link className="flex bg-slate-300" key={p.id} href={"/blog/" + p.id}>
          {p.title}
        </Link>
      ))}
    </>
  );
}
