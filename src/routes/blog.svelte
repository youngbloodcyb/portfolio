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
            <ul class="flex flex-row justify-start gap-4 flex-wrap">
                {#each $blogPosts as post}
                <div class="h-auto w-48 flex flex-col border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] transition-shadow duration-300 ease-in-out">
                    <li class="my-3 list-none px-2 py-1 lowercase font-bold"><a href={`/blog/${post.id}`}>{@html post.title.substring(0, 50)}...</a></li>
                    <button class="w-auto p-2 hover:bg-red transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] mx-4 mb-4 hover:text-white">
                        <a href={`/blog/${post.id}`}>read</a>
                    </button>
                </div>
                {/each}
            </ul>
        </div>
    </div>
    <!-- <Footer/> -->
</div>