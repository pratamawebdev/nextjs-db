import "@/styles/globals.css";

import { Inter, Skranji } from "next/font/google";
import Head from "next/head";

const skranji = Skranji({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Default Time Home</title>
      </Head>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-skranji: ${skranji.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
