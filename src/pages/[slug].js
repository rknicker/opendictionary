import IconsBar from "@/Components/Icons/IconsBar";
import DictionaryData from "../Data/dictionary";
import { useEffect, useRef } from "react";
import MD5 from "crypto-js/md5";
import Head from "next/head";
import { useRouter } from "next/router";
import { telegramChannelName } from "@/Data/constants";

export const generatedData = DictionaryData.map((item) => ({
  ...item,
  md5: MD5(item?.description).toString(),
}));
const Details = ({ data }) => {
  const effectRan = useRef(false);

  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${asPath}`;

  useEffect(() => {
    if (effectRan.current === false) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://telegram.org/js/telegram-widget.js?21";
      script.setAttribute(
        "data-telegram-discussion",
        `${telegramChannelName}/${data?.telegramPost}`
      );
      script.setAttribute("data-comments-limit", "5");
      document.getElementById("comments-container").appendChild(script);
    }
    return () => (effectRan.current = true);
  }, []);

  return (
    <>
      <Head>
        <title>{data?.name} - #OpenDictionary</title>
        <link rel="canonical" href={URL} />
      </Head>
      <div className="bodywrap">
      <div className="Detay">
        <h1 className="DetayHead">{data?.name}</h1>
        <p className="DetayVersion">{data?.wordVersion}</p>
      </div>

      <div>
        <p>{data?.description}</p>
      </div>

      <div className="DetayMd5">
        <span>{data?.md5}</span>
      </div>

      <div className="DetayIconBar">
        <IconsBar
          likeLink={`tg://resolve?domain=opendictionary1&post=${data?.telegramPost}`}
          saveLink={`https://t.me/${telegramChannelName}/${data?.telegramPost}`}
          whiteBackground
        />
      </div>
      </div>
      <div style={{ margin: "2rem 0 0 -15px" }} id="comments-container"></div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: generatedData.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      data: generatedData.filter(
        (item) => item.slug === context.params?.slug
      )?.[0],
    },
  };
}

export default Details;
