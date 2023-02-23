import Nav from "@/components/nav";
import BlogLayout from "@/components/BlogLayout";


export async function getStaticPaths() {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@youngbloodcyb');
    const data = await res.json();
    const posts = data?.items.map((data, index) => {
        const { title, author, content } = data;
        return {
            title: title,
            author: author,
            content: content,
            id: index + 1
        }
    });

    const paths = posts.map((post) => ({
        params: { id: JSON.stringify(post.id) }
    }))

    return {
      paths,
      fallback: false
    }
  }
  
export async function getStaticProps( { params } ) {

    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@youngbloodcyb');
    const data = await res.json();
    const posts = data?.items.map((data, index) => {
        const { title, author, content } = data;
        return {
            title: title,
            author: author,
            content: content,
            id: index + 1
        }
    });
    
    return {
        props: {
            post: posts[params.id - 1]
        },
        revalidate: 3600
    }
}
  
  export default function Post({ post: { title, content, id } }) {
    return (
        <div className="">
            <style jsx global>
              {`
                p {margin: 10px 0;}
                h1 {margin: 10px 0;}
                h2 {margin: 10px 0;}
                h3 {margin: 10px 0;}
                h4 {margin: 10px 0;}
                h5 {margin: 10px 0;}
                a blog-post {text-decoration: underline;}
                `}
            </style>
            <div>
                <Nav/>
            </div>
            <div className="mx-4 md:mx-8 lg:mx-72 xl:mx-96 my-10 rounded-xl border-solid border-black border-2 bg-gray">
                <h1 className="text-blue-400 font-grid text-6xl m-6 text-center">{id < 10 ? `0${id}` : id}</h1>
                <div className="text-blue-400 uppercase text-center m-6 text-4xl font-grid" dangerouslySetInnerHTML={ { __html: title } }></div>
                <div id="blog-post" className="text-black uppercase mx-6 font-mono" dangerouslySetInnerHTML={ { __html: content } }></div>
            </div>
        </div>
    )
  }

  Post.getLayout = function getLayout(page) {
    return (
        <BlogLayout>{page}</BlogLayout>
    )
  }