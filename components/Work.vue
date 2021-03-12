<template>
<section>
  <div class="w-11/12 lg:w-9/12 mt-32 m-auto work-grid" >
    <div class="w-full">
      <img src="~/assets/images/dev/schooleyshow.png" alt="showcase of schooley ice tackle">
    </div>
    <div >
      <h3 class="text-4xl text-lightest text-center">Schooley Ice Tackle</h3>
      <div class="flex justify-center ">
        <p class="bg-deep text-primaryText p-1 rounded-xl w-32 text-center m-2">E-commerce</p>
        <p class="bg-deep text-primaryText p-1 rounded-xl w-32 text-center m-2">Responsive</p>
      </div>
      <p class="text-primaryText text-lg px-4">This northern Michigan ice fishing manufacturer’s website needed a redesign.  Built with Nuxt.js their new E-commerce site combines the speed of server side rendering and JAM-stack hosting too ensure nobody is left waiting while preparing for ice fishing season.</p>
      <div class="w-7/12 m-auto mt-4 flex justify-center">
        
    <button
        class="py-2 px-4 mr-2 bg-lightest text-deep font-semibold rounded-sm hover:bg-deep hover:text-lightest transition ease-in duration-200 transform "
      >Visit Site</button>
    <button
        class="py-2 px-4 ml-2 bg-lightest text-deep font-semibold rounded-sm hover:bg-deep hover:text-lightest transition ease-in duration-200 transform "
      >View Code</button>
      </div>
    </div>
  </div>
  
  
  </section>
</template>

<script>
export default {

}
</script>

<style>
.work-grid{
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>