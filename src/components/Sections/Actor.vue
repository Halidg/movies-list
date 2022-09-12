<template>
  <section class="actor">
    <div class="container">
      <h2 class="actor__title">Actor imdb:{{this.$route.params.id}}</h2>
    </div>
  </section>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.actor {
  padding-top: 100px;
  background: #1E1E1E;
  
  &__title {
    font-size: 32px;
    color: #FFFFFF;;
  }
}
</style>