<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import SwapBlock from "@/components/swap/SwapBlock.vue";
import SwapHeader from "@/components/swap/SwapHeader.vue";
import SwapSection from "@/components/swap/SwapSection.vue";

export default {
  name: "Swap",
  components: {SwapSection, SwapHeader, SwapBlock, DefaultLayout},
  data() {
    return {
      selectedType: 'simple'
    }
  }
}
</script>

<template>
<default-layout>
  <div class="swap">
    <p class="title mb-4">Swap Tokens</p>
    <SwapHeader/>
    <div class="d-flex property-view-toggler mb-4">
      <button @click="this.selectedType = 'simple'"
              :class="{'toggler-btn d-flex align-items-center justify-content-center': true,
              'selected': this.selectedType === 'simple'}">Simple Mode</button>
      <button @click="this.selectedType = 'expert'"
              :class="{'toggler-btn d-flex align-items-center justify-content-center': true,
              'selected': this.selectedType === 'expert'}"> Expert Mode</button>
    </div>
    <SwapSection :mode="this.selectedType"/>
  </div>
</default-layout>
</template>

<style scoped>

</style>