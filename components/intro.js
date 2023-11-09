import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    name: "ampry",
    link: "https://ampry.com",
    text: `Ampry is a next-generation marketing and technology company. I am a full-time software engineer at Ampry currrently pushing the boundaries of what is done in performance marketing and lead generation.`,
  },
  {
    name: "9d8",
    link: "https://9d8.dev",
    text: `9d8 is a small development agency started by me and Bridger Tower. It thrives on innovation and is always on the cutting edge of new technology and modern web development.`,
  },
  {
    name: "alpinecodex",
    link: "https://alpinecodex.com",
    text: `Alpine Codex is an intelligent marketing software solutions company enabled by applied artificial intelligence. I am a partner and engineer at alpine codex. We provide exclusive software and marketing solutions for select clients. our services are reserved for innovative companies ready to gain a competitive edge. with proficiency across design, development, advertising and customer acquisition, alpine codex strategically targets opportunities to help disruptive brands thrive.`,
  },
  {
    name: "router.so",
    link: "https://router.so",
    text: `Router is a lightweight alternative to common lead routers such as Leadspedia. It is much simpler to learn, use, and deploy. Router.so is currently in development and beta testing with select partners. Visit the router.so site to join the waitlist.`,
  },
  {
    name: "builderkit",
    link: "https://builderkit.io",
    text: `BuilderKit is an AI writing tool for technical marketers. OpenAI alone is not enough to get solid articles for marketing websites. BuilderKit combines AI, text analysis, search engine result pages APIs, and the touch of human writing to deliver quality articles at hyperspeed. BuilderKit is also currently in limited beta.`,
  },
];

export default function Intro() {
  const [activeText, setActiveText] = useState(data[0]?.text);
  const handleMouseEnter = (text) => {
    setActiveText(text);
  };

  return (
    <section className="w-full rounded-xl border-solid border-black border-2 bg-gray">
      <div className="flex flex-col lg:flex-row items-start justify-start w-full py-4 lg:py-10">
        <div className="m-4 lg:w-1/3 lg:mx-6">
          <div className="font-mono uppercase">
            <ul className="font-mono uppercase text-xl">
              {data.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.text)}
                >
                  <Link
                    href={item?.link}
                    className="inline-flex items-center gap-1 underline hover:scale-105 transition-all duration-300"
                  >
                    <h3>{item?.name}</h3>
                    <Image src="arrow.svg" width={20} height={20} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="m-4 lg:w-1/3 lg:mx-6">
          <div className="font-mono uppercase"></div>
        </div>
        <div className="m-4 lg:w-1/3 lg:mx-6">
          <div
            className="font-mono uppercase hidden md:block min-h-[400px]"
            id="text-box"
          >
            <p>{activeText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
