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
          image: '/vearProject/images/properties/property-1.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1230-1232 Dartmouth St',
          number: 'LE0001',
          address: 'Scranton, PA 18504, USA',
          total: '$231,500',
          income: '9.9%',
          rent: '$1,905',
          display: 'new'
        },
        {
          image: '/vearProject/images/properties/property-2.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1411-1413 Pine Street',
          number: 'LE0002',
          address: 'Scranton, PA 18510, USA',
          total: '$266,150',
          income: '10.1%',
          rent: '$2,251',
          display: 'secondary'
        },
        {
          image: '/vearProject/images/properties/property-3.png',
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1427-1429-1431 Washburn St',
          number: 'LE0003',
          address: 'Scranton, PA 18504, USA',
          total: '$243,050',
          income: '13.7%',
          rent: '$2,771',
          display: 'secondary'
        },
        {
          image: '/vearProject/images/properties/property-4.jpg',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: 'Stefan Cel Mare 131',
          number: 'LE0004',
          address: 'Radauti, Suceava, Romania',
          total: '$634,500',
          income: '9.9%',
          rent: '$6,240',
          display: 'secondary'
        },
        {
          image: '/vearProject/images/properties/property-5.jpg',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: 'Gardendale Business Park',
          number: 'LE0005',
          address: '707-5709 Gardendale Dr, Houston, TX 77092',
          total: '$4,299,999',
          income: '6.84%',
          rent: '$29,410',
          display: 'new'
        },
        {
          image: '/vearProject/images/properties/property-6.jpg',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: 'Texas Storage Facility',
          number: 'LE0006',
          address: '1609 Lakeland Dr, Liberty, TX 77575',
          total: '$553,270',
          income: '9.85%',
          rent: '$5,530',
          display: 'new'
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
        <p class="mb-2 description">Invest in real estate with as little as $10. Real legal ownership. Blockchain
          transactions.
          Earn rent immediately. Sell anytime.</p>
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
        <div v-if="this.selectedType === 'new'" class="properties-list">
          <div class="col-4" v-for="property in this.properties">
            <PropertyItem :property="property" :is-sold-out="true"/>
          </div>
        </div>
        <div v-else class="properties-list">
          <div class="col-4" v-for="property in this.properties" v-show="property.display === 'secondary'">
            <PropertyItem :property="property"/>
          </div>
        </div>
      </div>

    </div>
  </default-layout>
</template>

<style scoped>

</style>