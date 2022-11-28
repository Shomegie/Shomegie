<script>
    import Icon from '@iconify/svelte';

    export let icon;
    export let text;

</script>

<div class=" rounded-lg w-fit h-fit p-0 bg-yellow-500">
    <div class="img">
        <Icon icon={icon} height="40" width="80" />
    </div>
    <div class="name w-fit mx-auto text-stone-600 text-sm">{text}</div>
</div>