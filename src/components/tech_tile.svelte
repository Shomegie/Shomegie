<script>
    import Icon from '@iconify/svelte';

    export let icon;
    export let text;

</script>

<div class=" rounded-lg w-fit h-fit p-0 place-content-center pb-0 lg:pb-4">
    <div class="img">
        <Icon icon={icon} height="40" width="80" />
    </div>
    <div class="name pb-1 pt-1 w-fit mx-auto text-stone-600 sm:text-teal-800 text-sm">{text}</div>
</div>