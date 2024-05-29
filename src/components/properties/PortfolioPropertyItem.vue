<script>
import router from "@/router/router";

export default {
  name: "PortfolioPropertyItem",
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
        <p class="mb-0">{{property.type.name}}</p>
      </div>
      <img class="property-photo" :src="property.image"/>
    </div>
    <div class="info-section">
      <div>
        <p class="mb-1 property-title">{{property.number}}</p>
        <p class="mb-0 property-title">{{property.name}}</p>
        <p class="mb-0 property-address"><i class="fi fi-ss-marker"></i>{{property.address}}</p>
      </div>
      <hr/>
      <div>
        <div class="d-flex justify-content-between align-items-center w-100 total-price">
          <p class="mb-0 other-price__label">Tokens Owned</p>
          <p class="mb-0 other-price__value">{{property.tokensCount}}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center w-100 other-price">
          <p class="mb-0 other-price__label">Token Price</p>
          <p class="mb-0 other-price__value">$26.4</p>
        </div>
        <div class="d-flex justify-content-between align-items-center w-100 other-price">
          <p class="mb-0 other-price__label">Total Value</p>
          <p class="mb-0 other-price__value d-flex gap-2">
            <span class="currency-changes up"><i class="fi fi-sr-caret-up"></i>28%</span>
            {{property.rent}}</p>
        </div>
        <div class="d-flex justify-content-between w-100 align-items-center total-price">
          <p class="mb-0 total-price__label">Total Rent Received</p>
          <p class="mb-0 total-price__value">{{property.income}}</p>
        </div>
      </div>
      <button class="w-100 text-center view-property-btn" @click="openProperty">
        View Details
      </button>
    </div>
  </div>
</template>

<style scoped>
.currency-changes {
  gap: 4px !important;
  font-size: 14px!important;
}

.other-price {
  margin-bottom: 0;
  margin-top: 12px;
}

.total-price {
  margin-top: 10px;
}
</style>