<script>
    import TechTile from "../../../components/tech_tile.svelte";
    import ToolTile from "../../../components/tool_tile.svelte";
    let other_Skills = ''
</script>

<div class=" w-full pt-6">
    <div class="flex flex-col w-5/6 sm:w-4/6 mx-auto ">
        <div class="text-2xl lg:text-3xl tracking-tight w-fit bg-[#f7dec8] text-black py-1 px-2 pr-10 text-opacity-90 mb-1">About Me</div>
        <div class="w-full border-b border-stone-100 mx-auto mt-4 mb-3 divider"></div>

    </div>
    <div class="flex flex-col">
        <div class="bg-white">
            <div class="w-5/6 lg:w-4/6 flex flex-col space-y-4 mx-auto">
                <div class="flex flex-col w-full pt-1">
                    <div class="w-full lg:w-5/6 text-lg font-sans leading-7 text-stone-800">Hi, I'm a software developer specializing in building digital intepretations of websites, games and applications. I have a diverse background in computer-science, however I'm currently focused on web development with node, express, svelte/sveltekit, mongo & tailwind. 
                        As a subset of these interests, I can also be described as: 
                    </div>
                    <div class= "w-full text-md font-sans text-stone-700 pt-3">
                        <ul class="w-5/6 pl-4 mx-auto font-bold">
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
        <div class="w-5/6 border-b border-stone-100 mx-auto py-4 divider"></div>
        <div class="Skills bg-white pt-6 ">
            <div class="w-4/6 mx-auto">
                <div class="w-fit mx-auto bg-stone-600 text-white text-lg font-thin px-3 py-0 rounded">Skills & Technologies I use in web development</div>
                <div class="grid grid-cols-6 gap-y-4 m-auto pt-10">
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
        <div class="w-4/6 border-b border-stone-100 mx-auto py-4 divider"></div>
        <div class="Tools pt-6">
            <div class="w-4/6 mx-auto">
                <div class="w-fit mx-auto text-white  bg-stone-600 text-lg font-thin px-3 rounded">Tools I use in web development</div>
                    <div class="tools flex space-x- pt-8 justify-between">
                        <ToolTile text="Vs Code" icon="vscode-icons:file-type-vscode"/>
                        <ToolTile text="Mac Terminal" icon="ion:terminal"/>
                        <ToolTile text="Windows Terminal" icon="vscode-icons:file-type-powershell"/>
                        <ToolTile text="Linux" icon="logos:ubuntu"/>
                        <ToolTile text="Android Studio" icon="logos:android-icon"/>
                        <ToolTile text="R Studio" icon="logos:r-lang"/>
                        <ToolTile text="Pycharm" icon="logos:pycharm"/>


                    </div>


            </div>
        </div>
        <div class="w-4/6 border-b border-stone-100 mx-auto py-4 divider"></div>
        <div class="Tools pt-6">
            <div class="w-4/6 mx-auto">
                <div class="w-fit mx-auto text-white  bg-stone-600 text-lg font-thin px-3 rounded">Tools I use in design</div>
                    <div class="tools flex pt-6 space-x-3 justify-center">
                        <ToolTile text="Sketch UI" icon="vscode-icons:file-type-sketch"/>
                        <ToolTile text="Figma" icon="logos:figma"/>
                        <ToolTile text="Affinity Designer" icon="vscode-icons:file-type-affinitydesigner"/>
                        <ToolTile text="Pixelmator" icon="flat-color-icons:photo-reel"/>
                    </div>


            </div>
        </div>
        <div class="w-4/6 border-b border-stone-100 mx-auto py-4 divider"></div>
        <div class="others pt-6">
            <div class="w-4/6 mx-auto">
                <div class="w-fit mx-auto text-white  bg-stone-600 text-lg font-thin px-3 rounded">Other Skills</div>
                <ul class="flex flex-wrap space-x-3 place-content-center pt-2">
                    <li class={other_Skills}>Python</li>
                    <li class={other_Skills}>Django</li>
                    <li class={other_Skills}>Flask</li>
                    <li class={other_Skills}>Android</li>
                    <li class={other_Skills}>C/C++</li>
                    <li class={other_Skills}>R</li>
                    <li class={other_Skills}>REST API's</li>
                    <li class={other_Skills}>Styled Components</li>
                    <li class={other_Skills}>SQL</li>
                    <li class={other_Skills}>NoSql</li>
                    <li class={other_Skills}>Unix/Linux</li>
										<li class={other_Skills}>Scripting</li>

                </ul>
            </div>
        </div>
				<div class="w-4/6 border-b border-stone-100 mx-auto py-4 divider"></div>
        <div class="others pt-6">
            <div class="w-4/6 mx-auto">
                <div class="w-fit mx-auto text-white  bg-stone-600 text-lg font-thin px-3 rounded">Interests</div>
								<div class="Interests">
									<ul class="flex flex-wrap space-x-3 place-content-center pt-2" >
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

        

     
    </div>
</div>