<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PortfolioStatistics from "@/components/portfolio/PortfolioStatistics.vue";
import PortfolioGraphics from "@/components/portfolio/PortfolioGraphics.vue";
import PortfolioList from "@/components/portfolio/PortfolioList.vue";

export default {
  name: "Portfolio",
  components: {PortfolioList, PortfolioGraphics, PortfolioStatistics, DefaultLayout}
}
</script>

<template>
<default-layout>
  <div class="portfolio">
    <div class="portfolio-statistics">
      <PortfolioStatistics/>
    </div>
    <PortfolioGraphics/>
    <PortfolioList/>
  </div>
</default-layout>
</template>

<style scoped>

</style>