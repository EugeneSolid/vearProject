<script>
import PortfolioListView from "@/components/portfolio/PortfolioListView.vue";
import PortfolioGridView from "@/components/portfolio/PortfolioGridView.vue";

export default {
  name: "PortfolioList",
  components: {PortfolioGridView, PortfolioListView},
  data() {
    return {
      selectedType: 'grid',
    }
  }
}
</script>

<template>
<div class="portfolio-list">
  <div class="toggler-component">
    <div class="d-flex property-view-toggler mb-4">
      <button @click="this.selectedType = 'list'"
              :class="{'toggler-btn d-flex align-items-center justify-content-center': true, 'selected': this.selectedType === 'list'}"><i class="fi fi-rr-list me-2"></i> List
      </button>
      <button @click="this.selectedType = 'grid'"
              :class="{'toggler-btn d-flex align-items-center justify-content-center': true, 'selected': this.selectedType === 'grid'}"><i class="fi fi-sr-apps me-2"></i> Grid
      </button>
    </div>
  </div>
  <PortfolioListView v-if="this.selectedType === 'list'"/>
  <PortfolioGridView v-if="this.selectedType === 'grid'"/>
</div>
</template>

<style scoped>

</style>