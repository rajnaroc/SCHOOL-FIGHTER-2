<template>
        <!-- <section class=" h-screen landscape:bg-['hola'] bg-no-repeat bg-cover bg-center"> -->
            <button @click="$router.push('/')" class="bg-[#ff6868] text-white px-4 py-2 rounded font-bold">Salir</button>
    <!-- </section> -->
</template>

<script>
// import { escenarios } from '@/db/escenarios';

// import escenario_elegido from '@/views/VistaEscenarios.vue'
export default {
    name: "VistaCombate",
    data(){
        return{
            // escenarios,
            // escenario_elegido: ''
        }
    }
}
</script>

<style>

</style>