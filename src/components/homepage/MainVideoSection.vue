<script>
export default {
  name: "MainVideoSection",
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  }
}
</script>

<template>
  <div style="margin-top: -143px;" class="position-relative video-section">
    <Transition name="slide-fade">
      <div v-if="this.show" class="main-part-info position-absolute d-flex flex-column justify-content-center align-items-center">
        <p class="main-part-info__title mb-3">The Fastest way to <br/> become a global landlord</p>
        <p class="main-part-info__description mb-0">Invest in real estate with as little as 10$, Transactions using the blockchain,<br/> Earn rent immediately, Real
          legal ownership, Sell any time</p>
      </div>
    </Transition>
    <img class="homepage__main-img" src="/vearProject/images/main.png">
  </div>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-120px);
  opacity: 0;
}
</style>