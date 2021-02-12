<template>
  <main class="relative h-full high" >
    <img class="mt-8 md:w-2/5 md:m-auto lg:w-7/12 lg:-mt-12 lg:ml-auto lg:mr-8" src="~/assets/images/mainbg.svg" alt="colorful abstract circle pattern">
    <div class="text-primaryText m-5 md:ml-14  lg:absolute lg:bottom-48 lg:ml-32 lg:w-96" >
        <p class="text-xl" >Hi, my name is</p>
        <h1 class="text-purpleText mt-2 text-4xl" >Kyle Larsen</h1>
        <p class="text-lg mt-2">I'm a front-end developer and
        JAM-stack enthusiast. I specialize
        in making fast, intuitive web applications 
        </p>
        <Social/>
        <button
        class="py-2 px-4 mt-1 w-48 bg-primaryText text-purpleText  rounded-sm hover:bg-purpleText hover:text-primaryText transition ease-in duration-200 transform focus:outline-none "
        >My Work</button>
        
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
.high{
    min-height: 90vh;
}
</style>