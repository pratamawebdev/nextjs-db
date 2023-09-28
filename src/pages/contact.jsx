import Image from "next/image";
import React from "react";

import Button from "@/components/common/button";
import Label from "@/components/common/label";
import Layout from "@/components/layout";

const Contact = () => {
  return (
    <Layout>
      <Button className={"px-4 py-2 bg-blue-300 rounded-lg"}>Ini button</Button>
      <Label htmlFor="email">Ini label</Label>
      <div className="object-cover w-20 bg-white">
        <Image
          src="/vercel.svg"
          alt="ini logo vercel"
          width={100}
          height={100}
        />
      </div>
    </Layout>
  );
};

export default Contact;
