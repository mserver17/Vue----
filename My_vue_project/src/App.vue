<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

import{reactive, computed } from 'vue'

const comment = reactive({
  author: '',
  stars: null,
  text: '',
  photos: [],
  isRecommended: true

})
</script>

<template>
  <div class="container pt-5 pt - 5">
    <input 
      type="text"
      v-model="comment.author"
      placeholder="Как вас зовут?"
      class="form-control mb-3"
    >
    <textarea 
      rows="3"
      v-model="comment.text"
      class="form-control"
      placeholder="Сообщение..."


      
    ></textarea>
  </div>
</template>

<style scoped>
</style>
