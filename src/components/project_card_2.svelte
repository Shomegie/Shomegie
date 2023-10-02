<!-- <div class="w-full h-44 bg-lime-100 flex">
    <div class="h-full w-1/3 bg-stone-200"></div>
    <div class="h-full w-2/3 py-2 pl-2 pr-2 -space-y-1 relative">
        <div class="text-xl tracking-tight font-bold m-0 p-0">Spotify Artist Top Track Preview</div>
        <div class="text-sm text-blue-700 m-0 p-0">[Svelte, Sveltekit, Tailwind, HTML, CSS, JavaScript]</div>
        <p class="pt-4">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum ipsa deserunt.</p>
        <div class="links absolute bottom-1 text-sky-600">[github] [live-site]</div>
    </div>
</div> -->
<script>
    import Movie from "./icons/movie.svelte";
    import Music from "./icons/music.svelte";
    import Games from "./icons/games.svelte";
    export let project;
 
</script>

<div class="flex flex-col h-fit">
    <a href={project.site} class="" rel="noreferrer" target="_blank" >
        <div class="w-full h-24 md:h-32 lg:h-40 bg-gray-800 flex text-sky-400 cursor-pointer hover:bg-gray-900 transition duration-300">
            <div class="h-full hidden sm:flex w-1/3 items-center justify-center bg-[#555] border border-b-0 border-orange-200 border-r-0">
                {#if project.icon == 0}
                    <Games />
                {/if}
                {#if project.icon == 1}
                    <Music />
                {/if}
                {#if project.icon == 2}
                    <Movie />
                {/if}
            </div>
            <div class="h-full w-full sm:w-2/3 py-2 pl-2 pr-2 -space-y-1 relative border border-orange-200 border-b-0 border-l-0">
                <div class="text-base lg:text-xl tracking-tight font-bold leading-4 m-0 p-0">{project.name}</div>
                <div class="text-xs lg:text-md text-blue-500 m-0 pt-1 lg:pt-0">[{project.tech}]</div>
                <p class="pt-2 lg:pt-4 text-gray-400 text-xs tracking-tight lg:text-base">Desc: {project.desc}</p>
            </div>
        </div>
    </a> 
    <div class="bg-[#efbc8f] sm:bg-[#e7b487] lg:bg-orange-200 h-8 w-full relative">
        <div class="links flex absolute text-sm lg:text-base bottom-1 text-sky-700 font-bold space-x-2 justify-end w-full pr-2 lg:pr-8"><span class="hover:text-gray-800 cursor-pointer"><a href={project.github} class="" rel="noreferrer" target="_blank" >[github]</a></span><span class="cursor-pointer hover:text-gray-900"><a href={project.site} class="" rel="noreferrer" target="_blank" >[live-site]</a></span></div>
    </div>
</div>
