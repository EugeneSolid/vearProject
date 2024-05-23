<script>
import Notify from "@/components/properties/popup/Notify.vue";
import Success from "@/components/properties/popup/Success.vue";

export default {
  name: "NotificationModal",
  components: {Success, Notify},
  data() {
    return {
      isVerified: false
    }
  },
  methods: {
    submit() {
      this.isVerified = true
    }
  },
  mounted() {
    document.getElementById('notifyModal').addEventListener('show.bs.modal', event => {
      this.isVerified = false
    })
  }
}
</script>

<template>
  <div class="modal fade" id="notifyModal" tabindex="-1" aria-labelledby="notifyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header pb-0 pt-4 pe-4 border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-0">
         <Notify v-if="!isVerified" @submit="submit"/>
          <Success v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-dialog {
  max-width: 570px;
}
.modal-content {
  border-radius: 13px;
  box-shadow: 0px 24px 16px -10px #00000014;
  border: none;
}

.btn-close {
  color: black;
  opacity: 1;
}
</style>