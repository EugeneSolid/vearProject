<script>
import router from "@/router/router";

export default {
  name: "PropertyItem",
  props: ['property'],
  methods: {
    openProperty() {
      router.push(`/property/${this.property.number.toLowerCase()}`)
    }
  }
}
</script>

<template>
  <div class="property-item">
    <div class="position-relative">
      <div class="position-absolute d-flex property-type">
        <i :class="property.type.icon"></i>
        <p class="mb-0">{{ property.type.name }}</p>
      </div>
      <img class="property-photo" :src="property.image"/>
      <img class="sold-out-img" v-if="property.number === 'LE0005' || property.number === 'LE0006'
        " src="/vearProject/images/sold-out.png">
    </div>
    <div class="info-section">
      <div>
        <p class="mb-1 property-title">{{ property.number }}</p>
        <p class="mb-0 property-title">{{ property.name }}</p>
        <p class="mb-2 property-address"><i class="fi fi-ss-marker"></i>{{ property.address }}</p>
      </div>
      <hr/>
      <div>
        <div class="d-flex justify-content-between align-items-center w-100 total-price">
          <p class="mb-0 total-price__label">Total Investment</p>
          <p class="mb-0 total-price__value">{{ property.total }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center w-100 other-price">
          <p class="mb-0 other-price__label">Token Price</p>
          <p class="mb-0 other-price__value">$1</p>
        </div>
        <div class="d-flex justify-content-between w-100 align-items-center other-price">
          <p class="mb-0 other-price__label">Net Monthly Rent</p>
          <p class="mb-0 other-price__value">{{ property.rent }}</p>
        </div>
        <div class="d-flex justify-content-between w-100 align-items-center other-price">
          <p class="mb-0 other-price__label">Expected Income</p>
          <p class="mb-0 other-price__value">{{ property.income }}</p>
        </div>
      </div>
      <button class="w-100 text-center view-property-btn" @click="openProperty">
        View Details
      </button>
    </div>
  </div>
</template>

<style scoped>
.sold-out-img {
  position: absolute;
  z-index: 9;
  left: 0;
  height: 185px;
  width: 100%;
  object-fit: contain;

  background-color: rgba(238, 238, 238, 0.5);

}
</style>