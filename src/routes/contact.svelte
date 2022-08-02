<script>
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"

    import { fade } from 'svelte/transition';

    import FormData from "form-data";
    
    let visible = false;

    let name = "";
    let email = "";
    let message = "";
    
    let formdata = new FormData();

    const formSubmit = () => {

            formdata.append("name", name);
            formdata.append("email", email);
            formdata.append("message", message);

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'manual'
            };

            fetch("https://quiet-beach-99221.herokuapp.com/https://data.endpoint.space/cl6a0571c002109joajq1clp1", requestOptions)
                .then(response => response.text())
                .then((result) => {
                    console.log(result);
                    visible = !visible;
                    setTimeout(() => {
                        visible = false;
                    }, 6000);
                    name = "";
                    email = "";
                    message = "";
                })
                .catch(error => console.log('error', error));
    };


</script>

<div class="flex items-center flex-col h-auto font-roboto">
    <Nav/>
    <div class="w-10/12">
        <h1 class="text-6xl font-extrabold py-2">hire me!</h1>
        <h2 class="text-4xl font-extrabold py-2 text-green mb-4">have a job you want to do together?<br> or just want to get together? hit me up!</h2>
        <form on:submit|preventDefault={formSubmit} class="max-w-2xl">
            <div class="flex flex-col mb-10 relative">
                <input class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" type="text" id="name" name="name" placeholder="name" required="" bind:value={name}>
                <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="name">name</label>
            </div>
            <div class="flex flex-col mb-10 relative">
                <input class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" type="text" id="email" name="email" placeholder="email" required="" bind:value={email}>
                <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="email">email</label>
            </div>
            <div class="flex flex-col mb-10 relative">
                <textarea class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" name="message" id="message" cols="10" rows="5" placeholder="message." required="" bind:value={message}></textarea>
                <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="message">message for me</label>
            </div>
            <button class="py-3 px-6 hover:bg-secondary hover:text-white hover:border-black transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] hover:bg-green w-full md:w-40" type="submit">submit</button>
        </form>
    </div>
    <div class="lg:absolute lg:bottom-0 sm:mt-10 md:mt-10">
        <Footer/>
    </div>
    {#if visible}
        <div
        class="p-4 text-white rounded-2xl bg-green absolute bottom-10 font-bold border-black border-solid border-2"
        role="alert" transition:fade>
        <strong class="text-sm font-medium"> Successfully Submitted </strong>
        </div>
    {/if}
</div>
