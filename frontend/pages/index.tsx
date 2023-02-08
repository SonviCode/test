import { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";
import BgHome from "../components/home/BgHome";
import ImageHome from "../components/home/ImageHome";
import SliderHome from "../components/SliderHome";
import SliderHome2 from "../components/SliderHome2";
import { COMPANY_NAME } from "../constants/Constants";
import { imgHomeData } from "../types/home";

export default function Home({
  products,
  imgHomeData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{COMPANY_NAME}</title>
        <link rel="icon" href="logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta
          name="description"
          content="Montagne Addicte : E-commerce crée par Tom Sonvico (@SonviCode) avec Next.Js - Typescript - Tailwind CSS - MongoDB - Node.Js - Express."
        />
      </Head>

      <BgHome />
      <ImageHome imgHomeData={imgHomeData} />
      <div className="px-5 mt-20 mb-20 max-w-7xl mx-auto">
        <h2 className="uppercase after:block after:absolute after:w-40 after:h-1 after:bg-main after:rounded-md pl-[5%] text-3xl">
          Les dernières nouveautés
        </h2>
        <SliderHome2 products={products} />
        <SliderHome />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  products: any;
  imgHomeData: any;
}> = async () => {
  const res = await fetch("http://localhost:5000/api/product");
  const products = await res.json();

  const resNext = await fetch("http://localhost:3000/api/imgHome");
  const imgHomeData = await resNext.json();

  return {
    props: {
      products,
      imgHomeData,
    },
  };
};
