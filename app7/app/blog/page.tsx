const getData = async () => {
  const resp = await fetch("https://jsonplaceholder.ir/posts");
  return resp.json();
};

export default async function AboutUs({ params }: any) {
  const data = await getData();
  console.log(params);
  return <h1>Blog {params.slug}</h1>;
}
