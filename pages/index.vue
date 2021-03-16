<template>
  <div class="bg-dark overflow-hidden">
    <transition name="fade">
    <div v-if="loading" class="centered h-screen w-screen gradient-border ">
      <img class="w-12 gradient-border" src="~/assets/images/logo.svg" alt="Logo of small circles with a k in the middle">
    </div>
    </transition>
    <transition name="fade">
    <div v-if="!loading">
      <Nav/>
      <Landing />
      <About/>
      <Tech/>
      <New/>
      <Work/>
      <Contact/>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
   data: () => ({
      loading: true,
    }),
     methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
    mounted(){
      this.start()
      setTimeout(()=> {
        this.finish()
      },3000)
    }
}
</script>

<style >
.gradient-border {
  --border-width: 3px;
  position: relative;
  font-family: Lato, sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  border-radius: var(--border-width);
  z-index: 2;
}
.gradient-border::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: 1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(90deg, rgba(11,0,17,1) 0%, rgba(164,173,211,1) 100%);
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 4s alternate infinite;
  }
@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
 
</style>
