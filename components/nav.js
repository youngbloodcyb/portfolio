export default function Nav() {
    return (
        <header className="py-6 flex justify-between items-center font-roboto bg-gray uppercase rounded-b-xl border-solid border-black border-2 max-h-[78px]">
            <div className="font-grid text-xl transition-all duration-300 ease-in-out hover:font-extrabold hover:text-2xl mx-6 text-blue-400">
                <a href="/">cameron</a>
            </div>
            <nav className="mx-6 font-mono">
                <ul className="flex items-center gap-6">
                    <li>
                        <a href="/me" className="text-xl transition-all duration-300 ease-in-out hover:font-extrabold hover:text-2xl">me</a>
                    </li>
                    <li>
                        <a href="/work" className="text-xl transition-all duration-300 ease-in-out hover:font-extrabold hover:text-2xl">work</a>
                    </li>
                    <li>
                        <a href="/blog" className="text-xl transition-all duration-300 ease-in-out hover:font-extrabold hover:text-2xl">blog</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}