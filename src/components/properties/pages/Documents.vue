<script>
export default {
  name: "Documents",
  props: ['property']
}
</script>

<template>
  <div class="documents mt-4">
    <p class="mb-2 property-title bigger">{{property.number}}</p>
    <p class="mb-0 property-address"><i class="me-1 fi fi-ss-marker"></i>{{property.address}}</p>
    <button class="mt-3 btn btn-info info-button">
      View Documents
    </button>
  </div>
</template>

<style scoped>

</style>