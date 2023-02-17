<script>
    import { getContext } from 'svelte';
    
    import Nav from "../components/nav.svelte";
    import Footer from "../components/footer.svelte";
    import Popup from "../components/popup.svelte";

    import {isOpen} from "../stores/overlayStore";

    let windowOpen = false;
    
    const hideElement = () => {
        let bigBox = document.querySelector("#big-box");
        bigBox.style.display = "none";
        windowOpen = true;
    }

    const showElement = () => {
        let bigBox = document.querySelector("#big-box");
        bigBox.style.display = "block";
        windowOpen = false;
    }
</script>

<div class="flex items-center flex-col h-screen">
    <Nav/>
    {#if $isOpen}
        <Popup>
            <p>Hey there. My name is Cameron Youngblood and I am an aspiring full-stack developer. I built this website using a combination of Sveltekit, TailwindCSS, and Ruby on Rails. I hope you enjoy. :)</p>
        </Popup>         
    {/if}
    <div class="w-full flex flex-col items-center mb-6">
        <div id="big-box" class="w-10/12 border-black border-solid border-2 rounded-2xl h-96 mx-6 shadow-[-4px_4px_#000] hover:shadow-[-6px_6px_#000] transition-all duration-300 ease-in-out">
            <div id="browser-top-bar" class="h-auto w-full flex flex-row py-4 px-6 gap-8 items-center justify-start">
                <div on:click={hideElement} class="flex justify-center">
                    <img src="/images/cross-free-icon-font (1).png" alt="x icon" class="w-5 h-5 hover:w-6 hover:h-6 transition-all duration-300 ease-in-out hover:cursor-pointer self-center">
                </div>    
                <div class="border-solid border-2 rounded-2xl w-11/12 h-8">
                    <p class="font-roboto text-sm lowercase px-4 pt-1">https://www.hello_welcome_to_my_about_page.cameron</p>
                </div>
            </div>
            <div id="big-box-content" class="my-2 w-full flex flex-row justify-center gap-6 h-3/4 font-roboto">
                <div id="paragraph-content" class="w-3/4 h-full ml-10 mr-24">
                    <h3 class="text-3xl text-blue font-extrabold lowercase">hi, nice to meet you</h3>
                    <p class="text-lg text-black mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p class="text-lg text-black mt-2">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div id="color-box" class="flex flex-row flex-wrap w-1/4 mr-16 mb-10">
                    <div class="h-1/2 m-2 w-full border-black border-2 rounded-2xl hover:bg-blue transition-all duration-300 ease-in-out hover:shadow-[-6px_6px_#000]"></div>
                    <div id="small-color-box" class="h-1/2 w-full flex flex-row">
                        <div class="h-full m-2 w-1/2 border-black border-2 rounded-2xl hover:bg-green transition-all duration-300 ease-in-out hover:shadow-[-6px_6px_#000]"></div>
                        <div class="h-full m-2 w-1/2 border-black border-2 rounded-2xl hover:bg-red transition-all duration-300 ease-in-out hover:shadow-[-6px_6px_#000]"></div>
                    </div>
                </div>
            </div>
        </div>
        {#if windowOpen}
            <h4 class="text-lg font-roboto lowercase mt-24">insert the floppy disk to open the window again</h4>
            <div id="floppy-disk" class="w-96 h-24 border-t-2 border-r-2 border-l-2 rounded-t-2xl bg-black flex justify-center items-start mt-6 hover:h-20 transition-all duration-300 ease-in-out hover:cursor-pointer" on:click={showElement}>
                <div class="w-1/2 bg-cream h-[72px] flex justify-center rounded-lg">
                    <div class="w-2/3 h-auto flex items-center">
                        <div class="w-1/2 h-[54px] bg-black rounded-lg"></div>
                    </div>
                </div>
            </div>
            <hr class="w-[450px] border-2 m-0 rounded-2xl">
        {/if}
        <div class="w-10/12 flex flex-row justify-center items-start gap-8 mt-6">
            <div class="border-black border-solid border-2 rounded-2xl h-48 w-1/3 shadow-[-4px_4px_#000] hover:shadow-[-8px_8px_#000] cursor-pointer transition-all duration-300 ease-in-out"
            on:click={() => {isOpen.set(true)}}>
            </div>

            <div class="border-black border-solid border-2 rounded-2xl h-48 w-1/3 shadow-[-4px_4px_#000] hover:shadow-[-8px_8px_#000] cursor-pointer transition-all duration-300 ease-in-out"
            on:click={() => {isOpen.set(true)}}>
            </div>

            <div class="border-black border-solid border-2 rounded-2xl h-48 w-1/3 shadow-[-4px_4px_#000] hover:shadow-[-8px_8px_#000] cursor-pointer transition-all duration-300 ease-in-out"
            on:click={() => {isOpen.set(true)}}>
            </div>
        </div>
    </div>
    <Footer/>
</div>