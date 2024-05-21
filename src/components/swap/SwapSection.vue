<script>
import SwapBlock from "@/components/swap/SwapBlock.vue";
import SwapGraphic from "@/components/swap/SwapGraphic.vue";

export default {
  name: "SwapSection",
  components: {SwapGraphic, SwapBlock},
  data() {
    return {
      openGraph: false,
    }
  },
  methods: {
    showGraph() {
      this.openGraph = !this.openGraph
    }
  }
}
</script>

<template>
<div class="d-flex swap-section">
  <SwapBlock @showGraph="() => this.showGraph()"/>
  <SwapGraphic v-if="openGraph"/>
</div>
</template>

<style scoped>

</style>