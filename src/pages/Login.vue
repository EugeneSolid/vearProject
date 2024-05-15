<script xmlns="http://www.w3.org/1999/html">
import {computed} from "vue";
import router from "@/router/router";

export default {
  name: "Login",
  data() {
    return {
      password: '',
      name: '',
      error: false
    };
  },
  computed: {
    maskedInput() {
      return this.password.replace(/./g, '∗');
    }
  },
  methods: {
    maskInput(event) {
      this.password = event.target.value;
    },
    loginUser() {
      if(this.name.length > 0 && this.password.length > 0) {
        this.error = false
        localStorage.setItem('user', 'true')
        router.push('/marketplace')
      }
      else {
        this.error = true
      }
    }
  }
}
</script>

<template>
  <div class="login">
    <div style="margin-bottom: 95px;" class="w-100 text-center">
      <img src="/images/logo.svg">
    </div>
    <div class="text-center">
      <p class="title">Login</p>
      <div class="d-flex flex-column">
        <label class="text-start mb-3 login__label">Email ID</label>
        <input class="login__input" placeholder="You@example.com" type="text" v-model="name">
      </div>
      <div class="d-flex flex-column mt-4">
        <label class="text-start mb-3 login__label">Password</label>
        <input class="login__input passwd" placeholder="∗∗∗∗∗∗∗∗∗∗" type="text" v-model="maskedInput" @input="maskInput">
      </div>
      <div class="my-4">
        <p v-if="error" class="error mb-1">Please fill all fields</p>
        <button class="w-100 login__button" @click="this.loginUser">Login</button>
      </div>
      <p class="mb-2 login__forgot-passwd">Forgot Password?</p>
      <div class="mt-5">
        <p class="mb-2 login__text">Are you haven’t an account?</p>
        <button class="mt-1 w-100 login__signup-button">Signup Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>