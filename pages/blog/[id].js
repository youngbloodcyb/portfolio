import Nav from "@/components/nav";

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
  
  export default function Post({ post: { title, content } }) {
    return (
        <div data-scroll-section className="">
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
            <div data-scroll>
                <Nav/>
            </div>
            <div data-scroll className="font-mono lg:mx-96 my-10">
                <div className="text-white uppercase text-center" dangerouslySetInnerHTML={ { __html: title } }></div>
                <div id="blog-post" className="text-white" dangerouslySetInnerHTML={ { __html: content } }></div>
            </div>
        </div>
    )
  }