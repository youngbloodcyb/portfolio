import Nav from "@/components/nav";
import BlogCard from "@/components/blogCard";

export default function Blog({ posts }) {
    return (
        <div className="">
            <Nav/>
            <ul className="flex">
                {posts.map((post, index) => {
                    const { title, pubDate } = post;
                    return (
                        <li className="bg-gray w-1/3 rounded-xl border-solid border-black border-2" key={index}>
                            <BlogCard title={title} pubDate={pubDate} link={`/blog/${index+1}`} index={index}/>
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