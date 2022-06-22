<script>
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"
</script>

<div class="flex items-center flex-col h-screen">
    <Nav/>
    <div class="flex justify-center font-roboto mb-10">
        <div class="w-10/12 my-10">
            <h1 class="text-6xl font-extrabold py-2">hi, i'm cameron</h1>
            <h1 class="text-blue text-6xl font-extrabold py-2">i'm an aspiring developer<br> for full-stack development</h1>
            <p class="w-full lg:w-6/12 text-xl py-2">i'm an aspiring full-stack developer with a background in design, marketing, and analytics. my expertise is in building minimal viable products and helping scale brands through great product.</p>
            <button class="py-3 px-6 hover:bg-blue transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] block md:inline-block my-4 hover:text-white w-full sm:w-40">
                <a href="/contact">contact me</a>
            </button>
        </div> 
    </div>
    <div class="lg:absolute lg:bottom-0">
    <Footer/>
    </div>
</div>