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
        revalidate: 10
    }
}
  
  export default function Post({ post: { title, content } }) {
    return (
        <div className="">
            <Nav/>
            <div className="text-white" dangerouslySetInnerHTML={ { __html: title } }></div>
            <div className="text-white" dangerouslySetInnerHTML={ { __html: content } }></div>
        </div>
    )
  }