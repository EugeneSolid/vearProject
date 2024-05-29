<script>
export default {
  name: "Financials",
  data() {
    return {
      isTotalOpened: false,
      isAnnualOpened: false
    }
  },
  methods: {
    collapseDropdown(e, element) {
      if (!e.currentTarget.classList.contains('collapsed')) {
        document.querySelector(element).classList.add('opened');
      } else {
        document.querySelector(element).classList.remove('opened');
      }

    }
  }
}
</script>

<template>
  <div class="financials mt-4">
    <div class="total-collapse">
      <div class="d-flex justify-content-between property-info-block w-100 mb-3 align-items-center">
        <div class="d-flex gap-3 align-items-center">
          <p class="mb-0 property-info-block__title">Total Investment</p>
          <p class="mb-0 d-flex align-items-center show-more-btn collapsed" type="button"
             @click="collapseDropdown($event, '.total-collapse'); this.isTotalOpened = !this.isTotalOpened"
             data-bs-toggle="collapse"
             data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <i class="fi fi-rr-angle-small-down"></i>
            <span class="text-decoration-underline">{{ isTotalOpened ? 'Less' : 'More' }} Details</span>
          </p>
        </div>
        <p class="text-end mb-0 property-info-block__value">$334,987,782</p>
      </div>
      <div class="collapse" id="collapseExample">
        <div class="card-body">
          <div class="d-flex justify-content-between collapse-item">
            <p class="mb-0 property-info-block__title">Underlying Asset Price</p>
            <p class="mb-0 property-info-block__title">$4,000</p>
          </div>
          <div class="d-flex justify-content-between collapse-item dark">
            <p class="mb-0 property-info-block__title">Initial Maintenance Reserve (3.5%)</p>
            <p class="mb-0 property-info-block__title">$3,235</p>
          </div>
          <div class="d-flex justify-content-between collapse-item">
            <p class="mb-0 property-info-block__title">Initial Renovation Reserve</p>
            <p class="mb-0 property-info-block__title">$0</p>
          </div>
          <div class="d-flex justify-content-between collapse-item dark">
            <p class="mb-0 property-info-block__title">Closing Costs</p>
            <p class="mb-0 property-info-block__title">$1,500</p>
          </div>
          <div class="d-flex justify-content-between collapse-item">
            <p class="mb-0 property-info-block__title">Upfront LLC fees</p>
            <p class="mb-0 property-info-block__title">$500</p>
          </div>
          <div class="d-flex justify-content-between collapse-item dark">
            <p class="mb-0 property-info-block__title">Vacancy Reserve (2%)</p>
            <p class="mb-0 property-info-block__title">$1,000</p>
          </div>
          <div class="d-flex justify-content-between collapse-item">
            <p class="mb-0 property-info-block__title">Liquid Estate Listing Fee (10%)</p>
            <p class="mb-0 property-info-block__title">$25,000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between property-info-block w-100 mb-3">
      <p class="mb-0 property-info-block__title">Expected Income</p>
      <p class="text-end mb-0 property-info-block__value">13.5%</p>
    </div>
    <div class="d-flex justify-content-between property-info-block w-100 mb-3">
      <p class="mb-0 property-info-block__title">Annual Gross Rent</p>
      <p class="text-end mb-0 property-info-block__value">$50,000</p>
    </div>
    <div class="annual-collapse">
      <div class="d-flex justify-content-between property-info-block w-100 mb-3 align-items-center">
        <div class="d-flex gap-3 align-items-center">
          <p class="mb-0 property-info-block__title">Annual Costs</p>
          <p class="mb-0 d-flex align-items-center show-more-btn collapsed" type="button"
             @click="collapseDropdown($event, '.annual-collapse'); this.isAnnualOpened = !this.isAnnualOpened"
             data-bs-toggle="collapse"
             data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
            <i class="fi fi-rr-angle-small-down"></i>
            <span class="text-decoration-underline">{{ isAnnualOpened ? 'Less' : 'More' }} Details</span>
          </p>
        </div>
        <p class="text-end mb-0 property-info-block__value">$10,000</p>
      </div>
      <div class="collapse" id="collapseExample2">
        <div class="card-body">
          <div class="d-flex justify-content-between collapse-item">
            <p class="mb-0 property-info-block__title">Property Taxes</p>
            <p class="mb-0 property-info-block__title">$250</p>
          </div>
          <div class="d-flex justify-content-between collapse-item dark">
            <p class="mb-0 property-info-block__title">Government Taxes</p>
            <p class="mb-0 property-info-block__title">$250</p>
          </div>
          <div class="d-flex justify-content-between collapse-item">
            <p class="mb-0 property-info-block__title">Insurance</p>
            <p class="mb-0 property-info-block__title">$250</p>
          </div>
          <div class="d-flex justify-content-between collapse-item dark">
            <p class="mb-0 property-info-block__title">Property Management (8%)</p>
            <p class="mb-0 property-info-block__title">$250</p>
          </div>
          <div class="d-flex justify-content-between collapse-item">
            <p class="mb-0 property-info-block__title">Liquid State Platform (2%)</p>
            <p class="mb-0 property-info-block__title">$250</p>
          </div>
          <div class="d-flex justify-content-between collapse-item dark">
            <p class="mb-0 property-info-block__title">Utilities</p>
            <p class="mb-0 property-info-block__title">$250</p>
          </div>
          <div class="d-flex justify-content-between collapse-item">
            <p class="mb-0 property-info-block__title">Annual LLC Fees</p>
            <p class="mb-0 property-info-block__title">$250</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between property-info-block w-100 mb-3">
      <p class="mb-0 property-info-block__title">Annual Net Rent</p>
      <p class="text-end mb-0 property-info-block__value">$40,000</p>
    </div>
    <div class="d-flex justify-content-between property-info-block w-100 mb-3">
      <p class="mb-0 property-info-block__title">Monthly Gross Rent</p>
      <p class="text-end mb-0 property-info-block__value">$6,000</p>
    </div>
    <div class="d-flex justify-content-between property-info-block w-100 mb-3">
      <p class="mb-0 property-info-block__title">Monthly Costs</p>
      <p class="text-end mb-0 property-info-block__value">$5,000</p>
    </div>
    <div class="d-flex justify-content-between property-info-block w-100 mb-3">
      <p class="mb-0 property-info-block__title">Monthly Net Rent</p>
      <p class="text-end mb-0 property-info-block__value">$3,000</p>
    </div>
  </div>
</template>

<style scoped>

</style>