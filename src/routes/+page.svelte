<script>
    import { goto } from "$app/navigation";


    let menu =`text-black text-opacity-60 cursor-pointer hover:text-opacity-100 transition duration-150 py-2 px-3`
	let navOpen = true;
    //let mobile_menu_li = `text-stone-800 border-2 w-4/6 mx-auto border-stone-500 py-4 text-center rounded-lg hover:text-rose-900 cursor-pointer`
    // temp_home = 'text-white bg-black border-2 w-4/6 mx-auto border-stone-500 py-4 text-center rounded-lg cursor-pointer'

    let selected_mobile_menu_li = `text-white bg-opacity- bg-black border-2 w-4/6 mx-auto border-[#F7DEC8] py-3 text-center rounded-lg cursor-pointer`
    let mobile_menu_li = `text-[#222] border-2 w-3/5 mx-auto border-[#333] py-3 text-center border-opacity-10 hover:text-white rounded cursor-pointer`





    const toggleMenu = () => {
        console.log("toggle menu")
        navOpen = !navOpen
    }
</script>

<!-- mobile view -->

<div class="absolute sm:hidden inset-0 overflow-hidden" >
    <!-- mobile menu -->
    <div  class="absolute inset-0 z-30 bg-[#efbc8f] w-full flex flex-col text-white transition duration-700" class:hideMenu ={navOpen} class:showMenu={!navOpen} >
        <div class="relative w-full h-full flex flex-col items-end">
            <div class="menu_trap w-1/2 absolute"></div>

            <div class="pt-10 pr-9 flex w-full justify-end z-30" on:click={toggleMenu} on:keydown={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 cursor-pointer h-7 text-stone-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>   
            <div class="absolute w-full h-fit top-0 bottom-0 font-sans my-auto">
                <ul class="space-y-7">
                    <li on:click = {toggleMenu} on:keyup = {toggleMenu} class={selected_mobile_menu_li}>Home</li>
                    <li on:click = {()=>{goto('/page/about')}} on:keyup = {()=> goto('/page/about')} class={mobile_menu_li}>About</li>
                    <li on:click = {()=>{goto('/page/contact')}} on:keyup = {()=> goto('/page/contact')} class={mobile_menu_li}>Contact</li>
                    <li on:click = {()=>{goto('/page/projects')}} on:keyup = {()=> goto('/page/projects')} class={mobile_menu_li}>Projects</li>
                </ul>
            </div>
            <div class="absolute h-4 w-1/3 bg-black blur-md top-20 left-8 mix-blend-multiply opacity-30" ></div>
            <div class="absolute h-4 w-3/5 bg-stone-500 blur-md top-24 left-8 mix-blend-multiply opacity-50 "></div>

        </div>

    </div>

    <!-- <div class="helv flex flex-col h-full bg-[#F7DEC8] w-full relative" > -->
    <div class="helv flex flex-col h-full bg-[#efbc8f] w-full relative" >

        <div class="absolute trap w-1/2 "></div>
        <div class="z-10 h-1/4 w-full px-8 pt-8">
            <div class="menu flex justify-end">
                <div class="p-1" on:click={toggleMenu} on:keydown={toggleMenu} on:keypress={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="w-8 cursor-pointer h-8 opacity-70">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                </div>
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

<div hidden class="h-[100vh] bg-[#efbc8f] w-full sm:flex flex-col helv">
    <div class="h-[240px] bg-[#FFF] w-full flex items-center justify-center">
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
        /* border-bottom: 100vh solid #F2FDFF; */
        border-bottom: 100vh solid #FFF;
        border-right: 35vw solid transparent;
    }
    .menu_trap{
        /* border-bottom: 100vh solid #F2FDFF; */
        border-bottom: 100vh solid #fff;



        border-left: 22vw solid transparent;

    }

    .hideMenu{
        transform: translateX(100%);
        transition-timing-function: ease-in;

    }
    .showMenu{
        transform:translateX(0);
        transition-timing-function: ease;

    }
    .shape-triangle{
        background-color: #222;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:-25;
        transform: skew(-14deg);
    }
 
</style>

