<script lang="ts">
    import CssUnits from "./ui/pages/css-units/index.svelte";
    import CursorNotice from "@/ui/components/Cursor/Notice/index.svelte";
    import themeManager from "@/state/theme/index.svelte";
    import { onMount } from "svelte";

    // init theme
    onMount(() => {
        themeManager.init();
    });
</script>

<main>
    <CssUnits />
    <CursorNotice />
</main>
