<script>
export default {
  name: "PortfolioGraphics",
  data () {
    return {
      periods: ['1D', '1W', '1M', '6M', '5Y', 'All'],
      selectedPeriod: '1M',
      selectedMonth: 'May',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  }
}
</script>

<template>
<div class="graphics-section">
  <div class="portfolio-graphic">
    <div class="linear-graphic position-relative">
      <div class="d-flex justify-content-between">
        <div>
          <p class="graphic-title">Portfolio Value</p>
          <p class="mb-0 graphic-value">$123,346</p>
        </div>
        <div class="d-flex gap-2">
          <p :class="{'graphic-period mb-0': true, 'selected': selectedPeriod === period}"
             @click="selectedPeriod = period" v-for="period in periods">
            {{period}}
          </p>
        </div>
      </div>
      <div class="position-absolute graphic-grade">
        <div class="d-flex justify-content-between prices">
          <p class="mb-0 graphic-grade__value">$89,170</p>
          <p class="mb-0 graphic-grade__value">$114,203</p>
        </div>
        <div class="d-flex justify-content-between">
          <p @click="selectedMonth = month"
             :class="{'mb-0 graphic-month': true, 'selected': selectedMonth === month}"
             v-for="month in months">{{month}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-between gap-2 other-graphics">
    <div class="circle-graphic">
      <p class="mb-0 graphic-name">Your Investments</p>
      <div class="circle-graphic__image">
        <img class="" src="/vearProject/images/graphics/circle.png">
      </div>
    </div>
    <div class="linear-mobile-graphic ">
      <p class="mb-2 graphic-name text-center">Portfolio value:</p>
      <p class="mb-4 text-center graphic-name hover">$114,203</p>
      <img class="w-100" src="/vearProject/images/graphics/linear_mobile.svg">
      <div class="d-flex justify-content-between graphic-grade-mobile">
        <span>$89,170</span>
        <span>$114,203</span>
      </div>
      <div class="d-flex gap-2 justify-content-center">
        <p :class="{'graphic-period mb-0': true, 'selected': selectedPeriod === period}"
           @click="selectedPeriod = period" v-for="period in periods">
          {{period}}
        </p>
      </div>
    </div>
    <div class="map-location">
      <p class="mb-4 graphic-name">Properties Map Location</p>
      <div class="map-location__info">
        <div class="statistics">
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
        <div class="map-location__image">
          <img class="" src="/vearProject/images/graphics/map.png">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>