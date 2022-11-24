<script>
    import { goto } from "$app/navigation";
    import Footer from "../../components/footer.svelte"

    let menu =`text-black text-opacity-70 font-thin cursor-pointer hover:text-opacity-100 transition duration-150 py-2 px-3`
</script>

<div  class=" min-h-screen bg-[#F2FDFF] w-full flex flex-col helv pb-16">
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

    <div class="hidden sm:flex h-[240px] bg-[#F7DEC8] pattern2 w-full items-center justify-center">
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
background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23f7dec8' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
 </style>