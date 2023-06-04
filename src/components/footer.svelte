<script>
    import { goto } from "$app/navigation";

    let footer_nav = 'text-gray-300 sm:text-stone-700 text-opacity-30 sm:text-opacity-70 underline cursor-pointer hover:text-sky-600 w-fit p-3 rounded-xl'
</script>
<div class=" sm:hidden bg-[#f4d2b5] h-1 w-full"></div>
<!-- <div class="h-1 w-full bg-[#fbe4b2]"></div> -->

<div class=" bg-black sm:bg-[#fed8b7] text-gray-50 sm:text-black tracking-wide text-opacity-60 font-bold h-fit w-full py-4">
    <div class="w-5/6 mx-auto h-full flex flex-col space-y-3">
        <div class="text-white text-opacity-10 sm:text-stone-500">Links</div>
        <div class="lorem grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs leading-5">
            <div class="h-[150px] pb-8 pt-3 text-xs">
                <ul class="h-full flex flex-col justify-between">
                    <li class="text-gray-300 sm:text-stone-600 text-opacity-30">Github:<br/><a class="text-sky-100 sm:text-stone-600 underline text-opacity-30 py-2 pr-1 hover:text-sky-600" rel="noopener noreferrer" href="https://www.github.com/shomegie" target="_blank">www.github.com/shomegie</a></li>
                    <!-- <li class="">LinkedIn:</li> -->
                    <!-- <li class="">Email:</li> -->
                </ul>

            </div>

            <div class="h-[300px] sm:h-[100px] pb-16 sm:pt-4 pl-8">
                <ul class="h-full text-black flex flex-col sm:flex-row justify-between sm:space-x-4">
                    <li on:click = {()=>{goto('/')}} on:keyup = {()=> goto('/')} class={footer_nav}>Home</li>
                    <li on:click = {()=>{goto('/page/about')}} on:keyup = {()=> goto('/page/about')} class={footer_nav}>About</li>
                    <li on:click = {()=>{goto('/page/contact')}} on:keyup = {()=> goto('/page/contact')} class={footer_nav}>Contact</li>
                    <li on:click = {()=>{goto('/page/projects')}} on:keyup = {()=> goto('/page/projects')} class={footer_nav}>Projects</li>
                </ul>
            </div>
            <!-- <div class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, at.</div> -->
        </div>
    </div>
</div>


