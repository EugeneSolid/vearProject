<script>
export default {
  name: "PortfolioStatistics"
}
</script>

<template>
  <div class="d-flex justify-content-between">
      <div class="d-flex justify-content-between statistics-block">
        <div>
          <p class="mb-2 statistic-count">25</p>
          <p class="mb-0 statistic-label">Properties Owned</p>
        </div>
        <i class="fi statistic-icon fi-rr-house-blank"></i>
      </div>
      <div class="d-flex justify-content-between statistics-block">
        <div>
          <p class="mb-2 statistic-count">$107,000</p>
          <p class="mb-0 statistic-label">Properties Value</p>
        </div>
        <i class="fi statistic-icon fi-rr-usd-circle"></i>
      </div>
      <div class="d-flex justify-content-between statistics-block">
        <div>
          <p class="mb-2 statistic-count">$12,000</p>
          <p class="mb-0 statistic-label">Total Rent Earned</p>
        </div>
        <i class="fi statistic-icon fi-rr-money-bills"></i>
      </div>
      <div class="d-flex justify-content-between statistics-block">
        <div>
          <p class="mb-2 statistic-count">12.5%</p>
          <p class="mb-0 statistic-label">Total Rent Earned</p>
        </div>
        <i style="rotate: -90deg" class="fi statistic-icon mb-2 fi-rr-chart-simple-horizontal"></i>
      </div>
  </div>
</template>

<style scoped>

</style>