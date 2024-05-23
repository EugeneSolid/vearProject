<script>
import InvestSection from "@/components/properties/InvestSection.vue";
import PropertyGallery from "@/components/properties/PropertyGallery.vue";
import PropertyInfo from "@/components/properties/PropertyInfo.vue";
import Footer from "@/components/default/Footer.vue";

export default {
  name: "Property",
  components: {Footer, PropertyInfo, PropertyGallery, InvestSection},
  data() {
    return {
      properties: [
        {
          image: '/vearProject/images/properties/property-1.png',
          type: {name: 'Comercial', icon: 'fi fi-ss-building'},
          name: '1230-1232 Dartmouth St',
          number: 'LE0001',
          address: 'Scranton, PA 18504, USA',
          total: '$231,500',
          income: '9.9%',
          rent: '$1,905'
        },
        {
          image: '/vearProject/images/properties/property-2.png',
          type: {name: 'Industrial', icon: 'fi fi-ss-garage-open'},
          name: '1411-1413 Pine Street',
          number: 'LE0002',
          address: 'Scranton, PA 18510, USA',
          total: '$266,150',
          income: '10.1%',
          rent: '$2,251'
        },
        {
          image: '/vearProject/images/properties/property-3.png',
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
  },
  computed: {
    property() {
      return this.properties.find(item => item.number === this.$route.params.number.toUpperCase())
    }
  },
  methods: {
    isUserAuthorized() {
      return localStorage.getItem('user')
    }
  }
}
</script>

<template>
<div class="property-page">
  <div class="d-flex justify-content-between">
    <button @click="$router.push('/marketplace')" class="property-page__back-btn">
      <i class="fi fi-br-arrow-small-left"></i>
      Back
    </button>
    <div>
      <router-link v-if="!this.isUserAuthorized()" class="header__login-button" to="/login">
        <i class="fi fi-rr-circle-user"></i>
        Login/Register
      </router-link>
      <router-link v-else class="profile-btn" to="/profile">
        <img class="profile-img" src="/vearProject/images/header/profile.jpeg"/>
        Micheal Antonio
      </router-link>
    </div>
  </div>
  <div style="gap: 30px" class="d-flex top-part-section">
    <PropertyGallery/>
    <InvestSection :property="property"/>
  </div>
  <PropertyInfo :property="property"/>
</div>
  <Footer/>
</template>

<style scoped>

</style>