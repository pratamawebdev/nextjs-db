import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
        <div className="p-6 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
          <h2 className="mb-1 text-base font-medium text-indigo-300">
            <span className="text-black">Completed:</span>{" "}
            {data.completed ? "Yes" : "No"}
          </h2>
          <h1 className="mb-3 text-2xl font-semibold">{data.title}</h1>
          <p className="mb-3 leading-relaxed">{data.todo}</p>
          <div className="flex flex-wrap items-center">
            <Link href={`/todos/${data.id}`}>
              <div className="inline-flex items-center text-indigo-300 md:mb-2 lg:mb-0">
                Detail
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
