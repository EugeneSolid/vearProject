<script>
import VIcon from "@/components/generic/VIcon.vue";

export default {
  name: "TokenSelectorModal",
  components: {VIcon},
  props: ['id', 'type'],
  data() {
    return {
      tokensList: [
        {name: 'USDT', icon: '/vearProject/images/currencies/usdt.svg', title: 'Tether', price: '23467.34'},
        {name: 'USDC', icon: '/vearProject/images/currencies/usdc.svg', title: 'USD Coin', price: '20883.61'},
        {name: 'LIQD', icon: '/vearProject/images/currencies/lidq.svg', title: 'LIQD Coin', price: '29867.34'},
        {name: 'LE10001', icon: '/vearProject/images/currencies/le.svg', title: 'Property Coin', price: '20856.12'},
      ],
      search: '',
      matchingCurrencies: {}
    }
  },
  emits: ['select'],
  mounted() {
    document.getElementById(this.id).addEventListener('show.bs.modal', event => {
      this.search = ''
    })
  },
  methods: {
    selectToken(token) {
      this.$emit('select', token, this.type)
    }
  },
  watch: {
    search() {
      this.matchingCurrencies = this.tokensList.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>

<template>
  <div class="swap-modal modal fade" :id="id" tabindex="-1" aria-labelledby="connectWalletModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0 py-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <h1 class="modal-title" id="connectWalletModalLabel">Select a Token</h1>
        <div class="modal-body px-0">
          <div class="px-4">
            <div class="mb-2 position-relative">
              <input type="text" placeholder="Search for token" class="w-100 item-input fw-medium" v-model="search"/>
              <i class="fi fi-rr-search position-absolute input-icon gray"></i>
            </div>
            <div>
              <p class="mb-1 item-title">Your recent’s picks</p>
              <div class="d-flex gap-2">
                <div class="d-flex align-items-center gap-2 recent-pick-item" v-for="token in tokensList.slice(0,3)"
                     @click="selectToken(token)" data-bs-dismiss="modal">
                  <img :src="token.icon"/>
                  <p class="mb-0">{{ token.name }}</p>
                </div>
              </div>
            </div>
          </div>
          <hr class="delimiter"/>
          <div class="px-4">
            <div v-if="search.length > 0">
              <div class="d-flex justify-content-between align-items-center list-pick-item"
                   v-for="token in matchingCurrencies" @click="selectToken(token)" data-bs-dismiss="modal">
                <div class="d-flex gap-2 align-items-center">
                  <img class="item-icon" :src="token.icon"/>
                  <div>
                    <p class="mb-0 input-text text-start">{{ token.name }}</p>
                    <p class="mb-0 item-small-text">{{ token.title }}</p>
                  </div>
                </div>
                <p class="mb-0 input-text">{{ token.price }}</p>
              </div>
              <p class="mb-0 item-hint" v-if="matchingCurrencies.length === 0">No Tokens was found</p>
            </div>

            <div class="d-flex justify-content-between align-items-center list-pick-item" v-else
                 v-for="token in tokensList" @click="selectToken(token)" data-bs-dismiss="modal">
              <div class="d-flex gap-2 align-items-center">
                <img class="item-icon" :src="token.icon"/>
                <div>
                  <p class="mb-0 input-text text-start">{{ token.name }}</p>
                  <p class="mb-0 item-small-text">{{ token.title }}</p>
                </div>
              </div>
              <p class="mb-0 input-text">{{ token.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>