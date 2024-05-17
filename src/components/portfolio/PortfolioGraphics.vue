<script>
export default {
  name: "PortfolioGraphics"
}
</script>

<template>
<div class="graphics-section">
  <div class="linear-graphic"></div>
  <div class="d-flex justify-content-between">
    <div class="circle-graphic">
      <p class="graphic-name">Your Investments</p>
    </div>
    <div class="map-location">
      <p class="mb-4 graphic-name">Properties Map Location</p>
        <div>
          <div class="d-flex country-item">
            <p class="country-name">Europe</p>
            <p class="country-count">345 Units</p>
          </div>
          <div class="scale">
            <div style="width: 99px" class="scale__value"></div>
          </div>
        </div>
        <div>
          <div class="d-flex country-item">
            <p class="country-name">America</p>
            <p class="country-count">323 Units</p>
          </div>
          <div class="scale">
            <div style="width: 83px;" class="scale__value"></div>
          </div>
        </div>
        <div>
          <div class="d-flex country-item">
            <p class="country-name">Asia</p>
            <p class="country-count">156 Units</p>
          </div>
          <div class="scale">
            <div style="width: 55px;" class="scale__value"></div>
          </div>
        </div>
        <div>
          <div class="d-flex country-item">
            <p class="country-name">Africa</p>
            <p class="country-count">90 Units</p>
          </div>
          <div class="scale">
            <div style="width: 44px;" class="scale__value"></div>
          </div>
        </div>
        <div>
          <div class="d-flex country-item">
            <p class="country-name">Australia</p>
            <p class="country-count">63 Units</p>
          </div>
          <div class="scale">
            <div style="width: 31px;" class="scale__value"></div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>