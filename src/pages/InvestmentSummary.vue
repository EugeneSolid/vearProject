<script>
import TokensCount from "@/components/invest-summary/TokensCount.vue";
import OrderInfo from "@/components/invest-summary/OrderInfo.vue";
import NotificationModal from "@/components/properties/NotificationModal.vue";

export default {
  name: "InvestmentSummary",
  components: {NotificationModal, OrderInfo, TokensCount},
  data() {
    return {
      total: 10,
      selectedProperty: null,
      error: false,
    }
  },
  mounted() {
    this.selectedProperty = JSON.parse(localStorage.getItem('property'));
  },
  methods: {
    isUserAuthorized() {
      return localStorage.getItem('user')
    },
    changeCount(value) {
      this.total = value
    },
    verify() {
      if (this.total < 10 || this.total > 45000) {
        this.error = true;
      }
      else {
        this.error = false;
        document.querySelector('.toggle-modal').click()
      }
    }
  }
}
</script>

<template>
  <div>
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
      <TokensCount @changeCount="changeCount" :error="error"/>
      <OrderInfo :total="total" @verify="verify"/>
    </div>
  </div>
  <button class="toggle-modal" hidden="hidden" data-bs-target="#notifyModal" data-bs-toggle="modal"></button>
  <NotificationModal/>
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