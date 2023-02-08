import Skills from "@/components/skills"
import Intro from "@/components/intro"
import Nav from "@/components/nav"

export default function Me() {
    return (
        <>
            <main className="w-screen h-screen">
                <Nav/>
                <Skills/>
                <Intro/>
            </main>
        </>
    )
}