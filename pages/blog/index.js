import Nav from "@/components/nav";
import BlogCard from "@/components/blogCard";

export default function Blog({ posts }) {
  return (
    <div data-scroll-section>
      <div data-scroll data-scroll-speed="0">
        <Nav />
      </div>
      <div
        className="z-0 flex justify-center items-center text-center font-grid w-full h-[800px]"
        data-scroll
        data-scroll-speed="-4"
      >
        <div className="mx-36">
          <h1 className="text-5xl lg:text-8xl text-blue-400">blog</h1>
        </div>
      </div>
      <ul
        className="flex flex-col md:flex-row"
        data-scroll
        data-scroll-speed="0"
      >
        {posts.map((post, index) => {
          const { title, pubDate } = post;
          return (
            <li
              className="bg-gray w-full md:w-1/3 rounded-xl border-solid border-black border-2"
              key={index}
            >
              <BlogCard
                title={title}
                pubDate={pubDate}
                link={`/blog/${index + 1}`}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@youngbloodcyb"
  );
  const data = await res.json();
  const posts = data?.items;

  return {
    props: {
      posts: posts,
    },
    revalidate: 10,
  };
}
