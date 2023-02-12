import Link from "next/link";

export default function Blog({ posts }) {
    return (
        <div className="">
            <ul>
                {posts.map((post, index) => {
                    const { title } = post;
                    return (
                        <li key={index}>
                            <Link href={`/blog/${index+1}`}>
                                <h1 className="text-white">{title}</h1>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export async function getStaticProps( { params } ) {

    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@youngbloodcyb');
    const data = await res.json();
    const posts = data?.items;
    
    return {
        props: {
            posts: posts
        },
        revalidate: 10
    }
}