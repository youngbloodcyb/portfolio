<script>
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"
    import { blogPosts } from '../stores/api.js';
</script>

<div class="flex items-center flex-col h-auto font-roboto">
    <Nav/>
    <div class="w-10/12">
        <h1 class="text-6xl font-extrabold py-2">blog posts</h1>
        <div class="my-6">
            <ul class="flex flex-row justify-center md:justify-start gap-4 flex-wrap">
                {#await $blogPosts}
                <p>waiting...</p>
                {:then posts}
                {#each $blogPosts as post}
                <div class="h-auto w-48 flex flex-col border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] transition-shadow duration-300 ease-in-out">
                    <a href={`/blog/${post.id}`} class="m-3 px-2 py-1 lowercase font-bold">{@html post.title.substring(0, 50)}...</a>
                    <a href={`/blog/${post.id}`} class="w-auto p-2 hover:bg-green transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] mx-4 mb-4 hover:text-white text-center">read</a>
                </div>
                {/each}
                {/await}
            </ul>
        </div>
    </div>
    <div class="absolute bottom-0">
        <Footer/>
    </div>
</div>