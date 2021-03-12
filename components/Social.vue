<template>
    <div class="flex justify-center m-auto lg:flex-col lg:fixed lg:bottom-0 lg:left-14 z-10">
        <a class="m-1  lg:ml-1 ml-0" href=""><img class="filter" src="~/assets/images/face.svg" alt=""></a>
        <a class="m-1" href=""><img class="filter" src="~/assets/images/git.svg" alt=""></a>
        <a class="m-1" href=""><img class="filter" src="~/assets/images/linked.svg" alt=""></a>
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
.filter:hover{
    filter: invert(38%) sepia(7%) saturate(4080%) hue-rotate(210deg) brightness(94%) contrast(88%);
    opacity: 0.6;
    transition: 0.5s;
}
</style>