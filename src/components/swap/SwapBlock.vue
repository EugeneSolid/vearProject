<script>
export default {
  name: "SwapBlock",
  data() {
    return {
      priceFrom: null,
      priceTo: null
    }
  },
  methods: {
    onlyForCurrency ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);

      if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.price.indexOf('.') != -1)) {
        $event.preventDefault();
      }

      if(this.price!=null && this.price.indexOf(".")>-1 && (this.price.split('.')[1].length > 0)){
        $event.preventDefault();
      }
    }
  }
}
</script>

<template>
<div class="swap-block">
  <div class="d-flex justify-content-between">
    <p class="swap-block__title">Swap</p>
    <div class="d-flex gap-3">
      <i class="swap-block__icon fi fi-rr-stats"></i>
      <i class="swap-block__icon fi fi-rr-time-past"></i>
      <i class="swap-block__icon fi fi-rr-settings"></i>
    </div>
  </div>
  <div class="position-relative">
    <div class="position-relative mb-3">
      <input class="swap-block__input" placeholder="0.0" v-model="priceFrom" @keypress="onlyForCurrency">
      <div class="d-flex position-absolute currency-selector">
        USDT
        <i class="fi fi-rr-angle-small-down"></i>
      </div>
    </div>
    <i style="rotate: -90deg" class="fi fi-rr-exchange-alt position-absolute"></i>
    <div class="position-relative">
      <input class="swap-block__input" placeholder="0.0" v-model="priceTo" @keypress="onlyForCurrency">
      <div class="d-flex position-absolute currency-selector">
        LE10001
        <i class="fi fi-rr-angle-small-down"></i>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-between">
    <p class="mb-0">
      Transaction Fee
    </p>
    <div>
      <p class="mb-2 text-end">0.5%</p>
      <p class="mb-0">Paid in LIDQ</p>
    </div>
  </div>
  <button class="w-100">
    Connect Wallet
  </button>
</div>
</template>

<style scoped>

</style>