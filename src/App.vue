<template>
  <div id="app">
    <header>
      <div :class="{'burger': true, 'active': isActive}" @click="toggleMenu">
      <span></span>
    </div>
      <nav :class="{'open': isActive}">
      <router-link class="router-link" to="/">Главное</router-link>
      <router-link class="router-link" to="/about-us">О проекте</router-link>
      <router-link class="router-link" to="/comments">Страница комментариев</router-link>
      <router-link class="router-link" to="/settings">Настройки</router-link>
    </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { onMounted,onUnmounted, ref } from 'vue';
import { useComments } from './hooks/useComments';

const { fetchComments } = useComments();


const isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}  

function handleScroll() {
  if (window.scrollY > 50) {
    isActive.value = false;
  }
}
onMounted(() => {
  fetchComments();
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>

<style>
#app {
  background-color: #ffe8aa; 
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0%;

  /* height: auto;*/
  /* width: 100%; */
}
header{
  background: #64370c;
  padding: 20px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position:absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;


}
main {
  margin-top: 60px; 
  padding: 20px;
}
.container h1{
  text-align: center; 
  margin: 0;
  padding: 20px 0;
  color: #63300b;
}
</style>
