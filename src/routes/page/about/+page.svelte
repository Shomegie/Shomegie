<script>
    import TechTile from "../../../components/tech_tile.svelte";
</script>

<div class=" w-full pt-6">
    <div class="flex flex-col w-5/6 sm:w-4/6 mx-auto ">
        <div class="text-2xl lg:text-3xl tracking-tight w-fit bg-[#f7dec8] text-black py-1 px-2 pr-10 text-opacity-90 mb-1">About Me</div>
    </div>
    <div class="flex flex-col">
        <div class="bg-white">
            <div class="w-4/6 flex flex-col space-y-4 mx-auto">
                <div class="flex flex-col w-full pt-1">
                    <div class="w-full lg:w-5/6 text-md font-sans leading-6 text-stone-800">Hi, I'm a software developer specializing in building digital intepretations of websites, games and applications. I have a diverse background in computer-science, however I'm currently focused on web development with node, express, svelte/sveltekit, mongo & tailwind. 
                        As a subset of these interests, I can also be described as: 
                    </div>
                    <div class= "w-full text-sm font-sans text-stone-700 pt-3">
                        <ul class="w-5/6 mx-auto font-bold">
                            <li>1. A svelte/sveltekit developer. (Frontend Developer)</li>
                            <li>2. A tailwind front-end developer. (Frontend Developer)</li>
                            <li>3. A MESN developer (Mongo, Express, Svelte & Node). (Fullstack Developer) </li>
                        </ul>
                    </div>
                </div>

                <!-- <div class="">Education
                    <br>
                    Computer Science  - Lancaster University
                </div> -->
            </div>
        </div>
        <div class="w-4/6 border-b border-black mx-auto py-4 divider"></div>
        <div class="Skills bg-white pt-6 ">
            <div class="w-4/6 mx-auto">
                <div class="w-fit mx-auto bg-black text-white text-md font-thin px-3">Skills & Technologies I use in web development</div>
                <div class="grid grid-cols-6 gap-y-4 m-auto pt-6">
                    <TechTile text="HTML5" icon="icomoon-free:html-five" />
                    <TechTile text="CSS3" icon="ion:logo-css3" />
                    <TechTile text="Javascript" icon="teenyicons:javascript-outline" />
                    <TechTile text="Svelte" icon="cib:svelte" />
                    <TechTile text="SvelteKit" icon="teenyicons:svelte-outline" />
                    <TechTile text="Tailwind" icon="mdi:tailwind" />

                    <TechTile text="Node" icon="la:node" />
                    <TechTile text="Express" icon="simple-icons:express" />
                    <TechTile text="jQuery" icon="cib:jquery" />
                    <TechTile text="MongoDB" icon="simple-icons:mongodb" />
                    <TechTile text="Git" icon="mdi:git" />
                    <TechTile text="Github" icon="icon-park:github" />
                </div>
            </div>
        </div>
        <div class="w-4/6 border-b border-black mx-auto py-4 divider"></div>
        <div class="Tools pt-6">
            <div class="w-4/6 mx-auto">
                <div class="w-fit mx-auto border border-black text-black  text-md font-thin px-3">Tools I use in web development</div>
            </div>
        </div>


        
        <!-- <div class="Skills bg-white ">

            <div class="bg-red-500 w-4/6 mx-auto">
                <div class="">Skills & tools I use in web development:</div>
                <div class="grid grid-cols-6 gap-y-4 m-auto">
                    <TechTile text="HTML5" icon="icomoon-free:html-five" />
                    <TechTile text="CSS3" icon="ion:logo-css3" />
                    <TechTile text="Javascript" icon="teenyicons:javascript-outline" />
                    <TechTile text="Svelte" icon="cib:svelte" />
                    <TechTile text="SvelteKit" icon="teenyicons:svelte-outline" />
                    <TechTile text="Tailwind" icon="mdi:tailwind" />

                    <TechTile text="Node" icon="la:node" />
                    <TechTile text="Express" icon="simple-icons:express" />
                    <TechTile text="jQuery" icon="cib:jquery" />
                    <TechTile text="MongoDB" icon="simple-icons:mongodb" />
                    <TechTile text="Git" icon="mdi:git" />
                    <TechTile text="Github" icon="icon-park:github" />
                </div>
            </div>
        </div> -->
        <div class="Tools">
            programming Tools
            <ul>
                <li>Github</li>
                <li>Vs Code</li>
                <li>Mac Terminal</li>
                <li>Windows Powershell</li>
                <li>Linux/Ubuntu terminal</li>
                <li>Android Studio</li>
                <li>R Studio</li>
                <li>Jupyter</li>
            </ul>
            Design Tools
            <ul>
                <li>Sketch UI (Mac)</li>
                <li>Figma</li>
                <li>Affinity Designer</li>
                <li>Pixelmator</li>
            </ul>
        </div>

        <div class="OtherSkills">
            other skills
            <ul>
                <li>Python</li>
                <li>Django</li>
                <li>Flask</li>
                <li>Android Development</li>
                <li>C/C++</li>
                <li>R</li>
                <li>REST API's</li>
                <li>Styled Components</li>
                <li>SQL</li>
                <li>NoSql</li>
                <li>Unix/Linux</li>
            </ul>
        </div>

        <div class="Interests">
            <ul>
                <li>Music</li>
                <li>Mathematics</li>
                <li>Data in music</li>
                <li>Data in sports</li>
                <li>Data visualization</li>
                <li>Spotify API</li>
                <li>Public Speaking</li>
                <li>Design</li>
            </ul>

        </div>

        

     
    </div>
</div>