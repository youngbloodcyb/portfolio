<script>
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"
</script>

<div class="flex items-center flex-col h-auto font-roboto">
    <Nav/>
    <div class="w-10/12">
        <h1 class="text-6xl font-extrabold py-2">hire me!</h1>
        <h2 class="text-4xl font-extrabold py-2 text-green mb-4">have a job you want to do together?<br> or just want to get together? hit me up!</h2>
        <form class="max-w-2xl">
            <div class="flex flex-col mb-10 relative">
                <input class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" type="text" id="name" name="name" placeholder="name" required="">
                <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="name">name</label>
            </div>
            <div class="flex flex-col mb-10 relative">
                <input class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" type="text" id="email" name="email" placeholder="email" required="">
                <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="email">email</label>
            </div>
            <div class="flex flex-col mb-10 relative">
                <textarea class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" name="message" id="message" cols="10" rows="5" placeholder="message." required=""></textarea>
                <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="message">message for me</label>
            </div>
            <button class="py-3 px-6 hover:bg-secondary hover:text-white hover:border-black transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] hover:bg-green" type="submit">submit</button>
        </form>
    </div>
    <Footer/>
</div>
