<script>
export default {
  name: "SwapGraphic",
  props: ['tokenFrom', 'tokenTo'],
  data() {
    return {
      periods: ['1D', '1W', '1M', '1Y'],
      selectedPeriod: '1M',
      selectedMonth: 'May',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  }
}
</script>

<template>
  <div class="linear-graphic position-relative mb-0">
    <div class="d-flex justify-content-between">
      <div>
        <div class="d-flex gap-2 mb-3 align-items-center">
          <div>
            <img class="from-currency-img" :src="tokenFrom.icon">
            <img class="to-currency-img" :src="tokenTo.icon">
          </div>
          <div class="d-flex gap-2 align-items-center">
            <p class="mb-0 currency-name">{{tokenFrom.name}}</p>
            <i class="fi fi-rr-exchange swap-icon"></i>
            <p class="mb-0 currency-name">{{tokenTo.name}}</p>
          </div>
        </div>
        <div class="mb-2 graphic-price d-flex gap-3 align-items-center">
          $123,346
          <span class="currency-changes up"><i class="fi fi-sr-caret-up"></i>28%</span>
        </div>
        <p class="mb-0 graphic-date">May 15, 2022, 12:30AM</p>
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
        <p class="mb-0 graphic-grade__value">$89.170</p>
        <p class="mb-0 graphic-grade__value">$114.203</p>
      </div>
      <div class="d-flex justify-content-between">
        <p @click="selectedMonth = month"
           :class="{'mb-0 graphic-month': true, 'selected': selectedMonth === month}"
           v-for="month in months">{{month}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>