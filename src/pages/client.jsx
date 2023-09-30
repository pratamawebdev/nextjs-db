import axios from "axios";
import { useEffect, useState } from "react";

import FetchTime from "@/components/client/fetch-time";
import Time from "@/components/client/time";

export default function CSRPage() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  if (isLoading) return <p>Loading Now ...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <main>
      {data && data?.map((item, index) => <Time data={item} key={index} />)}
      <br />

      <h1 className="text-2xl text-green-400 ">Ini fetch time</h1>
      <br />
      <FetchTime />
    </main>
  );
}
