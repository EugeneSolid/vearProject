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
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1230-1232 Dartmouth St',
          number: 'LE0001',
          address: 'Scranton, PA 18504, USA',
          tokensCount: '363',
          income: '$1,447',
          rent: '$1,905'
        },
        {
          image: '/vearProject/images/properties/property-2.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1411-1413 Pine Street',
          number: 'LE0002',
          address: 'Scranton, PA 18510, USA',
          tokensCount: '452',
          income: '$3,256',
          rent: '$2,251'
        },
        {
          image: '/vearProject/images/properties/property-3.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1427-1429-1431 Washburn St',
          number: 'LE0003',
          address: 'Scranton, PA 18504, USA',
          tokensCount: '356',
          income: '$1,816',
          rent: '$2,771'
        },
        {
          image: '/vearProject/images/properties/property-4.jpg',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: 'Stefan Cel Mare 131',
          number: 'LE0004',
          address: 'Radauti, Suceava, Romania',
          tokensCount: '452',
          income: '$1,897',
          rent: '$1,338'
        },
        {
          image: '/vearProject/images/properties/property-5.jpg',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: 'Gardendale Business Park',
          number: 'LE0005',
          address: '707-5709 Gardendale Dr, Houston, TX 77092',
          tokensCount: '125',
          income: '$2,482',
          rent: '$3,118'
        },
        {
          image: '/vearProject/images/properties/property-6.jpg',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: 'Texas Storage Facility',
          number: 'LE0006',
          address: '1609 Lakeland Dr, Liberty, TX 77575',
          tokensCount: '520',
          income: '$1,897',
          rent: '$1,550'
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
          <p class="mb-2 currency-value">11,000 USD</p>
        </div>
        <div class="d-flex justify-content-between w-100">
          <p class="currency-total-value">11,000 USDC</p>
          <p class="currency-changes up"><i class="fi fi-sr-caret-up"></i>28%</p>
        </div>
      </div>
    </div>
    <div class="d-flex currency-block gap-3 align-items-center">
      <img class="currency-img" src="/vearProject/images/currencies/usdt.svg"/>
      <div class="w-100">
      <div class="d-flex justify-content-between w-100">
        <p class="mb-2 currency-name">USDT</p>
        <p class="mb-2 currency-value">5,000 USD</p>
      </div>
      <div class="d-flex justify-content-between w-100">
        <p class="currency-total-value">11,000 USDT</p>
        <p class="currency-changes down"><i class="fi fi-sr-caret-down"></i>14.5%</p>
      </div>
      </div>
    </div>
    <div class="d-flex currency-block gap-3 align-items-center">
      <img class="currency-img" src="/vearProject/images/currencies/lidq.svg"/>
      <div class="w-100">
        <div class="d-flex justify-content-between w-100">
          <p class="mb-2 currency-name">LIDQ</p>
          <p class="mb-2 currency-value">9,000 USD</p>
        </div>
        <div class="d-flex justify-content-between w-100">
          <p class="currency-total-value">85,000 LIDQ</p>
          <p class="currency-changes down"><i class="fi fi-sr-caret-down"></i>20.5%</p>
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