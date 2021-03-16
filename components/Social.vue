<template>
    <div class="flex justify-center m-auto lg:flex-col lg:fixed lg:bottom-0 lg:left-14 z-10">
        <a class="m-1  lg:ml-1 ml-0" rel="noopener" target="_blank" href="https://www.facebook.com/kyle.larsen.5832"><img class="filter" src="~/assets/images/face.svg" alt="icon link to facebook"></a>
        <a class="m-1" target="_blank" rel="noopener" href="https://github.com/LarsenKyle"><img class="filter" src="~/assets/images/git.svg" alt="icon link to github"></a>
        <a class="m-1 " target="_blank" rel="noopener" href="https://www.linkedin.com/in/kyle-larsen-046a2b147/"><img class="filter" src="~/assets/images/linked.svg" alt="icon link to linkedin"></a>
        <div class="hidden lg:block lg:bg-primaryText lg:h-24 wide lg:m-auto"></div>
      
    </div>
</template>

<script>
export default {

}
</script>

<style>
.wide{
    width: 1px;
    
}
.filter{
    transition: all ease-in-out .2s;
}
.filter:hover{
   transform: scale(1.1); 
}
</style>