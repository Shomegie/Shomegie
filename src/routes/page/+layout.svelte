<script>
    import { goto } from "$app/navigation";
    import Footer from "../../components/footer.svelte"
    import { page } from '$app/stores';  


    let menu =`text-black text-opacity-70 font-thin cursor-pointer hover:text-opacity-100 transition duration-150 py-2 px-3`
    // let slidingMenuItems =`bg-black pr-5 pl-4 py-2 w-fit ml-20 font-bold font-mono text-xl tracking-widest text-white hover:bg-white hover:text-black transition duration-200 cursor-pointer`
    let mobile_menu_li = `text-stone-800 border-2 w-4/6 mx-auto border-stone-700 py-4 text-center rounded-lg hover:text-rose-900 cursor-pointer`
    let selected_mobile_menu_li = `text-white bg-black border-2 w-4/6 mx-auto border-stone-500 py-4 text-center rounded-lg cursor-pointer`


    let navOpen = false;    
    const toggleMenu = () => {
        console.log("toggle menu")
        navOpen = !navOpen
    }

    let aboutNav = () =>{
        if ($page.url.pathname == '/page/about'){
            toggleMenu()
        }else{
            navOpen = false;
            goto('/page/about');
        }
    }

    let contactNav = () =>{
        if ($page.url.pathname == '/page/contact'){
            toggleMenu()
        }else{
            navOpen = false;
            goto('/page/contact');
        }
    }

    let projectsNav = () =>{
        if ($page.url.pathname == '/page/projects'){
            toggleMenu()
        }else{
            navOpen = false;
            goto('/page/projects');
        }
    }




</script>

<div  class=" min-h-screen overflow-x-hidden  bg-[#ffffff] flex flex-col helv pb-16 relative">
    <!-- mobile sliding menu -->
    <div class="inset-0 absolute h-screen z-30 bg-[#f7dec8] overflow-hidden transition duration-700" class:hideMenu ={!navOpen} class:showMenu={navOpen} >
        <div class="absolute inset-0 z-30 transition duration-700 flex"class:hideMenu ={!navOpen} class:showMenu={navOpen} >
            <div class="w-full absolute z-50 flex justify-end p-2  pr-5 pt-3 mt-4 mr-4">
                <div class="p-2" on:click={toggleMenu} on:keydown={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 cursor-pointer h-7 text-stone-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                </div>   
            </div> 
    

            <div class="absolute w-full h-fit top-0 bottom-0 font-sans my-auto">
                <ul class="space-y-7">
                    <li on:click = {()=>{navOpen = false; goto('/')}} on:keydown = {()=>{navOpen = false; goto('/')}} class={mobile_menu_li}>Home</li>
                    <li on:click = {()=>{aboutNav()}} on:keyup = {aboutNav} class={$page.url.pathname !='/page/about'?mobile_menu_li:selected_mobile_menu_li}>About</li>
                    <li on:click = {contactNav} on:keyup = {contactNav} class={$page.url.pathname !='/page/contact'?mobile_menu_li:selected_mobile_menu_li}>Contact</li>
                    <li on:click = {projectsNav} on:keyup = {projectsNav} class={$page.url.pathname !='/page/projects'?mobile_menu_li:selected_mobile_menu_li}>Projects</li>
                    <!-- <li on:click = {()=>{goto('/page/projects')}} on:keydown = {()=> goto('/page/projects')} class={mobile_menu_li}>Projects</li> -->
                </ul>
            </div>
            <div class="absolute h-4 w-1/3 bg-black blur-md top-20 left-8 mix-blend-multiply opacity-30" ></div>
            <div class="absolute h-4 w-3/5 bg-stone-500 blur-md top-24 left-8 mix-blend-multiply opacity-50 "></div>
            

        </div>
    </div>
    <!-- mobile view -->
    <div class="mobile block sm:hidden pb-6 ">
        <div class="z-10 h-1/4 w-full px-8 pt-8">
            <div class="menu flex justify-end" on:click={toggleMenu} on:keydown={toggleMenu} on:keypress={toggleMenu} >
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

    <!-- desktop view -->

    <div class="hidden sm:flex h-[240px] bg-[#F7DEC8] pattern2 w-full items-center justify-center">
        <div class=" w-fit flex flex-col">
            <div class="helv text-6xl lg:text-7xl tracking-tight text-black text-opacity-80 ">Shomegie Ikerodah</div>
            <div class="helv text-sm pl-1 text-black text-opacity-80 lg:tracking-wider lg:text-base">Fullstack developer, frontend designer, UI/UX designer, Svelte/Sveltekit developer, Tailwind developer</div>
        </div>
    </div>
    <div class="h-0 w-full bg-[#fffaf0]"></div>
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
<Footer />


<style>
    .helv{
        font-family: Helvetica, sans-serif;
    }
    .trap{
        border-bottom: 100vh solid #F2FDFF;
        border-right: 35vw solid transparent;
    }

    .pattern{
        background-color: #f2fdff;
background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Ehoundstooth%3C/title%3E%3Cg fill='%23f7dec8' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 18h6l6-6v6h6l-6 6H0M24 18v6h-6M24 0l-6 6h-6l6-6M12 0v6L0 18v-6l6-6H0V0'/%3E%3C/g%3E%3C/svg%3E");
    }

    .pattern2{
        background-color: #f2fdff;
        background-color: #fed8b7;
background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23f7dec8' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
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
        background-color: #f7dec8;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:-25;
        transform: skew(-14deg);

    }
 </style>