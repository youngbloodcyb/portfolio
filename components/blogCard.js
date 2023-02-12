export default function BlogCard({ title, pubDate, link, index }) {
    return (
        <a className="" href={link}>
            <div className="m-4 lg:mx-6 uppercase flex flex-col gap-6">
                <h1 className="text-blue-400 font-grid text-6xl">{index < 9 ? `0${index+1}` : index + 1}</h1>
                <div className="font-mono" dangerouslySetInnerHTML={ { __html: `${title.substring(0, 100)}...` } }></div>
                <div className="font-mono text-xl">{pubDate}</div>
            </div>
        </a>
    )
}