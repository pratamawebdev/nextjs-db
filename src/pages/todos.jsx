import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import Card from "@/components/todos/card";

const Todos = ({ data }) => {
  const todos = data?.todos || [];

  return (
    <>
      <Head>
        <title>Todos Page</title>
        <meta property="og:todos" content="Todos Page" key="title" />
      </Head>
      <section className="flex items-center text-gray-600 md:h-full font-poppins">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-12 text-center">
            <h5 className="mb-1 text-base text-indigo-700 md:text-lg">
              What are you doing ?
            </h5>
            <h1 className="text-4xl font-semibold text-gray-700 md:text-6xl">
              Todo Apps
            </h1>
            <div className="flex items-center justify-center my-10">
              <Image
                src="https://i.pinimg.com/originals/a3/95/db/a395db5658cf2b8b6794e17c3f573fb1.gif"
                width={300}
                height={300}
                className="object-cover"
                alt="Image Todos"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            {todos.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/todos");
    const data = response.data;

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
};

export default Todos;
