<script>
import TokensCount from "@/components/invest-summary/TokensCount.vue";
import OrderInfo from "@/components/invest-summary/OrderInfo.vue";

export default {
  name: "InvestmentSummary",
  components: {OrderInfo, TokensCount},
  data() {
    return {
      total: 10,
      selectedProperty: null
    }
  },
  mounted() {
    this.selectedProperty = JSON.parse(localStorage.getItem('property'))
  },
  methods: {
    isUserAuthorized() {
      return localStorage.getItem('user')
    },
    changeCount(value) {
      this.total = value
    }
  }
}
</script>

<template>
  <div class="property-page">
    <div class="d-flex justify-content-between">
      <button @click="$router.push('/property/' + selectedProperty?.number.toLowerCase())"
              class="property-page__back-btn">
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
    <h2 class="title text-start">Investment Summary</h2>
    <div class="d-flex summary-content">
      <TokensCount @changeCount="changeCount"/>
      <OrderInfo :total="total"/>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin: 32px 0;
}

.summary-content {
  gap: 30px
}
</style>