<template>
<transition name="fade">
  <nav v-if="showNavbar" class="fancy-bg  flex fixed max-h-20 top-0 left-0 right-0 z-20 bg-dark" >
   <a href="#home"> <img class="relative z-30 w-10 m-6 md:ml-12 lg:mt-4" src="~/assets/images/logo.svg" alt="Logo of small circles with a k in the middle"></a>
    <!-- Desktop Nav -->
    <div  class="ml-auto mt-8 mr-12 hidden text-lg text-primaryText md:flex relative z-30 ">
    <a href="#about">   <p class="w-32"> <span class="text-lightest" >00.</span>About</p></a>
      <p class="w-32"> <a href="#work"> <span class="text-lightest" >01.</span>Work</a></p>
      <p class="w-32"> <a href="#contact"> <span class="text-lightest" >02.</span>Contact</a></p>
      <p class="w-32"> <a target="_blank" href="/resume.pdf"> <span class="text-lightest" >03.</span>Resume</a></p>
    </div>
    <!-- Mobile Menu --> 
    <button @click="showMenu = !showMenu" class="ml-auto focus:outline-none md:hidden">
      <img class="w-10 m-5 relative z-10" src="~/assets/images/menu.svg"  alt="Menu Button">
    </button>  
    <transition name="fade">
      <div v-if="showMenu" class="absolute z-10 h-screen bg-deep flex-col  w-screen text-primaryText text-center text-3xl">
        <button class="focus:outline-none" @click="showMenu = !showMenu" >
          <img class="mt-16 w-6" src="~/assets/images/close.svg" alt="close button">
        </button>
        <ul>
          <a href="#about" ><li class="mt-16 h-24  place-self-center" ><span class="text-lightest"> 00. </span>About</li></a>
          <a href="" ><li class="h-24" > <span class="text-lightest"> 01. </span>Work</li></a>
          <a href="" ><li class="h-24" ><span class="text-lightest"> 02. </span>Contact</li></a>
          <a href="" ><li class="h-24" ><span class="text-lightest"> 03. </span>Resume</li></a>
        </ul>
        <img class="w-14 m-auto mt-3" src="~/assets/images/logo.svg" alt="Logo of small circles with a k in the middle">
      </div>
     </transition>
  </nav>
</transition>
</template>

<script>
export default {
  data(){
    return{
      showMenu: false,
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
  window.addEventListener('scroll', this.onScroll)
},
beforeDestroy () {
  window.removeEventListener('scroll', this.onScroll)
},
methods: {
  onScroll () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  // Stop executing this function if the difference between
  // current scroll position and last scroll position is less than some offset
  if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
    return
  }
  this.showNavbar = currentScrollPosition < this.lastScrollPosition
  this.lastScrollPosition = currentScrollPosition
  }
}
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fancy-bg{
  width: 100%;
}
.fancy-bg::before{
      content: "";
      background-image: url('../assets/images/hero.jpg');
      background-size: cover;
      position: absolute;
      width: 100%;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.08;
}

</style>