<script>
import PortfolioPropertyItem from "@/components/properties/PortfolioPropertyItem.vue";

export default {
  name: "PortfolioGridView",
  components: {PortfolioPropertyItem},
  data() {
    return {
      selectedType: 'new',
      properties: [
        {
          image: '/vearProject/images/properties/property-1.png',
          type: {name: 'Comercial', icon: 'fi fi-ss-building'},
          name: '1230-1232 Dartmouth St',
          number: 'LE0001',
          address: 'Scranton, PA 18504, USA',
          tokensCount: '363',
          income: '$1447',
          rent: '$1905'
        },
        {
          image: '/vearProject/images/properties/property-2.png',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: '1411-1413 Pine Street',
          number: 'LE0002',
          address: 'Scranton, PA 18510, USA',
          tokensCount: '452',
          income: '$3256',
          rent: '$2251'
        },
        {
          image: '/vearProject/images/properties/property-3.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1427-1429-1431 Washburn St',
          number: 'LE0003',
          address: 'Scranton, PA 18504, USA',
          tokensCount: '356',
          income: '$1816',
          rent: '$2771'
        },
        {
          image: '/vearProject/images/properties/property-1.png',
          type: {name: 'Comercial', icon: 'fi fi-ss-building'},
          name: '1230-1232 Dartmouth St',
          number: 'LE0001',
          address: 'Scranton, PA 18504, USA',
          tokensCount: '363',
          income: '$1447',
          rent: '$1905'
        },
        {
          image: '/vearProject/images/properties/property-2.png',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: '1411-1413 Pine Street',
          number: 'LE0002',
          address: 'Scranton, PA 18510, USA',
          tokensCount: '452',
          income: '$3256',
          rent: '$2251'
        },
        {
          image: '/vearProject/images/properties/property-3.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1427-1429-1431 Washburn St',
          number: 'LE0003',
          address: 'Scranton, PA 18504, USA',
          tokensCount: '356',
          income: '$1816',
          rent: '$2771'
        },
      ]
    }
  }
}
</script>

<template>
<div class="portfolio-list__grid">
  <div class="d-flex w-100 justify-content-between">
    <div class="d-flex currency-block gap-3 align-items-center">
      <img class="currency-img" src="/vearProject/images/currencies/usdc.svg"/>
      <div class="w-100">
        <div class="d-flex justify-content-between w-100">
          <p class="mb-2 currency-name">USDC</p>
          <p class="mb-2 currency-value">11.000 USD</p>
        </div>
        <div class="d-flex justify-content-between w-100">
          <p class="currency-total-value">11.000 USDC</p>
          <p class="currency-changes up"><i class="fi fi-sr-caret-up"></i>28%</p>
        </div>
      </div>
    </div>
    <div class="d-flex currency-block gap-3 align-items-center">
      <img class="currency-img" src="/vearProject/images/currencies/usdt.svg"/>
      <div class="w-100">
      <div class="d-flex justify-content-between w-100">
        <p class="mb-2 currency-name">USDT</p>
        <p class="mb-2 currency-value">5.000 USD</p>
      </div>
      <div class="d-flex justify-content-between w-100">
        <p class="currency-total-value">11.000 USDT</p>
        <p class="currency-changes down"><i class="fi fi-sr-caret-down"></i>-14.5%</p>
      </div>
      </div>
    </div>
    <div class="d-flex currency-block gap-3 align-items-center">
      <img class="currency-img" src="/vearProject/images/currencies/lidq.svg"/>
      <div class="w-100">
        <div class="d-flex justify-content-between w-100">
          <p class="mb-2 currency-name">LIDQ</p>
          <p class="mb-2 currency-value">9.000 USD</p>
        </div>
        <div class="d-flex justify-content-between w-100">
          <p class="currency-total-value">85000 LIDQ</p>
          <p class="currency-changes down"><i class="fi fi-sr-caret-down"></i>-20.5%</p>
        </div>
      </div>
    </div>
  </div>
  <div class="properties-section">
    <div class="col-4" v-for="property in this.properties">
      <PortfolioPropertyItem :property="property"/>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>