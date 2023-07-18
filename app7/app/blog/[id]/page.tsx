import { GoBack } from "@/components/GoBack";

const getData = async (id: string) => {
  const resp = await fetch(`https://jsonplaceholder.ir/posts/${id}`);
  return resp.json();
};

export default async function AboutUs({ params }: any) {
  console.log(params);
  const post = await getData(params.id);
  return (
    <>
      <h1>Blog {post.title}</h1>
      <p>{post.body}</p>
      <GoBack></GoBack>
    </>
  );
}
