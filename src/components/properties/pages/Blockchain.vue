<script>
export default {
  name: "Blockchain"
}
</script>

<template>
  <div class="blockchain mt-4">
    <div class="d-flex gap-3">
      <div class="d-flex flex-column gap-3">
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Total Tokens</p>
          <p class="text-end mb-0 property-info-block__value">250.000</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Minimum Purchase</p>
          <p class="text-end mb-0 property-info-block__value">100 Tokens</p>
        </div>
      </div>
      <div class="d-flex flex-column gap-3">
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Blockchain</p>
          <p class="text-end mb-0 property-info-block__value">ETH</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Maximum Purchase</p>
          <p class="text-end mb-0 property-info-block__value">62500 Tokens</p>
        </div>
      </div>
    </div>
   <button class="info-button mt-3">
     View Smart Contract
   </button>
  </div>
</template>

<style scoped>
  .info-button {
    padding: 16px !important;
  }
</style>