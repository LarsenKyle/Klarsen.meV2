<template>
<section id="contact" class="mt-32 pb-6">
     <h3 class="mono-font text-center text-lightest text-4xl mb-6" >Get in touch!</h3>
    <form action="https://formspree.io/f/krlars87@gmail.com" method="POST" class="w-10/12 max-w-lg m-auto text-primaryText">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                E-mail
            </label>
            <input v-model="email" class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="_replyto" type="email">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
                Message
            </label>
            <textarea  v-model="text" class=" no-resize appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="message" id="message"></textarea>
            </div>
        </div>
        <div class="grid place-items-end">
            <div>
            <button
            type="submit"
            @submit="clear"
            class="py-2 px-4  bg-primaryText text-deep font-semibold rounded-sm hover:bg-deep hover:text-primaryText transition ease-in duration-200 transform "
            >Send</button>
            </div>
           
        </div>
    </form>
    <div class="copy text-center m-auto mt-8 text-lightest">
    <a  rel="noopener" target="_blank" href="https://github.com/LarsenKyle/klarsen.mev2">
        <div>Designed &amp; Developed By Kyle Larsen</div>
        <div>&copy; 2021, All rights reserved</div>
        <div class="flex justify-center mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.5" viewBox="0 0 31.5 31.5">
  <path id="Icon_awesome-github-square" data-name="Icon awesome-github-square" d="M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM19.5,29.229c-.591.105-.809-.26-.809-.562,0-.38.014-2.32.014-3.888a2.74,2.74,0,0,0-.795-2.159c2.6-.288,5.344-.647,5.344-5.14a3.61,3.61,0,0,0-1.2-2.742,4.4,4.4,0,0,0-.12-3.164c-.977-.3-3.213,1.259-3.213,1.259a11.061,11.061,0,0,0-5.85,0s-2.236-1.561-3.213-1.259a4.364,4.364,0,0,0-.12,3.164,3.531,3.531,0,0,0-1.1,2.742c0,4.472,2.623,4.852,5.224,5.14a2.548,2.548,0,0,0-.745,1.568,2.467,2.467,0,0,1-3.4-.977,2.45,2.45,0,0,0-1.793-1.2c-1.139-.014-.077.717-.077.717.759.352,1.294,1.7,1.294,1.7.682,2.088,3.945,1.385,3.945,1.385,0,.977.014,2.566.014,2.855s-.211.668-.809.563A11.665,11.665,0,0,1,4.2,18.1,11.158,11.158,0,0,1,15.6,6.743,11.408,11.408,0,0,1,27.281,18.1,11.558,11.558,0,0,1,19.5,29.229Zm-6.9-4.3c-.134.028-.26-.028-.274-.12s.077-.2.211-.225.26.042.274.134S12.741,24.9,12.6,24.933Zm-.668-.063c0,.091-.105.169-.246.169s-.26-.063-.26-.169.105-.169.246-.169S11.932,24.764,11.932,24.87Zm-.963-.077c-.028.091-.169.134-.288.091s-.225-.134-.2-.225.169-.134.288-.105C10.912,24.6,11,24.7,10.969,24.792Zm-.865-.38c-.063.077-.2.063-.3-.042s-.134-.225-.063-.288.2-.063.3.042S10.167,24.356,10.1,24.412Zm-.64-.64c-.063.042-.183,0-.26-.105s-.077-.225,0-.274.2-.014.26.091a.206.206,0,0,1,0,.288Zm-.457-.682c-.063.063-.169.028-.246-.042-.077-.091-.091-.2-.028-.246s.169-.028.246.042C9.056,22.936,9.07,23.041,9.007,23.091Zm-.471-.52a.132.132,0,0,1-.2.028c-.091-.042-.134-.12-.105-.183a.165.165,0,0,1,.2-.028C8.522,22.437,8.564,22.514,8.536,22.57Z" transform="translate(0 -2.25)" fill="#a4add3"/>
</svg>
</div>
    </a>
    </div>
</section>
</template>

<script>
export default {
data(){
    return{
        email: '',
        text:''
    }
},
methods:{
    clear(){
        this.email = ''
        this.text = ''
    }
}
}
</script>

<style>
.copy{
transition: all .2s ease-in-out; 
}
.copy:hover{
    transform: scale(1.1); 
}

</style>