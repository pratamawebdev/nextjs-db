import axios from "axios";
import React from "react";

const TodosDetails = ({ todo }) => {
  return (
    <div className="flex items-center justify-center h-screen max-w-screen-xl mx-auto">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="mb-3 text-xl font-semibold text-blue-400">
          {todo.userId}
        </h1>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span className="text-black">Completed:</span>{" "}
          {todo.completed ? "Yes" : "No"}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {todo.todo}
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`https://dummyjson.com/todos/${params.id}`);
  const data = await res.data;

  return {
    props: { todo: data },
  };
};

export const getServerSidePaths = async () => {
  const res = await axios.get("https://dummyjson.com/todos");
  const data = await res.data;

  // Membuat array objek paths
  const paths = data.map((item) => {
    return {
      params: { id: `${item.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export default TodosDetails;
