<script>
import PropertyItem from "@/components/properties/PropertyItem.vue";

export default {
  name: "PropertiesSection",
  components: {PropertyItem},
  data() {
    return {
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
      ]
    }
  }
}
</script>

<template>
<div class="properties">
<p class="title mb-5">Find Your Perfect Investment</p>
  <div class="d-flex justify-content-between">
    <PropertyItem v-for="property in this.properties" :property="property"/>
  </div>
  <div class="w-100 d-flex justify-content-center">
    <router-link to="/marketplace" class="show-all-properties-btn">
      View All Properties <i class="fi fi-sr-angle-small-right"></i>
    </router-link>
  </div>

</div>
</template>

<style scoped>

</style>