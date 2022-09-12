<template>
  <div 
    class="tag"
    :class="{
          'tag__green' : theme > 7,
          'tag__red' : theme < 5 ,
          'tag__purple' : theme === 'purple',
          'tag__blue'  : theme === 'blue'
        }"
    >
    <slot />
  </div>    
</template>

<script>
export default {
  props: {
    theme: String || Number
  }
}
</script>

<style lang="scss" scoped>
.tag {
  background: #702BFE;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px 2px  6px;

  &__green {
    background: #039C55;
  }

  &__red {
    background: #E81A0C;
  }

  &__purple {
    background: #702BFE;
  }


  &__blue {
    background: #2C81FB;
  }
}

</style>