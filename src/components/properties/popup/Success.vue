<script>
import VIcon from "@/components/generic/VIcon.vue";

export default {
  name: "Success",
  components: {VIcon}
}
</script>

<template>
  <div class="success-section">
    <p class="text mb-0">We will send you an email shortly.<br/> Keep an eye on your inbox!</p>
    <img class="image" src="@/assets/images/success.png">
    <p class="text mb-3">In the meantime, Join our community!</p>
    <a href="https://bit.ly/3Pp9C4k" target="_blank"
       class="mb-3 telegram-btn d-flex justify-content-center align-items-center gap-1">
      <v-icon icon-url="/vearProject/images/icons/telegram-white.svg"/>
      Telegram
    </a>
    <p class="text-decoration-underline mb-0 close" data-bs-dismiss="modal">No, Thanks.</p>
  </div>
</template>

<style scoped lang="scss">
.success-section {
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .image {
    margin: 0 auto;
    width: 154px;
  }

  .text {
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.005em;
    text-align: center;
    color: #6B7688;
  }

  .close {
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.005em;
    cursor: pointer;
  }

  .telegram-btn {
    background: #2EACE0;
    border: none;
    border-radius: 28px;
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: -0.005em;
    color: white;
    padding: 13.5px 0;
    width: 270px;
    text-decoration: none;
  }
}
</style>