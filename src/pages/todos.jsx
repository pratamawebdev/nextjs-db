import axios from "axios";
import React from "react";

import Card from "@/components/todos/card";

const Todos = ({ data }) => {
  const todos = data?.todos || [];

  return (
    <section className="flex items-center text-gray-600 md:h-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-12 text-center">
          <h5 className="mb-1 text-base text-indigo-700 md:text-lg">
            What are you doing ?
          </h5>
          <h1 className="text-4xl font-semibold text-gray-700 md:text-6xl">
            Todo Apps
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {todos.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      </div>
    </section>
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
