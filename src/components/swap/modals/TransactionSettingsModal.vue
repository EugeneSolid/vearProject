<script>
export default {
  name: "TransactionSettingsModal",
  data() {
    return {
      deadline: '',
      tolerance: '',
    }
  },
  methods: {
    deadlineCurrentInput($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);

      if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46
          || this.deadline.indexOf('.') !== -1)) {
        $event.preventDefault();
      }

      if (keyCode === 46 && this.deadline.length === 0) {
        $event.preventDefault();
      }

      if (this.deadline != null && this.deadline.indexOf(".") > -1 && (this.deadline.split('.')[1].length > 1)) {
        $event.preventDefault();
      }
    },
    toleranceCurrentInput($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);

      if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46
          || this.tolerance.indexOf('.') !== -1)) {
        $event.preventDefault();
      }

      if (keyCode === 46 && this.tolerance.length === 0) {
        $event.preventDefault();
      }

      if (this.tolerance != null && this.tolerance.indexOf(".") > -1 && (this.tolerance.split('.')[1].length > 1)) {
        $event.preventDefault();
      }
    },
  }
}
</script>

<template>
  <div class="swap-modal modal fade" id="transactionSettingsModal" tabindex="-1"
       aria-labelledby="connectWalletModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0 py-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <h1 class="modal-title" id="connectWalletModalLabel">Transactions Settings</h1>
        <div class="modal-body">
          <p style="margin-bottom: 20px;" class="item-hint text-center">Slippage tolerance?</p>
          <div class="d-flex gap-2 mb-4">
            <button class="connect-wallet-btn auto-btn">Auto</button>
            <div class="position-relative">
              <input class="item-input w-100 tolerance" type="text" @keypress="toleranceCurrentInput"
                     v-model="tolerance" placeholder="0.10"/>
              <i class="input-icon fi fi-rr-percentage position-absolute"></i>
            </div>
          </div>
          <p style="margin-bottom: 20px;" class="item-hint text-center">Transaction deadline?</p>
          <div class="position-relative mb-4">
            <input class="w-100 item-input deadline" type="text" @keypress="deadlineCurrentInput" v-model="deadline"
                   placeholder="0.10"/>
            <span class="input-text position-absolute">Minutes</span>
          </div>
          <button class="w-100 connect-wallet-btn">Save Settings</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>