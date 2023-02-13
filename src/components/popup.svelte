<script>
    import {isOpen} from "../stores/overlayStore";
</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-green">
   <div class="rounded-2xl bg-cream shadow-[-4px_4px_#000] border-black border-solid border-2 h-2/3 w-1/2 bg-opacity-100">
        <div on:click={() => {isOpen.set(false)}} class="p-4">
            <img src="/images/cross-free-icon-font (1).png" alt="x icon" class="w-5 h-5 hover:w-6 hover:h-6 transition-all duration-300 ease-in-out hover:cursor-pointer self-center">
        </div>
        <div class="my-4 mx-8">
            <slot/>
        </div>
   </div>  
</div>