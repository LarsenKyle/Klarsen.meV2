<template>
<section id="contact" class="mt-32 pb-6">
     <h3 class="mono-font text-center text-lightest text-3xl mb-6" >Get in touch!</h3>
    <form action="https://formspree.io/krlars87@gmail.com" method="POST" class="w-full max-w-lg m-auto text-primaryText">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                E-mail
            </label>
            <input v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Message
            </label>
            <textarea v-model="text" class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/3">
            <button
            type="submit"
            @submit="clear"
            class="py-2 px-4 ml-2 bg-lightest text-deep font-semibold rounded-sm hover:bg-deep hover:text-lightest transition ease-in duration-200 transform "
            >Send</button>
            </div>
            <div class="md:w-2/3"></div>
        </div>
    </form>
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

</style>