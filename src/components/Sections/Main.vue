<template>
    <section class="main">
      <div class="container">
        <div class="main__content">
          <Card v-for="item in Movies"
           :key="item.id" 
           :movie="item"></Card>
        </div>  
      </div>     
    </section>  
  </template>
  
  <script>
  import Card from '../Ui/Card.vue';  

  export default {
    components:{
      Card
    },
    mounted() {
      this.$store.dispatch('getMovies')
    },
    computed: {
      Movies() {
        return this.$store.getters.movies
      }
    },
  }
  </script>
  
<style lang="scss" scoped>
@import "@/styles/mixins.scss";  

.main{
  padding-top: 100px;
  padding-bottom: 42px;
  background: #1E1E1E;

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 28px;
    grid-row-gap: 16px;
    margin-top: 50px;
    
    @include tablets() {
      grid-template-columns: repeat(2, 1fr);  
   }

   @include phones() {
      grid-template-columns: repeat(1, 1fr);  
   }
  }
}
</style>