<script>
export default {
  name: "TokensCount",
  data() {
    return {
      selectedProperty: null,
      count: 10
    }
  },
  emits: ['changeCount'],
  props: ['error'],
  mounted() {
    this.selectedProperty = JSON.parse(localStorage.getItem('property'))
  },
  methods: {
    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46 && keyCode !== 8 && keyCode !== 37 && keyCode !== 39) {
        $event.preventDefault();
      }
    },
    incrementCounter() {
      if(this.count < 45000) {
        this.count++;
        this.$emit('changeCount', this.count)
      }
    },
    decrementCounter() {
      if(this.count > 10) {
        this.count--;
        this.$emit('changeCount', this.count)
      }
    }
  }
}
</script>

<template>
  <div class="tokens-count d-flex gap-4">
    <div class="property-item position-relative">
      <div class="position-absolute d-flex property-type">
      <i :class="selectedProperty?.type.icon"></i>
      <p class="mb-0">{{selectedProperty?.type.name}}</p>
    </div>
      <img class="property-photo" :src="selectedProperty?.image"/>
      <div class="mt-3 px-3">
        <p class="mb-1 property-title">{{selectedProperty?.number}}</p>
        <p class="mb-0 property-title">{{selectedProperty?.name}}</p>
        <p class="mb-0 property-address"><i class="fi fi-ss-marker"></i>{{selectedProperty?.address}}</p>
      </div>
    </div>
    <div class="h-100 w-100 position-relative">
      <p class="mb-3 total-info">Token Quantity:</p>
      <div class="d-flex align-items-center gap-3">
          <div class="d-flex justify-content-between align-items-center counter">
            <i class="button fi fi-br-minus" @click="decrementCounter()"></i>
            <input type="text" @keydown='(e) => onlyNumber(e)' @keyup="$emit('changeCount', this.count)" maxlength="5" class="count-value" v-model="count">
            <i class="fi fi-br-plus button" @click="incrementCounter()"></i>
          </div>
        <p class="mb-0 hint">1$/Token</p>
      </div>
      <p v-if="error" class="mb-0 error text-start mt-2 ">Incorrect value</p>
      <div class="position-absolute w-100 bottom-0">
        <p class="mb-3 total-info">Minimum 10 / Maximum 45,000</p>
        <p class="mb-2 total-info">130,000 Tokens Available</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>