import {writable} from "svelte/store";

export const blogPosts = writable([]);

const fetchPosts = async () => {
    const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@youngbloodcyb");
    const blog = await res.json();
    const posts = blog.items.map((data, index) => {
        return {
                title: data.title,
                author: data.author,
                content: data.content,
                id: index + 1
            }
        });
    blogPosts.set(posts);
    }
    
fetchPosts();