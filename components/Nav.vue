<template>
  <nav class="flex fixed h-24 top-0 left-0 right-0 z-20 bg-primaryColor" >
    <img class="w-10 m-6 md:ml-14 lg:mt-6" src="~/assets/images/logo.svg" alt="Logo of small circles with a k in the middle">
    <!-- Desktop Nav -->
    <div class="ml-auto mt-8 mr-12 hidden text-lg text-primaryText md:flex ">
      <p class="w-32"> <a href=""> <span class="text-secondaryColor" >00.</span>Home</a></p>
      <p class="w-32"> <a href=""> <span class="text-secondaryColor" >01.</span>About</a></p>
      <p class="w-32"> <a href=""> <span class="text-secondaryColor" >02.</span>Work</a></p>
      <p class="w-32"> <a href=""> <span class="text-secondaryColor" >03.</span>Contact</a></p>
    </div>
    <!-- Mobile Menu --> 
    <button @click="showMenu = !showMenu" class="ml-auto focus:outline-none md:hidden">
      <img class="w-10 m-5" src="~/assets/images/menu.svg"  alt="Menu Button">
    </button>  
    <transition name="fade">
      <div v-if="showMenu" class="absolute z-10 h-screen bg-primaryColor flex-col  w-screen text-primaryText text-center text-3xl">
        <button class="focus:outline-none" @click="showMenu = !showMenu" >
          <img class="mt-16 w-6" src="~/assets/images/close.svg" alt="close button">
        </button>
        <ul>
          <a href="" ><li class="mt-16 h-24  place-self-center" ><span class="text-secondaryColor"> 00. </span>Home</li></a>
          <a href="" ><li class="h-24" > <span class="text-secondaryColor"> 01. </span>About</li></a>
          <a href="" ><li class="h-24" ><span class="text-secondaryColor"> 02. </span>Work</li></a>
          <a href="" ><li class="h-24" ><span class="text-secondaryColor"> 03. </span>Contact</li></a>
        </ul>
        <img class="w-14 m-auto mt-3" src="~/assets/images/logo.svg" alt="Logo of small circles with a k in the middle">
      </div>
     </transition>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      showMenu: false
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
</style>