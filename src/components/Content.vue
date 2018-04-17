<template>
  <!-- <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}"> -->
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                Content
                <Carousel autoplay v-model="value2" loop>
                    <CarouselItem>
                        <div class="demo-carousel"><img v-bind:src="imgUrl"/></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">4</div>
                    </CarouselItem>
                </Carousel>
  </Content>

</template>

<script>
    export default {
        data () {
            return {
                imgUrl: '/static/slides/slide3.jpg',
                value2: 0
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .demo-carousel imgtest {
  width:100%
} */
</style>