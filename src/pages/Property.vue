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
          type: {name: 'Residential', icon: 'fi fi-ss-house-chimney'},
          name: '1230-1232 Dartmouth St',
          number: 'LE0001',
          address: 'Scranton, PA 18504, USA',
          total: '$231,500',
          income: '9.9%',
          rent: '$1,905',
          display: 'new',
          imgCount: 9
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
          display: 'secondary',
          imgCount: 8
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
          display: 'secondary',
          imgCount: 8
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
          display: 'secondary',
          imgCount: 11
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
          display: 'new',
          imgCount: 8
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
          display: 'new',
          imgCount: 5
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
        Michael Antonio
      </router-link>
    </div>
  </div>
  <div style="gap: 30px" class="d-flex top-part-section">
    <PropertyGallery :property="property"/>
    <InvestSection :property="property"/>
  </div>
  <PropertyInfo :property="property"/>
</div>
  <Footer/>
</template>

<style scoped>

</style>