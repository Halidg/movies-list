<template>
    <div class="card" @click="toDetail(movie.id)">
      <div class="card__content">
        <img class="card__img" :src=movie.poster alt="">
        <h2 class="card__title">{{movie.name}}</h2>
        <span class="card__description">{{movie.description}}</span>
        <div class="card__info">
          <Tag class="card__tag" :theme="movie.rating">
            <img src="../../assets/icons/star.svg" alt="star">
            <span class="card__tag-text">{{movie.rating}}</span>  
          </Tag>
          <Tag class="card__tag" :theme="'blue'">
            <img src="../../assets/icons/film.svg" alt="film">
            <span class="card__tag-text">{{movie.genre}}</span>  
          </Tag>
          <Tag>
            <img src="../../assets/icons/time.svg" alt="time">
            <span class="card__tag-text">{{movie.duration}}</span>
          </Tag>      
        </div>
      </div>  
    </div>        
  </template>
    
<script>
import Tag from './Tag.vue'  

export default {
  props:{
    movie: {
      type: Object
    }
  },
  components: {
      Tag
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/movie/${id}`)
    }
  }
}
</script>
    
<style lang="scss" scoped>
 @import "@/styles/mixins.scss";
    
.card {
  background: #292D32;
  padding: 12px;
  border-radius: 16px;
  transition: .2s;
  
  &:hover {
  cursor: pointer;
  box-shadow:
    1px 1px #702BFE,
    2px 2px #702BFE,
    3px 3px #702BFE,
    4px 4px #702BFE,
    5px 5px #702BFE,
    6px 6px #702BFE,
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__img {
    max-width: 100%;
    border-radius: 8px;
  }

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    padding-top: 12px;
    color: #FFFFFF;;
  }

  &__description {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 14px;  
  }

  &__info {
    display: flex;
  }

  &__tag {
    margin-right: 14px;

    &-text {
      font-size: 11px;
      color: #FFFFFF;;
      line-height: 13px;
      font-weight: 500;
      margin-left: 2px;
    }
  }
}
</style>