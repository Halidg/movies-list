<template>
  <section class="detail">
    <div class="container">
      <div class="detail__content">
        <div class="detail__left">
          <h2 class="detail__title">{{movie.name}}</h2>
          <img class="detail__img" :src='movie.poster' alt="">
          <div class="detail__info">
            <Tag class="detail__tag" :theme="movie.rating">
              <img src="../../assets/icons/star.svg" alt="star">
              <span class="detail__tag-text">{{movie.rating}}</span>  
            </Tag>
            <Tag class="detail__tag" :theme="'blue'">
              <img src="../../assets/icons/film.svg" alt="film">
              <span class="detail__tag-text">{{movie.genre}}</span>  
            </Tag>
            <Tag :theme="'purple'">
              <img src="../../assets/icons/time.svg" alt="time">
              <span class="detail__tag-text">{{movie.duration}}</span>
            </Tag>      
          </div>
        </div>
        <div class="detail__right">
          <h2 class="detail__title">Description</h2>
          <span class="detail__description">{{movie.description}}</span>
          <span class="detail__subtitle">Trivia</span>
          <ul class="detail__ul">
            <li class="detail__list" v-for="(trivia, idx) in movie.trivia" :key="idx">{{trivia}}</li>
          </ul>
          <span class="detail__subtitle">Actors</span>
          <ul class="detail__ul"> 
            <li 
              class="detail__list" 
              v-for="actor in movie.actors" 
              :key="actor.imdb_id"
              @click="toActor(actor.imdb_id)"
            >{{actor.name}}</li>
          </ul>
        </div>
      </div>
    </div>    
  </section>    
</template>

<script>
import Tag from '../Ui/Tag.vue'

export default {
  components: {
    Tag
  },
  mounted() {
      this.$store.dispatch('getMovie')
    },
  methods:{
    toActor(id) {
      this.$router.push(`/actor/${id}`)
    }
  },
  computed:{
    movie() {
      return this.$store.getters.movie
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";  
.detail {
  padding-top: 120px;
  background: #0C0C0C;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  
  @include tablets() {
    padding-bottom: 45px;  
  }

  &__content {
    display: flex;

    @include tablets() {
      flex-direction: column;  
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    margin-right: 81px;
    position: sticky;
  }

  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;;
    margin-bottom: 24px;
  }

  &__img {
    width: 272px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  &__info {
    display: flex;
  }

  &__tag {
    margin-right: 14px;
  }

  &__tag-text {
    font-size: 11px;
    color: #FFFFFF;;
    line-height: 13px;
    font-weight: 500;
    margin-left: 2px;
  }

  &__right {
    display: flex;
    flex-direction: column;
  }

  &__description {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
  }

  &__subtitle {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-top: 16px;  
  }

  &__ul {
    margin-top: 16px;
    margin-bottom: 0;
    font-size: 32px;
    color: #fff;
    padding-left: 16px;
    text-decoration: underline;
    
    &:first-of-type{
      text-decoration: none; 
      :hover {
        cursor: auto;
      } 
    }
  }

  &__list {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>