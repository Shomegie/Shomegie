<script>
    import { goto } from "$app/navigation";

    let menu =`text-black text-opacity-70 font-thin cursor-pointer hover:text-opacity-100 transition duration-150 py-2 px-3`
</script>

<div  class=" min-h-screen bg-[#F2FDFF] w-full flex flex-col helv">
    <div class="mobile block sm:hidden pb-6 ">
        <div class="z-10 h-1/4 w-full px-8 pt-8">
            <div class="menu flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 cursor-pointer h-8 opacity-70">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div class="name flex flex-col w-2/3  ">
                <div class=" bg-[#F7DEC8] border-b border-black  border-opacity-5 tracking-tight font-bold text-black text-opacity-100">Shomegie Ikerodah</div>
                <div class=" tracking-tight text-xs text-black text-opacity-90"> Fullstack developer, frontend designer, UI/UX designer, Svelte/Sveltekit developer, Tailwind developer</div>
            </div>
        </div>
    </div>

    <div class="hidden sm:flex h-[240px]  bg-[#F7DEC8] w-full items-center justify-center">
        <div class=" w-fit flex flex-col">
            <div class="helv text-6xl lg:text-7xl tracking-tight text-black text-opacity-80 ">Shomegie Ikerodah</div>
            <div class="helv text-sm pl-1 text-black text-opacity-80 lg:tracking-wider lg:text-base">Fullstack developer, frontend designer, UI/UX designer, Svelte/Sveltekit developer, Tailwind developer</div>
        </div>
    </div>
    <div class="menu pt-3 hidden sm:block">
        <ul class="flex w-4/5 md:w-4/5 lg:w-4/6 xl:w-4/6 xl:px-10 mx-auto justify-between">
            <li on:click = {()=> goto('/')} on:keydown = {()=> goto('/')} class={menu}>Home</li>
            <li on:click = {()=> goto('/page/about')} on:keydown = {()=> goto('/page/about')} class={menu}>About</li>
            <li on:click = {()=> goto('/page/contact')} on:keydown = {()=> goto('/page/contact')} class={menu}>Contact</li>
            <li on:click = {()=> goto('/page/projects')} on:keydown = {()=> goto('/page/projects')} class={menu}>Projects</li>
        </ul>
    </div>
    <slot></slot>


</div>


<style>
    .helv{
        font-family: Helvetica, sans-serif;
    }
    .trap{
        border-bottom: 100vh solid #F2FDFF;
        border-right: 35vw solid transparent;
    }
</style>