export default function Skills() {
    return (
        <section className="w-full rounded-xl border-solid border-black border-2 bg-gray">
            <div className="flex flex-col items-start justify-center lg:flex-row lg:items-center lg:justify-start mx-6 w-full">
                <div className="flex flex-col justify-center w-1/2">
                    <ul className="font-mono uppercase text-xl">
                        <li className="my-4">
                            <h3>javascript</h3>
                            <h3>css</h3>
                            <h3>react</h3>
                            <h3>nextjs</h3>
                            <h3>sveltekit</h3>
                        </li>
                        <li className="my-4">
                            <h3>ruby</h3>
                            <h3>java</h3>
                            <h3>python</h3>
                            <h3>php</h3>
                            <h3>ruby on rails</h3>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center">
                    <ul className="font-mono uppercase text-xl">
                        <li className="my-4">
                            <h3>graphql</h3>
                            <h3>rest api</h3>
                            <h3>sql</h3>
                            <h3>postgres</h3>
                            <h3>sqlite</h3>
                        </li>
                        <li className="my-4">
                            <h3>a/b testing</h3>
                            <h3>machine learning</h3>
                            <h3>web implementation</h3>
                            <h3>cdp development</h3>
                            <h3>data analysis</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}