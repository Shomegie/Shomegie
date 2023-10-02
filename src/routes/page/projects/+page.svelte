<script>
	import ProjectCard_2 from "../../../components/project_card_2.svelte";


    const projects = [
        {
            name:'Spoilers.IO',
            tech:'Svelte, Sveltekit, Tailwind, Skeleton UI, TMDB API',
            desc:'Designed & Implemented a site for interacting with movie and tv show details',
            github:'https://github.com/gm-io/spoilers',
            site:'https://spoilers-gm-io.vercel.app/',
            icon:2
        },
        {
            name:'Spotify Artist Top Track Preview',
            tech:'Svelte, Sveltekit, Tailwind, SpotifyAPI',
            desc:'Designed & implemented a mini spotify application to preview top songs of a selected artist...',
            github:'https://github.com/Shomegie/Spotify2022',
            site:'https://spotify2022.vercel.app',
            icon:1
        

        },
        {
            name:'BlackJack2022',
            tech:'Svelte, Sveltekit, Tailwind',
            desc:'Designed & implemented a standalone blackjack game vs a computer...',
            github:'https://github.com/Shomegie/BlackJack2022',
            site:'https://blackjack-shomegie.vercel.app',
            icon:0
        }
    ]


</script>
<div class="w-full pt-6">
    <div class="min-h-[50vh] flex flex-col w-5/6 lg:w-4/6 mx-auto">
        <div class="text-2xl lg:text-3xl tracking-tight w-fit bg-[#facfa8] text-black py-1 px-2 pr-10 text-opacity-90 mb-1">Projects</div>
        <div class="w-full border-b border-stone-50 mx-auto mt-1 mb-3 divider"></div>

        <div class="w-full mt-1 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 ">
            {#each projects as project }
                <ProjectCard_2 {project} />
            {/each}
        </div>
    </div>
</div>