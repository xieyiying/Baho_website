<template>
  <div id="goTop">
    <div class="goTop" v-show="goTopShow" @click="goTop">
      <i class="goTopIcon"></i>
    </div>
  </div>
</template>
<script>
    export default {
      name: "m_top",
      data(){
          return{
            scrollTop: '',
            goTopShow: false,
          }
        },
      methods:{
        handleScroll () {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(this.scrollTop > 400){
                this.goTopShow = true
            } else {
                this.goTopShow = false
            }
        },
        goTop(){
            let timer= null,
                _that=this
                
            cancelAnimationFrame(timer)
            timer = requestAnimationFrame(function fn(){
                if(_that.scrollTop > 0){
                    _that.scrollTop -= 50;
                    document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
                    timer = requestAnimationFrame(fn)
                }else {
                    cancelAnimationFrame(timer);
                    _that.goTopShow=false;
                }
            })
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>
 
<style>
  .goTop{
    position: fixed;
    right: 0.3rem;
    bottom: 0.5rem;
    width: 0.7rem;
    height: 0.7rem;
    
  }
  .goTopIcon{
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    background: url(../../assets/img/mobile/backToTop.png) no-repeat;
    background-size: 100%;
  }
</style>