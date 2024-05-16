<script>


import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PortfolioStatistics from "@/components/portfolio/PortfolioStatistics.vue";

export default {
  name: "Portfolio",
  components: {PortfolioStatistics, DefaultLayout}
}
</script>

<template>
<default-layout>
  <div class="portfolio">
    <PortfolioStatistics/>
  </div>
</default-layout>
</template>

<style scoped>

</style>