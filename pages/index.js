import Skills from "@/components/skills";
import Intro from "@/components/intro";
import Nav from "@/components/nav";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Me() {
  const { scroll } = useLocomotiveScroll();

  return (
    <>
      <Nav />
      <div data-scroll-section>
        <main>
          <div
            className="z-0 flex justify-center items-center text-center font-grid w-full h-[800px]"
            data-scroll
            data-scroll-speed="-4"
          >
            <div className="mx-36">
              <h1 className="lowercase text-5xl lg:text-8xl text-blue-400">
                full-stack developer
              </h1>
            </div>
          </div>
          <div data-scroll data-scroll-speed="0">
            <Intro />
          </div>
          <div
            className="flex justify-center items-center text-center font-grid w-full h-[500px]"
            data-scroll
            data-scroll-speed="2"
          >
            <div className="mx-36">
              <h1 className="text-5xl lg:text-8xl text-blue-400">
                other projects
              </h1>
            </div>
          </div>
          <div data-scroll data-scroll-speed="0">
            <Skills />
          </div>
        </main>
      </div>
    </>
  );
}
