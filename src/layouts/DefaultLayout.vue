<script>

import Header from "@/components/default/Header.vue";
import Footer from "@/components/default/Footer.vue";

export default {
  name: 'DefaultLayout',
  components: {Footer, Header},
  computed: {
  },
  mounted() {
  }
}
</script>

<template>
  <div>
    <Header/>
    <slot />
    <Footer/>
  </div>
</template>

<style scoped>

</style>