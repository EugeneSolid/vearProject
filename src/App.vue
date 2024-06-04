<template>
  <div id="app">

      <router-view class="transition" v-slot="{ Component, route}">
        <transition
            :name=" route.meta.transition || ''"
            :mode="route.meta.transition ? 'in-out' : ''"
        >
          <component :is="Component" />
        </transition>
      </router-view>

  </div>
</template>

<script>

export default {
  name: "App",
};

</script>

<style lang="scss">

$duration: 0.7s;

.transition {
  overflow: hidden;
}
.router-view,
.router-view-back {
  &-enter-active,
  &-leave-active {
    position: fixed;
    width: 100%;
    background: white;
    min-height: 100vh;
    top: 0;
  }
}
// router view
.router-view-enter-active {
  transition: transform $duration ease-in-out;
  z-index: 999;
  transform: translateX(100%);
}
.router-view-enter-to {
  z-index: 999;
  transform: translateX(0%);
}
.router-view-leave-active, .router-view-leave-to {
  z-index: -1;
}

.router-view-back-leave-active {
  transition: transform $duration ease-in-out;
  z-index: 999;
  transform: translateX(0%);
}
.router-view-back-leave-to {
  z-index: 999;
  transform: translateX(100%);
}

.router-view-back-enter-active, .router-view-back-enter-to {
  z-index: -1;
}
</style>
