<script>
import router from "@/router/router";

export default {
  name: "PortfolioListView",
  methods: {
    openProperty(number) {
      router.push(`/property/${number.toLowerCase()}`)
    }
  }
}
</script>

<template>
<div class="portfolio-list__list">
  <table class="w-100 default-table">
  <tr class="table-columns">
      <th style="width: 195px">Token</th>
      <th style="width: 190px">Tokens Owned</th>
      <th class="ps-2" style="width: 140px">Token Price</th>
      <th style="width: 160px">Tokens Value</th>
      <th>Total Rent Earned</th>
      <th style="width: 100px">Yield</th>
      <th></th>
    </tr>
    <tr class="separator header"/>
    <tr class="table-row">
      <td class="table-text bold">
        <img class="table-property-img bigger" src="/vearProject/images/currencies/lidq.svg"/>
        LIQD
      </td>
      <td class="table-data">20,000</td>
      <td class="table-data ps-2">$1.1</td>
      <td class="table-data">$22,000</td>
      <td class="table-data">-</td>
      <td class="table-data">-</td>
      <td>
        <button class="claim-btn">
          View Details
        </button>
      </td>
    </tr>
    <tr class="separator header"/>
    <tr class="table-row">
      <td class="table-text bold">
        <img class="table-property-img bigger" src="/vearProject/images/currencies/usdc.svg"/>
        USDC
      </td>
      <td class="table-data">8,000</td>
      <td class="table-data ps-2">$1</td>
      <td class="table-data">$800</td>
      <td class="table-data">-</td>
      <td class="table-data">-</td>
      <td>
        <button class="claim-btn">
          View Details
        </button>
      </td>
    </tr>
    <tr class="separator header"/>
    <tr class="table-row">
      <td class="table-text bold">
        <img  class="table-property-img " src="/vearProject/images/currencies/usdt.svg"/>
        USDT
      </td>
      <td class="table-data">3,000</td>
      <td class="table-data ps-2">$1</td>
      <td class="table-data">$3,000</td>
      <td class="table-data">-</td>
      <td class="table-data">-</td>
      <td>
        <button class="claim-btn">
          View Details
        </button>
      </td>
    </tr>
    <tr class="separator header"/>
    <tr class="table-row">
      <td class="table-text bold"><img class="table-property-img property" src="/vearProject/images/properties/property-1.png">LE0001</td>
      <td style="height: 96px" class="pe-0 table-data d-flex align-items-center justify-content-between">
        3,000
        <span class="currency-changes up gap-1"><i class="fi fi-sr-caret-up"></i>28%</span>
      </td>
      <td class="table-data ps-2">$1</td>
      <td class="table-data">$3,000</td>
      <td class="table-data">$834</td>
      <td class="table-data">13.5%</td>
      <td> <button class="claim-btn" @click="openProperty('LE0001')">
        View Details
      </button></td>
    </tr>
    <tr class="separator header"/>
    <tr class="table-row">
      <td class="table-text bold"><img class="table-property-img property" src="/vearProject/images/properties/property-2.png">LE0002</td>
      <td style="height: 96px" class="pe-0 table-data d-flex align-items-center justify-content-between">
        3,000
        <span class="currency-changes down gap-1"><i class="fi fi-sr-caret-down"></i>14.5%</span>
      </td>
      <td class="table-data ps-2">$1</td>
      <td class="table-data">$3,000</td>
      <td class="table-data">$834</td>
      <td class="table-data">13.5%</td>
      <td> <button class="claim-btn" @click="openProperty('LE0002')">
        View Details
      </button></td>
    </tr>
    <tr class="separator header"/>
    <tr class="table-row">
      <td class="table-text bold"><img class="table-property-img property" src="/vearProject/images/properties/property-3.png">LE0003</td>
      <td class="table-data">3,000</td>
      <td class="table-data ps-2">$1</td>
      <td class="table-data">$3,000</td>
      <td class="table-data">$834</td>
      <td class="table-data">13.5%</td>
      <td> <button class="claim-btn" @click="openProperty('LE0003')">
        View Details
      </button></td>
    </tr>
    <tr class="separator header"/>
    <tr class="table-row">
      <td class="table-text bold"><img class="table-property-img property" src="/vearProject/images/properties/property-4.jpg">LE0004</td>
      <td style="height: 96px" class="pe-0 table-data d-flex align-items-center justify-content-between">
        3,000
        <span class="currency-changes up gap-1"><i class="fi fi-sr-caret-up"></i>28%</span>
      </td>
      <td class="table-data ps-2">$1</td>
      <td class="table-data">$3,000</td>
      <td class="table-data">$834</td>
      <td class="table-data">13.5%</td>
      <td> <button class="claim-btn" @click="openProperty('LE0003')">
        View Details
      </button></td>
    </tr>
    <tr class="separator header"/>
    <tr class="table-row">
      <td class="table-text bold"><img class="table-property-img property" src="/vearProject/images/properties/property-5.jpg">LE0005</td>
      <td class="table-data">3,000</td>
      <td class="table-data ps-2">$1</td>
      <td class="table-data">$3,000</td>
      <td class="table-data">$834</td>
      <td class="table-data">13.5%</td>
      <td> <button class="claim-btn" @click="openProperty('LE0003')">
        View Details
      </button></td>
    </tr>
    <tr class="separator header"/>
    <tr class="table-row">
      <td class="table-text bold"><img class="table-property-img property" src="/vearProject/images/properties/property-6.jpg">LE0006</td>
      <td style="height: 96px" class="pe-0 table-data d-flex align-items-center justify-content-between">
        3,000
        <span class="currency-changes down gap-1"><i class="fi fi-sr-caret-down"></i>14.5%</span>
      </td>
      <td class="table-data ps-2">$1</td>
      <td class="table-data">$3,000</td>
      <td class="table-data">$834</td>
      <td class="table-data">13.5%</td>
      <td> <button class="claim-btn" @click="openProperty('LE0003')">
        View Details
      </button></td>
    </tr>
  </table>
</div>
</template>

<style lang="scss" scoped>
.table-columns, .table-row {
  background-color: #F1F2F6 !important;
}

.table-columns th {
  font-size: 16px !important;
}

.table-text.bold {
  font-size: 20px !important;
}

.claim-btn {
  font-size: 18px !important;
  font-weight: 500 !important;
  line-height: 22px !important;
  padding: 12px 0 !important;
  width: 146px !important;
  transition: all .3s;

  &:not(.locked) {
    &:hover {
      background: #FFFFFF;
      color: #257CFF;
    }
  }
}

.table-property-img {
  width: 56px!important;
  height: 56px !important;
  margin-right: 13px !important;
}
</style>