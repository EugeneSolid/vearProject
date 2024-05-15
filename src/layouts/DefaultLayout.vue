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
  <Header/>
  <slot />
  <Footer/>
</template>

<style scoped>

</style>