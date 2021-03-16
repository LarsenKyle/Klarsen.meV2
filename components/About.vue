<template>
 <div id="about" class="md:flex mt-32" >
    <div  class="relative w-10/12 m-auto md:w-4/12  lg:mr-3 max">
        <img src="~/assets/images/about.jpg" class=" relative rounded-full z-10 w-10/12 m-auto" alt="headshot of Kyle Larsen in the mountains">
    </div>
    <div class="m-auto w-10/12 my-14 text-primaryText relative md:w-4/12  lg:ml-1 max" >
        <h2 class="text-3xl text-lightest mono-font mb-6">What I do...</h2>
        <p class="text-lg">I'm Kyle Larsen, and I'm based in Kalamzoo Michigan. As a freelance developer I enjoy creating clean, fast, simple to use websites and web applications. Delivering a great user experience is my primary goal.
            JAM-stack and serverless architecture are my go to tools, they allow me to develop powerful applications quickly and skillfully. 
        </p>  
    </div>
 </div>
</template>

<script>
export default {
   
   
}
</script>

<style>
.centered{
    display: grid;
    place-items: center;
}
.max{
    max-width: 400px;
}
.high{
    min-height: 70vh;
}
.overlay{
    
    position: relative;
}
.overlay::after{
    content: '';
    position: absolute;
    width: 91.666667%;
    height:100%;
    background-color: #0b0011;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    border-radius: 100%;
    opacity: 0.75;
    z-index: 20;
    margin: 0 auto;
    transition: all ease-in-out 0.25s;
}
.overlay:hover::after{
    opacity: 0;
    transition: all ease-in-out 0.25s;
}
</style>