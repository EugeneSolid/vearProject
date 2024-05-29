<script>
import property from "../../pages/Property.vue";
import PropertyInfoNavigation from "@/components/properties/PropertyInfoNavigation.vue";

export default {
  name: "PropertyInfo",
  components: {PropertyInfoNavigation},
  props: ['property']
}
</script>

<template>
<div class="property-info">
  <div class="main-info">
    <p class="mb-2 property-title bigger">{{property.number}}</p>
    <p class="mb-2 property-title">{{property.name}}</p>
    <p class="mb-0 property-address"><i class="me-1 fi fi-ss-marker"></i>{{property.address}}</p>
    <div class="d-flex gap-3 property-options-list">
      <div class="text-center property-option">
        <div class="option-margin">
          <i class="option-icon fi fi-rr-user-slash"></i>
          <p class="mb-0 option-name">Unoccupied</p>
        </div>
      </div>
      <div class="text-center property-option">
        <div class="option-margin">
        <i class="option-icon fi fi-rr-layout-fluid"></i>
        <p class="mb-0 option-name">3,234 sqft<br/>700sqm</p>
        </div>
      </div>
      <div class="text-center property-option">
        <div class="option-margin">
        <i class="option-icon fi fi-rr-house-blank"></i>
        <p class="mb-0 option-name">Two 3-Units<br/>Properties</p>
        </div>
      </div>
      <div class="text-center property-option">
        <div class="option-margin">
        <i class="option-icon fi fi-rr-bed-alt"></i>
        <p class="mb-0 option-name">19 Bed</p>
        </div>
      </div>
      <div class="text-center property-option">
        <div class="option-margin">
        <i class="option-icon fi fi-rr-bath"></i>
        <p class="mb-0 option-name">9 Bath</p>
        </div>
      </div>
    </div>
  </div>
  <PropertyInfoNavigation/>
  <RouterView :property="property"/>
</div>
</template>

<style scoped>

</style>