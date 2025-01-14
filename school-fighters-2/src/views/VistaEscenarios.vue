<template>
    <section class=" h-screen landscape:bg-[url('../assets/img/imagen.png')] bg-no-repeat bg-cover bg-center">
        <h1 class=" text-center text-white text-5xl p-5 font-bold">SCHOOL FIGHTER 2</h1>
        <p class="text-center text-white w-full p-5">El mejor juego de lucha entre alumnos.
            Selecciona los alumnos que van a darse de hostias.
        </p>
        <div class="flex justify-center w-full items-center gap-6">
            <select class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-1/3 p-2.5" name="" id="">
                <option value="" selected> {{ escenario1 }}</option>
                <option v-for="(escenario,index) in escenario" :key="index" :value="index">{{ escenario.nombre }}</option>
            </select>
        </div>
        <div class=" flex justify-center my-5">
            <button @click="$router.push('/')" class="bg-[#ff6868] text-white px-4 py-2 rounded font-bold">volver</button>
            <button @click="$router.push('/combate')" class="bg-[#3dbc1e] text-white px-4 py-2 rounded font-bold">Continuar</button>
        </div>
    </section>
</template>

<script>
import {escenarios} from '@/db/escenarios.js'

export default {
    name: "VistaPersonajes",
    data(){
        return{
            escenarios: escenarios,
            escenario1: 'Seleccion de escenarios'

        }
    }
}
</script>

<style>

</style>