<script>

import VIcon from "@/components/generic/VIcon.vue";

export default {
  name: "Header",
  components: {VIcon},
  methods: {
    isUserAuthorized() {
      return localStorage.getItem('user')
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="d-flex justify-content-between align-items-center header-elements">
      <router-link style="background-color: transparent !important;" to="/">
        <img v-if="this.$route.path === '/'" src="/vearProject/images/white-logo.svg" alt="logo"/>
        <img v-else src="/vearProject/images/logo.svg" alt="logo"/>
      </router-link>
      <div v-if="this.$route.path === '/'" class="d-flex">
        <router-link class="header__link home-link" to="/marketplace">Marketplace</router-link>
        <a class="header__link home-link" href="#ourTeam">Our Team</a>
        <a class="header__link home-link" href="mailto:hello@liquidestate.io">Contact Us</a>
      </div>
      <div v-else class="d-flex">
        <router-link v-if="this.isUserAuthorized()" class="header__link d-flex align-items-center" to="/portfolio">
          <v-icon icon-url="/vearProject/images/header/portfolio.svg"/>
          <span class="ms-2">Portfolio</span></router-link>
        <router-link class="header__link d-flex align-items-center" to="/marketplace">
          <v-icon icon-url="/vearProject/images/header/marketplace.svg"/>
          <span class="ms-2">Marketplace</span></router-link>
        <router-link v-if="!this.isUserAuthorized()" class="header__link d-flex align-items-center" to="/login">
          <v-icon icon-url="/vearProject/images/header/portfolio.svg"/>
          <span class="ms-2">Portfolio</span></router-link>
        <router-link v-if="this.isUserAuthorized()" class="header__link d-flex align-items-center" to="/swap">
          <v-icon icon-url="/vearProject/images/header/swap.svg"/>
          <span class="ms-2">Swap</span></router-link>
      </div>
      <div v-if="this.$route.path === '/'">
        <a target="_blank" class="header__button" href="https://bit.ly/LEpaper">
          <img class="button-img" src="/vearProject/images/currencies/lidq.svg">
          App Demo
        </a>
      </div>
      <div v-else>
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
  </header>
</template>

<style scoped>
.button-img {
  width: 24px;
}
</style>