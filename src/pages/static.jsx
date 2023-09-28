import axios from "axios";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = await res.data;
  return { props: { data } };
};

const Static = ({ data }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div role="list" className="divide-y divide-gray-100">
        {data?.map((item) => (
          <Link
            href={`/users/${item.id}`}
            key={item.id}
            className="flex justify-between py-5 transition-all gap-x-6 hover:bg-slate-200"
          >
            <div className="flex gap-x-4">
              <div className="flex-auto min-w-0">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                  {item.email}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {item.address.city}
              </p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none p-1 rounded-full bg-emerald-500/20">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  {item.address.street}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Static;
