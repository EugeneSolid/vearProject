<script>
import ConnectWalletModal from "@/components/swap/modals/ConnectWalletModal.vue";
import HistoryModal from "@/components/swap/modals/HistoryModal.vue";
import TransactionSettingsModal from "@/components/swap/modals/TransactionSettingsModal.vue";
import TokenSelectorModal from "@/components/swap/modals/TokenSelectorModal.vue";

export default {
  name: "SwapBlock",
  components: {TokenSelectorModal, TransactionSettingsModal, HistoryModal, ConnectWalletModal},
  emits: ['showGraph', 'selectToken'],
  data() {
    return {
      priceFrom: '',
      priceTo: '',
      isGraphOpened: false,
      selectedFromToken: {
        name: 'USDT',
        icon: '/vearProject/images/currencies/usdt.svg',
        title: 'Tether',
        price: '23467.34'
      },
      selectedToToken: {
        name: 'LE10001',
        icon: '/vearProject/images/currencies/le.svg',
        title: 'Property Coin',
        price: '20856.12'
      }
    }
  },
  methods: {
    onlyForCurrency($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      const type = $event.target.classList[1]


      if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || (type === "from" ?
              this.priceFrom && this.priceFrom.indexOf('.') !== -1 || (keyCode === 46 && this.priceFrom.length === 0)
              : this.priceTo && this.priceTo.indexOf('.') !== -1 || (keyCode === 46 && this.priceTo.length === 0))
      )) {
        $event.preventDefault();
      }

      if (type === "from") {
        if (this.priceFrom != null && this.priceFrom.indexOf(".") > -1 && (this.priceFrom.split('.')[1].length > 0)) {
          $event.preventDefault();
        }
      } else {
        if (this.priceTo != null && this.priceTo.indexOf(".") > -1 && (this.priceTo.split('.')[1].length > 0)) {
          $event.preventDefault();
        }
      }
    },
    toggleGraph() {
      this.isGraphOpened = !this.isGraphOpened
      this.$emit('showGraph')
    },
    setToken(data, type) {
      switch (type) {
        case 'from':
          this.selectedFromToken = data
            this.$emit('selectToken', data, 'from')
          break;
        case 'to':
          this.selectedToToken = data
          this.$emit('selectToken', data, 'to')
          break
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
        <div :class="{'open-graph-btn':true, 'active': this.isGraphOpened}" @click="toggleGraph">
          <i class="swap-block__icon fi fi-rr-chart-simple-horizontal"></i>
        </div>
        <i class="swap-block__icon fi fi-rr-time-past" data-bs-toggle="modal" data-bs-target="#historyModal"></i>
        <i class="swap-block__icon fi fi-rr-settings" data-bs-toggle="modal"
           data-bs-target="#transactionSettingsModal"></i>
      </div>
    </div>
    <div class="position-relative">
      <i class=" swap-icon fi fi-rr-exchange-alt position-absolute"></i>
      <div class="position-relative mb-3">
        <input class="swap-block__input from" placeholder="0.0" v-model="priceFrom" @keypress="onlyForCurrency">
        <div class="d-flex position-absolute currency-selector align-items-center"
             data-bs-target="#tokenSelectorModalFrom"
             data-bs-toggle="modal">
          <img class="currency-img" :src="this.selectedFromToken.icon">
          <span>{{ this.selectedFromToken.name }}</span>
          <i class="fi fi-br-angle-small-down"></i>
        </div>
        <TokenSelectorModal id="tokenSelectorModalFrom" @select="setToken" type="from"/>
      </div>
      <div class="position-relative">
        <input class="swap-block__input to" placeholder="0.0" v-model="priceTo" @keypress="onlyForCurrency">
        <div class="d-flex position-absolute currency-selector align-items-center"
             data-bs-target="#tokenSelectorModalTo"
             data-bs-toggle="modal">
          <img class="currency-img" :src="this.selectedToToken.icon">
          <span>{{ this.selectedToToken.name }}</span>
          <i class="fi fi-br-angle-small-down"></i>
        </div>
        <TokenSelectorModal id="tokenSelectorModalTo" @select="setToken" type="to"/>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-4">
      <p class="mb-0 transaction-fee">
        Transaction Fee
      </p>
      <div>
        <p class="mb-2 text-end transaction-fee-percent">0.5%</p>
        <p class="mb-0 transaction-fee-label">Paid in LIDQ</p>
      </div>
    </div>
    <button class="w-100 connect-wallet-btn" data-bs-toggle="modal" data-bs-target="#connectWalletModal">
      Connect Wallet
    </button>
  </div>
  <HistoryModal/>
  <TransactionSettingsModal/>
</template>

<style scoped>

</style>