<script>
export default {
  name: "PropertyInfoNavigation"
}
</script>

<template>
<div class="property-navigation d-flex gap-2">
<router-link class="navigation-item" :to="'/property/' + $route.params.number + ''">Key Info</router-link>
<router-link class="navigation-item" :to="'/property/' + $route.params.number + '/financials'">Financials</router-link>
<router-link class="navigation-item" :to="'/property/' + $route.params.number + '/blockchain'">Blockchain</router-link>
<router-link class="navigation-item" :to="'/property/' + $route.params.number + '/timeline'">Timeline</router-link>
<router-link class="navigation-item" :to="'/property/' + $route.params.number + '/documents'">Documents</router-link>
</div>
</template>

<style scoped>

</style>