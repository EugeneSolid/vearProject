<script>
import router from "@/router/router";

export default {
  name: "ProfileSidebar",
  methods: {
    logout() {
      localStorage.removeItem('user')
      router.push('/')
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column profile-sidebar">
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas" @click="this.$router.push('/profile')">
      <span class="option-name"><i class="fi fi-ss-user"></i> Profile</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i>
    </button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas" @click="this.$router.push('/profile/wallets')">
      <span class="option-name"><i class="fi fi-rr-wallet"></i> Wallets</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i></button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="fi fi-rs-usd-circle"></i> Staking</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i></button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas" @click="this.$router.push('/profile/claim-rent')">
      <span class="option-name"><i class="fi fi-rr-sack"></i> Claim Rent</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i></button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="fi fi-rr-money-bills"></i> Withdraw</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i></button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="fi fi-rs-qr-scan"></i> ID Verification</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i>
    </button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="fi fi-rr-copy-alt"></i> Documents</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i></button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="fi fi-rr-time-past"></i> Transactions History</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i></button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="fi fi-rr-bullhorn"></i> Referral Program</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i>
    </button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="fi fi-rr-world"></i> Language</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i></button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="fi fi-rs-moon"></i> Theme</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i></button>
    <button class="sidebar-option w-100" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="fi fi-rs-bell"></i> Notifications</span>
      <i class="arrow-icon fi fi-br-angle-small-right"></i>
    </button>
    <button class="error sidebar-option w-100" @click="this.logout" data-bs-dismiss="offcanvas">
      <span class="option-name"><i class="logout-icon fi fi-rs-arrow-circle-right"></i> Sign Out</span>
    </button>
  </div>
</template>

<style scoped>

</style>