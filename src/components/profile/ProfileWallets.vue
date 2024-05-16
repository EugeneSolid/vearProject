<script>
export default {
  name: "ProfileWallets",
  data() {
    return {
      walletId: '',
      registeredWallets: ['0x897jk4l3k3lkjl34455jn3oin934n34mno34j']
    }
  },
  methods: {
    addWallet() {
      this.registeredWallets.push(this.walletId)
    },
    copyValue(text) {
      navigator.clipboard.writeText(text)
    }
  }
}
</script>

<template>
  <div class="profile-page w-100">
    <div class="main-info-section">
      <p class="profile-page__title">Wallets</p>
      <div class="profile-page__section pb-2">
        <div class="d-flex profile-name-info">
          <div class="d-flex flex-column w-100">
            <label class="section-label active">Property Wallet</label>
            <div class="position-relative">
              <p class="mb-2 wallet-value">0x235.....F3H9J23</p>
              <i class="fi fi-rr-copy position-absolute copy-value-icon"
                 @click="copyValue('0x235HFOEGEO9GIR87LJ898E6EGJ890IF3H9J23')"></i>
            </div>
            <p class="profile-page__info-text">You recieve your RealTokens on Gnosis Chain (xDai).
              <br/>
              Please contact us via chat to change this wallet.</p>
          </div>
          <div class="d-flex flex-column w-100">
            <label class="section-label active">Rent Wallet</label>
            <div class="position-relative">
              <p class="mb-2 wallet-value">0x235.....F3H9J23</p>
              <i class="fi fi-rr-copy position-absolute copy-value-icon"
                 @click="copyValue('0x235HFOEGEO9GIR87LJ898E6EGJ890IF3H9J23')"></i>
            </div>
            <p class="mb-2 profile-page__info-text">You recieve your USDC on Gnosis Chain (xDai).</p>
            <button class="change-btn">Change Wallet</button>
          </div>
        </div>
        <div class="d-flex flex-column w-100 mt-3">
          <label class="section-label active">Registered Wallets</label>
            <div class="position-relative registered-wallet mb-3" v-for="wallet in registeredWallets">
              <p class="mb-0 wallet-value highlight-area">{{wallet}}</p>
              <i class="fi fi-rr-copy position-absolute copy-value-icon highlight-area"
                 @click="copyValue(wallet)"></i>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="profile-page__title">Add Wallet</p>
      <div class="profile-page__section">
        <label class="section-label">Wallet ID</label>
        <div class="d-flex w-100">
          <input v-model="walletId" class="w-100 section-field me-2" placeholder="Ex:0x2356789"/>
          <button class="section-add-btn" @click="addWallet()">Add Wallet</button>
        </div>
      </div>
      <p class="mt-3 profile-page__info-text">Ensure you’ve entered the correct address and you are using external
        Algorand (ALGO) wallet address and not a
        virtual wallet address (e.g Coinbase)</p>
    </div>
  </div>
</template>

<style scoped>

</style>