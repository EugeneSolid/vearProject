<script>
import SwapBlock from "@/components/swap/SwapBlock.vue";
import SwapGraphic from "@/components/swap/SwapGraphic.vue";

export default {
  name: "SwapSection",
  components: {SwapGraphic, SwapBlock},
  data() {
    return {
      openGraph: false,
      tokenFrom: {
        name: 'USDT',
        icon: '/vearProject/images/currencies/usdt.svg',
        title: 'Tether',
        price: '23467.34'
      },
      tokenTo: {
        name: 'LE10001',
        icon: '/vearProject/images/currencies/le.svg',
        title: 'Property Coin',
        price: '20856.12'
      }
    }
  },
  methods: {
    showGraph() {
      this.openGraph = !this.openGraph
    },
    selectToken(data, type) {
      switch (type) {
        case 'from':
          this.tokenFrom = data
          break;
        case 'to':
          this.tokenTo = data
          break
      }
    }
  }
}
</script>

<template>
<div class="d-flex swap-section">
  <SwapBlock @showGraph="() => this.showGraph()" @selectToken="selectToken"/>
  <SwapGraphic :tokenFrom="tokenFrom" :tokenTo="tokenTo" v-if="openGraph"/>
</div>
</template>

<style scoped>

</style>