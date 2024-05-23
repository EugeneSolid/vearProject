<script>
import VueSlider from 'vue-3-slider-component'
import TermsModal from "@/components/properties/TermsModal.vue";
import NotificationModal from "@/components/properties/NotificationModal.vue";
export default {
  name: "InvestSection",
  props: ['property'],
  data() {
    return {
      myNumber: 10
    }
  },
  components: {
    NotificationModal,
    TermsModal,
    VueSlider
  },

}
</script>

<template>
  <div class="invest-section">
    <p class="mb-3 d-flex justify-content-between align-items-center section-title bold">Total Investment:
      <span class="section-value bold mt-2">{{ property.total }}</span></p>
    <p class="mb-3 d-flex justify-content-between align-items-center section-title">Token Price:
      <span class="section-value">$1</span></p>
    <p class="mb-3 d-flex justify-content-between align-items-center section-title">Net Monthly Rent:
      <span class="section-value">{{ property.rent }}</span></p>
    <p class="mb-3 d-flex justify-content-between align-items-center section-title">Expected Income:
      <span class="section-value">{{ property.income }}</span></p>
    <hr class="delimiter"/>
    <p class="mb-3 section-middle-title bold">Projected Returns</p>
    <p class="mb-4 section-middle-title ">Tokens Purchased</p>
    <VueSlider v-model="myNumber" :min="10" :max="45000" :marks="[10, 45000]"/>
    <div class="d-flex justify-content-between">
      <div>
        <p class="range-result-title">Cost:</p>
        <p class="mb-0 range-result-value">{{myNumber}}</p>
      </div>
      <div>
        <p class="range-result-title">Monthly Rent:</p>
        <p class="mb-0 range-result-value text-end">${{(myNumber*0.01).toFixed(2)}}</p>
      </div>
    </div>
    <button v-if="property.number === 'LE0001'"
            class="w-100 mb-3 invest-btn" data-bs-target="#TermsModal" data-bs-toggle="modal">
      Invest Now
    </button>
    <button v-else
            class="w-100 mb-3 invest-btn" data-bs-target="#notifyModal" data-bs-toggle="modal">
      Invest Now
    </button>
    <p class="text-center mb-2 range-hint">Minimum 10</p>
    <p class="text-center mb-0 range-hint">Maximum 45000</p>
  </div>
  <TermsModal :property="property"/>
  <NotificationModal/>
</template>

<style scoped>

</style>