<script>
    import {page} from '$app/stores'
    export let form;
    // export let data;

    console.log($page.form)



</script>

<div class="w-full pt-6">
    <div class="flex flex-col w-5/6 sm:w-4/6 mx-auto ">
        <div class="text-2xl lg:text-3xl tracking-tight w-fit bg-[#f7dec8] text-black py-1 px-2 pr-10 text-opacity-90 mb-1">Contact Me</div>
        <div class="text-sm tracking-tight mb-6 text-black text-opacity-80">Please fill the form below to get in touch. Please provide a subject for the message as well. Thanks.</div>
        <div class="myForm w-full">
            <form class="flex flex-col w-full space-y-6" method="POST">
                <div class="flex w-full space-x-2">
                    <input class="focus:outline-none focus:border-stone-400 w-1/2 border-2 rounded-lg border-stone-600 pl-2 py-1" placeholder="name" type="text" name="name" required>
                    
                    <input class="focus:outline-none focus:border-stone-400 w-1/2 border-2 rounded-lg border-stone-600 pl-2 py-1" placeholder="email" type="email" name="email" required>
                </div>

                <input class="focus:outline-none focus:border-stone-400 w-full border-2 rounded-lg border-stone-600 pl-2 py-1"  placeholder="subject" type="text" name="subject" required>
                <textarea placeholder="your message" class="focus:outline-none focus:border-stone-400 border-2 rounded pt-1 pl-2 border-stone-600"  rows="6" name="message" required></textarea>

                <div class="w-full">
                    <button class="  w-1/2 mx-auto block bg-black text-white rounded-full py-3 px-5 text-sm cursor-pointer hover:bg-blue-700 hover:text-white transition duration-200" type="submit">Send</button>
                </div>
                
           </form>
        </div>
        {#if form?.val}
            <div class="bg-red-500 text-center mt-10 ">{$page.form.body.message} has logged in</div>
        {/if}
    </div>
</div>