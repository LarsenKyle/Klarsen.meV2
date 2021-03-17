<template>
 <div class="w-11/12 m-auto mt-32" >
   <h3 class="mono-font text-center text-lightest text-4xl mb-6" >One Developer, Many Skills</h3>
   <div class="dev-grid text-primaryText">
       <div class="dev-item centered px-12 py-6">
           <div class=" flex lg:h-64 h">
           <img class="mt-auto self-end" src="~/assets/images/dev/frontend.svg" alt="nuxt js logo">
           </div>
           <h4 class="text-2xl text-lightest mb-2 mt-2 text-center">Responsive UI/UX</h4>
           <p>It's important a website or application looks good and functions well on all devices. I deliver a clean design and intuitive functionality no matter what device the user connects with. </p>
       </div>
       <div class="dev-item centered px-12 py-6">
           <div class=" flex lg:h-64">
           <img  class="self-end" src="~/assets/images/dev/serverless.svg" alt="nuxt js logo">
           </div>
            <h4 class="text-2xl text-lightest mb-2 mt-2 text-center">Serverless Backend</h4>
           <p>Scalable cost effective solutions for any project. A serverless backend allows projects to be developed quickly and securely. Serverless backends scale with ease and grow with your app.</p>
       </div>
       <div class="dev-item centered px-12 py-6">
           <div class=" flex lg:h-64">
           <img class="self-end" src="~/assets/images/dev/communication.svg" alt="nuxt js logo">
           </div>
            <h4 class="text-2xl text-lightest mb-2 mt-2 text-center">Communication</h4>
            <p>Keen listening and patient communication is how I ensure success as a developer. The ability to communicate well is one of my greatest assets as an individual.</p>
       </div>
       
   </div>
 </div>
</template>

<script>
export default {
   
   
}
</script>

<style>

.dev-grid{
   display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
}
.dev-item{
    flex: 0 1 400px; /*  No stretching: */
    align-self: center;
}
</style>