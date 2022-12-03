<script>
    import Icon from '@iconify/svelte';

    export let icon;
    export let text;

</script>

<div class=" rounded-lg w-fit max-w-[60px] h-fit p-0 pt-10 sm:pt-0">
    <div class="img">
        <Icon icon={icon} height="20" width="60" />
    </div>
    <div class="name pt-2 w-fit mx-auto text-center leading-3 text-stone-600 sm:text-cyan-800 text-sm">{text}</div>
</div>