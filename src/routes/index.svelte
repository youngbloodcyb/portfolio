<script>
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"
</script>

<div class="flex items-center flex-col h-screen">
    <Nav/>
    <div class="flex justify-center font-roboto mb-10">
        <div class="w-10/12 my-10">
            <h1 class="text-5xl md:text-6xl font-extrabold py-1">designer</h1>
            <h1 class="text-5xl md:text-6xl font-extrabold py-1">developer</h1>
            <h1 class="text-5xl md:text-6xl font-extrabold py-1">data nerd</h1>
            <h1 class="text-5xl md:text-6xl font-extrabold py-1 text-green">cameron youngblood</h1>
            <p class="w-full lg:w-6/12 text-xl py-2">full-time optimization analyst. part-time graduate student in computational analytics at georgia institute of technology. full-stack developer. avid design enthusiast.</p>
            <a href="/contact" class="py-3 px-6 hover:bg-green transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] block md:inline-block my-4 hover:text-white w-full sm:w-40 text-center">contact me</a>
        </div> 
    </div>
    <div class="lg:absolute lg:bottom-0">
    <Footer/>
    </div>
</div>