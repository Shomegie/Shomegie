<script>
    import ProjectCard from "../../../components/project_card.svelte";
	import ProjectCard_2 from "../../../components/project_card_2.svelte";

    const projects = [
        {
            name:'Spotify Artist Top Track Preview',
            tech:'Svelte, Sveltekit, Tailwind, SpotifyAPI',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe aspernatur recusandae a',
            github:'link_url',
            site:'link_url'
        },
        {
            name:'BlackJack2022',
            tech:'Svelte, Sveltekit, Tailwind',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe aspernatur recusandae a.',
            github:'link_url',
            site:'link_url'
        },
        {
            name:'Nithalos International School',
            tech:'Svelte, Sveltekit, Tailwind',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe aspernatur recusandae a',
            github:'link_url',
            site:'link_url'
        }
    ]


</script>
<div class="w-full pt-6">
    <div class="min-h-[50vh] flex flex-col w-5/6 sm:w-4/6 mx-auto">
        <div class="text-2xl lg:text-3xl tracking-tight w-fit bg-[#f7dec8] text-black py-1 px-2 pr-10 text-opacity-90 mb-1">Projects</div>
        <div class="w-full border-b border-stone-50 mx-auto mt-4 mb-3 divider"></div>


        <!-- <div class="w-5/6 mx-auto pb-4">
            <div class="text-3xl lg:text-4xl tracking-tight w-fit bg-[#f7dec8] text-black px-2 py-1 pr-10 text-opacity-90">Projects</div>
        </div> -->


        <div class="w-full mt-2 mx-auto grid grid-cols-2 gap-8 ">
            {#each projects as project }
                <ProjectCard_2 {project} />
            {/each}
        </div>

    <!-- 
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 md:gap-10  w-fit mx-auto lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">

            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />

        </div> -->



    </div>
</div>