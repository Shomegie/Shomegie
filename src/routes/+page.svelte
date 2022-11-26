<script>
    import { goto } from "$app/navigation";
    let menu =`text-black text-opacity-60 font-thin cursor-pointer hover:text-opacity-100 transition duration-150 py-2 px-3`
</script>

<!-- mobile view -->

<div class="absolute sm:hidden inset-0 overflow-hidden">
    <div class="helv flex flex-col h-full bg-[#F7DEC8] w-full relative">
        <div class="absolute trap w-1/2 "></div>
        <div class="z-10 h-1/4 w-full px-8 pt-8">
            <div class="menu flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 cursor-pointer h-8 opacity-70">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  
            </div>
            <div class="name flex flex-col w-2/3 ">
                <div class="border-b border-black border-opacity-5 tracking-tight font-bold text-black text-opacity-70">Shomegie Ikerodah</div>
                <div class="tracking-tight text-xs text-black text-opacity-70"> Fullstack developer, frontend designer, UI/UX designer, Svelte/Sveltekit developer, Tailwind developer</div>
            </div>
        </div>
        <div class="z-10 h-2/4 flex flex-col items-center justify-center">
            <div class="flex flex-col w-fit text-3xl tracking-tight text-black text-opacity-60 pt-16">
                <div class="">Hello, my name is</div>
                <div class=""><span class="tracking-tighter text-black text-opacity-100 font-bold">Shomegie Ikerodah </span>& I'm a</div>
                <div class="">fullstack web developer.</div>
            </div>
            <div class="z-10 px-8 pt-10 ">
                <div class="w-fit bg-black text-white mx-auto rounded-full py-3 px-5 text-sm cursor-pointer hover:bg-blue-700 hover:text-blac transition duration-200">Download Resume</div>
            </div>
        </div>
    </div>
</div>


<!-- desktop view -->

<div hidden class="h-[100vh] bg-[#fed8b7] w-full sm:flex flex-col helv">
    <div class="h-[240px] bg-[#F2FDFF] w-full flex items-center justify-center">
        <div class=" w-fit flex flex-col">
            <div class="helv text-6xl lg:text-7xl tracking-tight text-black text-opacity-80 ">Shomegie Ikerodah</div>
            <div class="helv text-sm pl-1 text-black text-opacity-80 lg:tracking-wider lg:text-base">Fullstack developer, frontend designer, UI/UX designer, Svelte/Sveltekit developer, Tailwind developer</div>
        </div>
    </div>
    <div class="menu pt-3">
        <ul class="flex w-4/5 md:w-4/5 lg:w-4/6 xl:w-4/6 xl:px-10 mx-auto justify-between">
            <li on:click = {()=> goto('/')} on:keydown = {()=> goto('/')} class={menu}>Home</li>
            <li on:click = {()=> goto('/page/about')} on:keydown = {()=> goto('/page/about')} class={menu}>About</li>
            <li on:click = {()=> goto('/page/contact')} on:keydown = {()=> goto('/page/contact')} class={menu}>Contact</li>
            <li on:click = {()=> goto('/page/projects')} on:keydown = {()=> goto('/page/projects')} class={menu}>Projects</li>
        </ul>
    </div>
    
    <div class="flex items-center h-[55vh]">
        <div class="content h-fit w-full">
            <div class="flex flex-col w-fit mx-auto text-5xl xl:text-6xl text-black text-opacity-60 space-y-3">
                <div class="border-b border-black w-fit pr-6 border-opacity-10">Hello, my name is</div>
                <div class="border-b border-black w-fit pr-6 border-opacity-10"><span class="text-black text-opacity-80 font-semibold tracking-tight ">Shomegie Ikerodah </span>& I'm a</div>
                <div class="border-b border-black w-fit pr-1 border-opacity-10">fullstack web developer.</div>
            </div>
            <div class="pt-10">
                <div class="w-fit bg-black text-white mx-auto rounded-full py-3 px-5 text-sm cursor-pointer hover:bg-blue-700 hover:text-white transition duration-200">Download Resume</div>
            </div>
        </div>
    </div>




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