<script>
export default {
  name: "KeyInfo",
  props: ['property']
}
</script>

<template>
  <div class="key-info mt-4">
    <div class="d-flex justify-content-between property-info-block w-100 mb-3">
      <p class="mb-0 property-info-block__title">Address</p>
      <p class="text-end mb-0 property-info-block__value">Lakewood, New Jersey(NJ), 08701</p>
    </div>
    <div class="d-flex gap-3">
      <div class="d-flex flex-column gap-3">
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Property Type</p>
          <p class="text-end mb-0 property-info-block__value">Triplex</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Units (SQF/SQM)</p>
          <p class="text-end mb-0 property-info-block__value">3</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Construction Year</p>
          <p class="text-end mb-0 property-info-block__value">1990</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Renovated</p>
          <p class="text-end mb-0 property-info-block__value">2004</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Occupied</p>
          <p class="text-end mb-0 property-info-block__value">Fully</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Rental Type</p>
          <p class="text-end mb-0 property-info-block__value">Long Term</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Interior Size (SQF/SQM)</p>
          <p class="text-end mb-0 property-info-block__value">1900/23</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Lot size (SQF/SQM)</p>
          <p class="text-end mb-0 property-info-block__value">3200/236</p>
        </div>
      </div>
      <div class="d-flex flex-column gap-3">
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Bedrooms</p>
          <p class="text-end mb-0 property-info-block__value">6</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Bathrooms</p>
          <p class="text-end mb-0 property-info-block__value">2</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Walls</p>
          <p class="text-end mb-0 property-info-block__value">Wood</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Roof</p>
          <p class="text-end mb-0 property-info-block__value">Tile</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Heating</p>
          <p class="text-end mb-0 property-info-block__value">Gas</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Cooling</p>
          <p class="text-end mb-0 property-info-block__value">AC</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Parking</p>
          <p class="text-end mb-0 property-info-block__value">No</p>
        </div>
        <div class="d-flex justify-content-between property-info-block">
          <p class="mb-0 property-info-block__title">Basement</p>
          <p class="text-end mb-0 property-info-block__value">Yes</p>
        </div>
      </div>
    </div>
    <div>
      <p class="info-section-title about-property">About The Property</p>
      <p class="property-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</p>
    </div>
    <div>
      <p class="mb-3 info-section-title">Location</p>
      <img class="location-img" style="width: 770px;" src="/vearProject/images/properties/property-map.png">
    </div>
  </div>
</template>

<style scoped>

</style>