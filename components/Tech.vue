<template>
 <div class="w-9/12 m-auto mt-16" >
   <h3 class="mono-font text-center text-lightest text-3xl mb-6" >Tech I'm working with</h3>
   <div class="tech-grid">
       <div class="tech-item px-12 py-6 border-base border-2 border-opacity-10">
           <img src="~/assets/images/logos/nuxt.svg" alt="nuxt js logo">
       </div>
       <div class="tech-item px-12 py-6 border-base border-2 border-opacity-10">
           <img src="~/assets/images/logos/firebase.svg" alt="nuxt js logo">
       </div>
       <div class="tech-item px-12 py-6 border-base border-2 border-opacity-10">
           <img src="~/assets/images/logos/netlify.svg" alt="nuxt js logo">
       </div>
       <div class="tech-item px-12 py-6 border-base border-2 border-opacity-10">
           <img src="~/assets/images/logos/react.svg" alt="nuxt js logo">
       </div>
       <div class="tech-item px-12 py-6 border-base border-2 border-opacity-10">
           <img src="~/assets/images/logos/strapi.svg" alt="nuxt js logo">
       </div>
       <div class="tech-item px-12 py-6 border-base border-2 border-opacity-10">
           <img src="~/assets/images/logos/gql.svg" alt="nuxt js logo">
       </div>
       <div class="tech-item px-12 py-6 border-base border-2 border-opacity-10">
           <img src="~/assets/images/logos/tailwind.svg" alt="nuxt js logo">
       </div>
       <div class="tech-item px-12 py-6 border-base border-2 border-opacity-10">
           <img src="~/assets/images/logos/heroku.svg" alt="nuxt js logo">
       </div>
       
   </div>
 </div>
</template>

<script>
export default {
   
   
}
</script>

<style>

.tech-grid{
   display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
}
.tech-item{
    flex: 0 1 240px; /*  No stretching: */
    align-self: center;
    height: 100px;
}
</style>