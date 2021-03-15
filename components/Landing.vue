<template>
  <div id="home"  class="hero-bg h-screen centered">
    <div class="text-center mb-12 text-lightest text-2xl md:text-3xl">
      <h1 class="mb-12" >I'm Kyle</h1>
      <div  class="flex mb-4">
          <h2 class="relative mr-36">I create <transition name="fade"> <span  :key="text" class=" px-4  absolute  text-light">{{text}}</span></transition></h2>
      </div>
      <Social/>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      text: 'things...',
      textArr: ['websites...', 'designs...', 'apps...', 'more...'],
      currentText: 0
    }
  },
  mounted(){
    setInterval(()=> {
    
      this.text = this.textArr[this.currentText]
      if(this.text !== 'more...'){
        this.currentText++
      }
    },3000)

  }
}
</script>

<style>
.mono-font{
   font-family: 'IBM Plex Mono', monospace;
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
.hero-bg{
   position: relative; 
   height: 100vh;
   width: 100%;
   font-family: 'IBM Plex Mono', monospace;
  
  }
  .hero-bg::before {    
      content: "";
      background-image: url('../assets/images/hero.jpg');
      background-size: cover;
      position: absolute;
      height: 100vh;
      width: 100%;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.08;
}
.hero-border{
  width: 5.5rem;
}
.hero-border::before{
  content: '';
  position: absolute;
  width: 10rem;
  height: 3rem;
  bottom: -8px;
  right: 0px;
  left: 0px;
  border: #32243d solid 2px;
  opacity: 0.5;
  
}
</style>
