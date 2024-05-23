<script>
export default {
  name: "OrderInfo",
  props: ['total'],
  data() {
    return {
      isPaymentSelect: false
    }
  }
}
</script>

<template>
  <div class="order-info">
    <p class="title">Order Summary</p>
    <p class="mb-3 d-flex justify-content-between total-info">Order Total:
      <span class="total-info__price total">${{ total }}</span></p>
    <p class="mb-0 d-flex justify-content-between total-info">Payment Due:
      <span class="total-info__price">${{ total }}</span>
    </p>
    <hr class="my-4"/>
    <p class="mb-3 title">Payment Method</p>
    <div class="payment-method mb-2 d-flex align-items-center gap-2">
      <i :class="{'fi fi-ss-dot-circle': true, 'selected': isPaymentSelect}" @click="isPaymentSelect = !isPaymentSelect"></i>
      <img src="/vearProject/images/currencies/usdt.svg">
      <div>
        <p class="mb-2 payment-method__title">Cryptocurrency</p>
        <p class="mb-0 payment-method__title hint">Fees typicaly under $0.01</p>
      </div>
    </div>
    <p class="mb-3 order-info__hint text-center">Tokens sent immediately </p>
    <button class="w-100 apply-btn">Make Payment</button>
  </div>
</template>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 600;
  line-height: 12px;
  text-align: left;
  margin-bottom: 18px;
}

hr {
  border-color: #CFD9E5;
  opacity: 1;
}
</style>