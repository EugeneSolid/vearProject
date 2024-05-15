<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PropertyItem from "@/components/properties/PropertyItem.vue";

export default {
  name: "Marketplace",
  components: {PropertyItem, DefaultLayout},
  data() {
    return {
      selectedType: 'new',
      properties: [
        {
          image: '/images/properties/property-1.png',
          type: {name: 'Comercial', icon: 'fi fi-ss-building'},
          name: '1230-1232 Dartmouth St',
          number: 'LE0001',
          address: 'Scranton, PA 18504, USA',
          total: '$231,500',
          income: '9.9%',
          rent: '$1,905'
        },
        {
          image: '/images/properties/property-2.png',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: '1411-1413 Pine Street',
          number: 'LE0002',
          address: 'Scranton, PA 18510, USA',
          total: '$266,150',
          income: '10.1%',
          rent: '$2,251'
        },
        {
          image: '/images/properties/property-3.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1427-1429-1431 Washburn St',
          number: 'LE0003',
          address: 'Scranton, PA 18504, USA',
          total: '$243,050',
          income: '13.7%',
          rent: '$2,771'
        },
        {
          image: '/images/properties/property-1.png',
          type: {name: 'Comercial', icon: 'fi fi-ss-building'},
          name: '1230-1232 Dartmouth St',
          number: 'LE0001',
          address: 'Scranton, PA 18504, USA',
          total: '$231,500',
          income: '9.9%',
          rent: '$1,905'
        },
        {
          image: '/images/properties/property-2.png',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: '1411-1413 Pine Street',
          number: 'LE0002',
          address: 'Scranton, PA 18510, USA',
          total: '$266,150',
          income: '10.1%',
          rent: '$2,251'
        },
        {
          image: '/images/properties/property-3.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1427-1429-1431 Washburn St',
          number: 'LE0003',
          address: 'Scranton, PA 18504, USA',
          total: '$243,050',
          income: '13.7%',
          rent: '$2,771'
        },
        {
          image: '/images/properties/property-1.png',
          type: {name: 'Comercial', icon: 'fi fi-ss-building'},
          name: '1230-1232 Dartmouth St',
          number: 'LE0001',
          address: 'Scranton, PA 18504, USA',
          total: '$231,500',
          income: '9.9%',
          rent: '$1,905'
        },
        {
          image: '/images/properties/property-2.png',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: '1411-1413 Pine Street',
          number: 'LE0002',
          address: 'Scranton, PA 18510, USA',
          total: '$266,150',
          income: '10.1%',
          rent: '$2,251'
        },
        {
          image: '/images/properties/property-3.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1427-1429-1431 Washburn St',
          number: 'LE0003',
          address: 'Scranton, PA 18504, USA',
          total: '$243,050',
          income: '13.7%',
          rent: '$2,771'
        },
      ]
    }
  }
}
</script>

<template>
  <default-layout>
    <div class="marketplace">
      <div class="marketplace__header">
        <h1 class="mb-2 title">Browse Properties</h1>
        <p class="mb-2 description">Invest in real estate with as little as 100$, Transactions using the blockchain,
          Earn rent immediately, Real legal ownership, Sell any time</p>
      </div>
      <div class="mt-3">
        <div class="d-flex property-view-toggler mb-4">
          <button @click="this.selectedType = 'new'"
                  :class="{'toggler-btn': true, 'selected': this.selectedType === 'new'}">New Listings
          </button>
          <button @click="this.selectedType = 'secondary'"
                  :class="{'toggler-btn': true, 'selected': this.selectedType === 'secondary'}">Secondary Market
          </button>
        </div>
        <div class="properties-list">
          <div class="col-4" v-for="property in this.properties">
            <PropertyItem  :property="property"/>
          </div>

        </div>
      </div>

    </div>
  </default-layout>
</template>

<style scoped>

</style>