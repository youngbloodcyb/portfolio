<script context="module">
    export async function load({params}) {
        return {
            props: {
                id: params.id
            }
        }
    }
</script>

<script>
    import Nav from "../../components/nav.svelte";
    import Footer from "../../components/footer.svelte";
    import { blogPosts } from '../../stores/api';

    export let id;
    
    let index = id - 1;
</script>

<div class="flex items-center flex-col h-screen">
    <Nav/>
    <div class="outer-wrapper font-roboto mt-10">
        <div class="blog-post">
            {@html $blogPosts[index].content}
        </div>
    </div>
    <a href="/blog" class="py-3 px-6 hover:bg-green transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] block md:inline-block my-4 hover:text-white text-center">back to posts</a>
    <Footer/>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

    .outer-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .blog-post {
        max-width: 70%;
    }
    
    :global(.blog-post > h3) {
        /* Font & Text */
        font-family: 'Roboto', sans-serif;
        font-size: 32px;
        font-style: normal;
        font-variant: normal;
        font-weight: 700;
        letter-spacing: -0.512px;
        line-height: 40px;
        text-decoration: none solid rgb(41, 41, 41);
        text-align: start;
        text-indent: 0px;
        text-transform: none;
        vertical-align: baseline;
        white-space: normal;
        word-spacing: 0px;
        margin-bottom: 12px;
        margin-top: 12px;
    }
    
    :global(.blog-post > p) {
        /* Font & Text */
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        letter-spacing: -0.06px;
        line-height: 32px;
        text-decoration: none solid rgb(41, 41, 41);
        text-align: start;
        text-indent: 0px;
        text-transform: none;
        vertical-align: baseline;
        white-space: normal;
        word-spacing: 0px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
    
    :global(.blog-post > blockquote) {
        /* Font & Text */
        font-size: 16px;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        letter-spacing: normal;
        line-height: normal;
        text-decoration: none solid rgba(0, 0, 0, 0.8);
        text-align: start;
        text-indent: 0px;
        text-transform: none;
        vertical-align: baseline;
        white-space: normal;
        word-spacing: 0px;
        font-style: italic;
        margin-top: 12px;
        margin-bottom: 12px;
    }
    
    :global(.blog-post > h4 > a) {
        /* Font & Text */
        font-size: 20px;
        font-style: normal;
        font-variant: normal;
        font-weight: 700;
        letter-spacing: -0.06px;
        line-height: 32px;
        text-decoration: underline solid rgb(41, 41, 41) !important;
        text-align: start;
        text-indent: 0px;
        text-transform: none;
        vertical-align: baseline;
        white-space: normal;
        word-spacing: 0px;
    }

    :global(.blog-post > ol > li) {
        font-family: 'Roboto', sans-serif;
        margin-top: 6px;
        margin-bottom: 6px;
        font-size: 20px;
    }

    :global(.blog-post > ol > li > a) {
        text-decoration: underline solid rgb(41, 41, 41);
    }
        
</style>