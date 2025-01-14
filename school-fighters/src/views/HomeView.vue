<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto my-4">
    <HelloWorld msg="Welcome to Your Vue.js App" class="text-center text-xl font-bold"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
