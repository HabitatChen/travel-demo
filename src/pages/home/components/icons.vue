<template>
    <div class="icons">
    <swiper :options="swiperOption" class="swiper-containner">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" 
            v-for="item of page" 
            :key="item.id"
            >
            <div class="icon-img">
                <img :src="item.imgUrl" alt="" class="icon-img-content">
            </div>
            <p class='icon-desc'>{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  computed: {
      pages () {
          const pages = []
          this.list.forEach((item,index)=>{
              const page = Math.floor(index / 8)
              if (!pages[page]) {
                  pages[page] = []
              }
              pages[page].push(item)
          })
          return pages
      }
  },
  props:{
      list:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
      }
    };
  }
};
</script>

<style scoped lang='stylus'>
.icons >>> .swiper-containner {
    height: 0;
    padding-bottom: 50%;
}

.icon {
    height: 0;
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;

    .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        color: #333;
        text-align: center;
        overflow hidden 
        white-space nowrap 
        text-overflow ellipsis
    }

    .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: borderbox;
        padding: 0.1rem;

        .icon-img-content {
            display: block;
            height: 100%;
            margin: 0 auto;
        }
    }
}
</style>
