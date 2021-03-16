<template>
<section id="work">
  <!--Schooley Ice Tackle  -->
  <div class="w-11/12 lg:w-9/12 mt-32 m-auto work-grid" >
    <div class="w-full">
      <img src="~/assets/images/dev/schooleyshow.png" alt="showcase of schooley ice tackle">
    </div>
    <div >
      <h3 class="text-4xl text-lightest text-center">Schooley Ice Tackle</h3>
      <div class="flex justify-center ">
        <p class="bg-deep bg-gradient-to-r from-deep  to-dark text-primaryText p-1 rounded-xl w-32 text-center m-2">E-commerce</p>
        <p class="bg-deep bg-gradient-to-r from-deep  to-dark text-primaryText p-1 rounded-xl w-32 text-center m-2">Responsive</p>
      </div>
      <p class="text-primaryText text-lg px-4">This northern Michigan ice fishing manufacturer’s website needed a redesign.  Built with Nuxt.js their new E-commerce site combines the speed of server side rendering and JAM-stack hosting too ensure nobody is left waiting while preparing for ice fishing season.</p>
      <div class="w-full m-auto mt-4 flex justify-center">
        <a  target="_blank" href="https://www.schooleyicetackle.com/">
    <button
        class=" py-2 px-4 mr-2 bg-lightest text-deep font-semibold rounded-sm hover:bg-deep hover:text-lightest transition ease-in duration-200 transform "
      >Visit Site</button>
      </a>
      <a target="_blank" href="https://github.com/LarsenKyle/JAM-Schooley">
    <button
        class="py-2 px-4 ml-2 bg-lightest text-deep font-semibold rounded-sm hover:bg-deep hover:text-lightest transition ease-in duration-200 transform "
      >View Code</button>
      </a>
      </div>
    </div>
  </div>
  <!-- Yoga Project -->
  <div class="w-11/12 lg:w-9/12 mt-32 m-auto work-grid reverse" >
    <div class="w-full">
      <img src="~/assets/images/dev/yogashow.png" alt="showcase of schooley ice tackle">
    </div>
    <div >
      <h3 class="text-4xl text-lightest text-center">Worland Yoga App</h3>
      <div class="flex justify-center ">
        <p class="bg-deep  bg-gradient-to-r from-deep  to-dark text-primaryText p-1 rounded-xl w-32 text-center m-2">Web-Application</p>
        <p class="bg-deep bg-gradient-to-r from-deep  to-dark text-primaryText p-1 rounded-xl w-32 text-center m-2">Serverless</p>
      </div>
      <p class="text-primaryText text-left text-lg px-4">A yoga studio in Worland WY was looking for a way to track class attendance and generate monthly reports. It is straightforward and easy to use, even for those who are not so technologically inclined.</p>
      <div class="w-full m-auto mt-4 flex justify-center reverse">
        <a target="_blank" href="https://github.com/LarsenKyle/WorlandYoga">
          <button
            class="py-2 px-4 ml-2 bg-lightest text-deep font-semibold rounded-sm hover:bg-deep hover:text-lightest transition ease-in duration-200 transform "
          >View Code</button>
        </a>
        <a target="_blank" href="https://geoapp-a5e8c.firebaseapp.com/">
         <button
          class="py-2 px-4 mr-2 bg-lightest text-deep font-semibold rounded-sm hover:bg-deep hover:text-lightest transition ease-in duration-200 transform "
        >Visit Site</button>
        </a>
      </div>
    </div>
  </div>
  <!-- Project Set -->
  <div class="w-11/12 lg:w-9/12 mt-32 m-auto work-grid " >
    <div class="w-full">
      <img src="~/assets/images/dev/projectset.png" alt="showcase of schooley ice tackle">
    </div>
    <div >
      <h3 class="text-4xl text-lightest text-center">Project Set</h3>
      <div class="flex justify-center ">
        <p class="bg-deep  bg-gradient-to-r from-deep  to-dark text-primaryText p-1 rounded-xl w-32 text-center m-2">JAM-Stack</p>
        <p class="bg-deep bg-gradient-to-r from-deep  to-dark text-primaryText p-1 rounded-xl w-32 text-center m-2">Design</p>
      </div>
      <p class="text-primaryText text-left text-lg px-4">This web-application helps climbing gyms manage their route-setting programs to ensure member needs are being met. It’s built with Nuxt.js and uses server side rendering to ensure lightning quick load times.</p>
      <div class="w-full m-auto mt-4 flex justify-center">
         <button
          class="py-2 px-6 mr-2 bg-lightest focus:outline-none opacity-50  text-deep font-semibold rounded-sm  "
        >Visit Site</button>
        <a target="_blank" href="https://github.com/LarsenKyle/Project-Set">
          <button
            class="py-2 px-6 ml-2 bg-lightest text-deep font-semibold rounded-sm hover:bg-deep hover:text-lightest transition ease-in duration-200 transform "
          >View Code</button>
        </a>
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
.reverse{
  direction: rtl;
}

</style>