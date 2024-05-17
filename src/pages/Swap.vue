<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import SwapBlock from "@/components/swap/SwapBlock.vue";

export default {
  name: "Swap",
  components: {SwapBlock, DefaultLayout}
}
</script>

<template>
<default-layout>
  <div class="swap">
    <SwapBlock/>
  </div>
</default-layout>
</template>

<style scoped>

</style>