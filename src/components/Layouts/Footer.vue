<template>
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__left">
            <h2 class="footer__title">Test Task, 2022</h2>
          </div>
          <div class="footer__right">
            <a href="" class="footer__info">518-363-2171</a>
            <span class="footer__info">91 Park St.Fairhope, AL 36532</span>
          </div> 
        </div>    
      </div>     
    </footer>  
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
   @import "@/styles/mixins.scss";  
  
  .footer {
    background:#292D32;
    width: 100%;
    padding: 20px 0;
    
    &__content {
      display: flex;
      justify-content: space-between;
    }
  
    &__title {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: #FFFFFF;
    }
  
    &__right {
      display: flex;
      flex-direction: column;
    }
  
    &__info {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #FFFFFF;
    }
  }
  </style>