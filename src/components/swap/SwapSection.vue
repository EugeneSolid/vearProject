<script>
import SwapBlock from "@/components/swap/SwapBlock.vue";
import SwapGraphic from "@/components/swap/SwapGraphic.vue";

export default {
  name: "SwapSection",
  components: {SwapGraphic, SwapBlock},
  props: ['mode'],
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
  <SwapBlock @selectToken="selectToken" :is-graph-opened="mode === 'expert'"/>
  <div class="swap-graphic" v-if="mode === 'expert'">
  <SwapGraphic :tokenFrom="tokenFrom" :tokenTo="tokenTo"/>
  </div>
</div>
</template>

<style scoped>

</style>