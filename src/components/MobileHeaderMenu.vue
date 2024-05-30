<script>

import VIcon from "@/components/generic/VIcon.vue";

export default {
  name: "MobileHeaderMenu",
  components: {VIcon},
  methods: {
    isUserAuthorized() {
      return localStorage.getItem('user')
    },
  }
}
</script>

<template>
  <div class="modal mobile-header-modal fade-custom fade" id="mobileHeaderMenu" tabindex="-1"
       aria-labelledby="mobileHeaderMenuLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header pb-0 pt-4 pe-4 border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-0">
          <div>
            <div v-if="this.$route.path === '/'" class="d-flex flex-column">
              <button data-bs-dismiss="modal" class="header__link home-link border-0"
                      @click="this.$router.push({path: '/marketplace'})">Marketplace
              </button>
              <button data-bs-dismiss="modal" class="header__link home-link our-team-link border-0"
                      @click="this.$router.push({path: '/', hash: '#ourTeam'})">Our Team
              </button>
              <a class="header__link home-link" href="mailto:hello@liquidestate.io">
                <button class="border-0 w-100" data-bs-dismiss="modal">Contact Us</button>
              </a>
            </div>
            <div v-else class="d-flex">
              <button v-if="this.isUserAuthorized()" data-bs-dismiss="modal"
                      class="header__link d-flex align-items-center" @click="this.$router.push({path: '/portfolio'})">
                <v-icon icon-url="/vearProject/images/header/portfolio.svg"/>
                <span class="ms-2">Portfolio</span></button>

              <button class="header__link d-flex align-items-center" data-bs-dismiss="modal"
                      @click="this.$router.push({path: '/marketplace'})">
                <v-icon icon-url="/vearProject/images/header/marketplace.svg"/>
                <span class="ms-2">Marketplace</span></button>

              <button v-if="!this.isUserAuthorized()" class="header__link d-flex align-items-center"
                      data-bs-dismiss="modal" @click="this.$router.push({path: '/login'})">
                <v-icon icon-url="/vearProject/images/header/portfolio.svg"/>
                <span class="ms-2">Portfolio</span></button>

              <button v-if="this.isUserAuthorized()" class="header__link d-flex align-items-center"
                      data-bs-dismiss="modal" @click="this.$router.push({path: '/swap'})">
                <v-icon icon-url="/vearProject/images/header/swap.svg"/>
                <span class="ms-2">Swap</span></button>
            </div>
          </div>
          <div>
            <div v-if="this.$route.path === '/'">
              <a target="_blank" class="header__button" href="https://liquidestate.io/">
                <button class="border-0" data-bs-dismiss="modal">
                  <img class="button-img" src="/vearProject/images/currencies/lidq.svg">
                  App Demo
                </button>
              </a>
            </div>
            <div v-else>
              <button v-if="!this.isUserAuthorized()" class="header__login-button"
                      data-bs-dismiss="modal" @click="this.$router.push({path: '/login'})">
                <i class="fi fi-rr-circle-user"></i>
                Login/Register
              </button>
              <button v-else class="profile-btn" data-bs-dismiss="modal" @click="this.$router.push({path: '/profile'})">
                <img class="profile-img" src="/vearProject/images/header/profile.jpeg"/>
                Michael Antonio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>