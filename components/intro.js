export default function Intro() {
    return (
        <section className="w-full rounded-xl border-solid border-black border-2 bg-gray">
            <div className="flex flex-col lg:flex-row items-start justify-start w-full py-4 lg:py-10">
                <div className="m-4 lg:w-1/3 lg:mx-6">
                    <div className="font-mono uppercase">
                        <p>I'm a designer & marketer turned developer that </p>
                    </div>
                </div>
                <div className="m-4 lg:w-1/3 lg:mx-6">
                    <div className="font-mono uppercase">
                        <p>React is designed to be easy to use and understand, with its intuitive syntax and components. It is also highly extensible, allowing developers to customize and build upon the core library to create powerful applications. React also provides an extensive set of tools for debugging and testing applications, making it a great choice for teams of all sizes. With its performance and scalability, React is a great choice for creating both web and mobile applications.</p>
                    </div>
                </div>
                <div className="m-4 lg:w-1/3 lg:mx-6">
                    <div className="font-mono uppercase">
                        <p>React is also highly versatile, allowing developers to quickly develop custom components and tools to suit their individual needs. It also integrates easily with other popular frameworks and libraries, making it easy to create complex applications with a single codebase. React also provides comprehensive documentation and a vibrant community of developers who are always willing to help and share their knowledge. With its performance, scalability, and versatility, React is an ideal choice for creating powerful and interactive web and mobile applications.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}