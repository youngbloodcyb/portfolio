import Skills from "@/components/skills"
import Intro from "@/components/intro"
import Nav from "@/components/nav"
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function Me() {
    const { scroll } = useLocomotiveScroll();

    return (
        <>
            <main>
                <Nav/>
                <div className="z-0 flex justify-center items-center text-center font-grid w-full h-[800px]" data-scroll data-scroll-speed="-4">
                    <div className="mx-36">
                        <h1 className="text-8xl text-blue-400">i am a creative developer studying computer science</h1>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="0"><Skills/></div>
                <div className="flex justify-center items-center text-center font-grid w-full h-[500px]" data-scroll data-scroll-speed="2">
                    <div className="mx-36">
                        <h1 className="text-8xl text-blue-400">i enjoy building things like this in react</h1>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="0"><Intro/></div>
            </main>
        </>
    )
}