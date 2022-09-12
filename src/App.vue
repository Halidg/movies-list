<template>
  <Header></Header>
    <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition> 
    </router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/Layouts/Header.vue'
import Footer from './components/Layouts/Footer.vue'

export default {
  components: {
    Header,
    Footer
}  
}
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;  
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;  
}
</style>
