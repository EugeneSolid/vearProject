<template>
  <InlineSvg class="v-icon" :src="iconUrl"></InlineSvg>
</template>

<script>
import InlineSvg from "vue-inline-svg";
export default {
  name: "VIcon",
  components: {
    InlineSvg
  },
  props: {
    iconUrl: {
      type: String,
      required: true
    }
  }
}
</script>