export default function AboutUs({ params }: any) {
  console.log(params);
  return <h1>Blog {params.slug}</h1>;
}
