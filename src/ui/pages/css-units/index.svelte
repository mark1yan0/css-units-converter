<script lang="ts">
    import ThemeSwitcher from "@/ui/components/ThemeSwitcher/index.svelte";
    import ConvertField from "./convert_field.svelte";
    import BaseUnit from "./base_unit.svelte";
    import converter from "@/state/converter/index.svelte";
</script>

<header class="flex items-center justify-between">
    <h1 class="animated-text text-4xl">REM to PX Converter</h1>
    <ThemeSwitcher />
</header>

<div class="flex flex-col items-center">
    <ConvertField label="REM Value" id="rem" bind:value={converter.rem} />

    <ConvertField label="PX Value" id="px" bind:value={converter.px} />
</div>

<!-- TODO: make base size editable -->
<footer class="mt-4 text-center text-sm">
    <BaseUnit />
    <!-- <p>1rem = 16px on your current browser</p> -->
</footer>
