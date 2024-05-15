<script>
export default {
  name: "PropertyItem",
  props: ['property']
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
        <div class="d-flex justify-content-between w-100 total-price">
          <p class="mb-0 total-price__label">Total Investment</p>
          <p class="mb-0 total-price__value">{{property.total}}</p>
        </div>
        <div class="d-flex justify-content-between w-100 other-price">
          <p class="mb-0 other-price__label">Token Price</p>
          <p class="mb-0 other-price__value">$1</p>
        </div>
        <div class="d-flex justify-content-between w-100 other-price">
          <p class="mb-0 other-price__label">Net Monthly Rent</p>
          <p class="mb-0 other-price__value">{{property.rent}}</p>
        </div>
        <div class="d-flex justify-content-between w-100 other-price">
          <p class="mb-0 other-price__label">Expected Income</p>
          <p class="mb-0 other-price__value">{{property.income}}</p>
        </div>
      </div>
      <button class="w-100 text-center view-property-btn">
        View Details
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>