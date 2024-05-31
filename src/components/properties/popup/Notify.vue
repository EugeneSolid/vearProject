<script>
export default {
  name: "Notify",
  emits: ['submit'],
  data() {
    return {
      email: '',
      error: false
    }
  },
  methods: {
    validateEmail() {
      if (this.email.length === 0) {
        this.error = true
      }
      else {
        this.error = false;
        this.email = ''
        this.$emit('submit')
      }
    }
  }
}
</script>

<template>
  <div class="notify-section">
    <div class="w-100 d-flex justify-content-center mb-4">
      <img class="image" src="@/assets/images/notify.png">
    </div>
    <p class="text-center text">This property is not for sale just yet.<br/>
      If you want to recieve an email before it goes on sale,<br/> Sign up using
      your email address.</p>
      <input class="w-100 email-input" type="email" placeholder="Email Address" required v-model="email">
      <p v-if="error" class="mb-0 mt-2 text-start error">Please, enter your email address</p>
      <div class="w-100 d-flex justify-content-center">
        <button class="button" type="submit" @click="validateEmail">Sign Up</button>
      </div>
  </div>
</template>

<style scoped>
.notify-section {
  padding: 0 32px 32px;

  .image {
    width: 104px;
  }

  .text {
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.005em;
    color: #6B7688;
    margin-bottom: 32px;
  }

  .email-input {
    border: 1px solid #CFD9E5;
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.015em;
    text-align: left;
    color: #171719;
    border-radius: 13px;
    padding: 18px 32px;

    &::placeholder {
      color: #AEB6C3;
    }
  }

  .button {
    margin-top: 32px;
    background: #257CFF;
    border-radius: 13px;
    border: none;
    font-family: SF Pro Display;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    color: white;
    width: 270px;
    padding: 17px 0;
  }
}

@media screen and (max-width: 768px){
.notify-section {
  padding: 0 24px 24px;

  .text {
    font-size: 16px;
  }

  .email-input {
    padding: 12px 24px;
  }

  .button {
    margin-top: 28px;
    font-size: 17px;
    padding: 10px;
  }
}
}
</style>