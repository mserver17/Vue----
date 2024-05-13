<template>
    <div class="home">
      <h1>Comment App</h1>
      <button @click="goToComments">Перейти к комментариям</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  function goToComments() {
    router.push('/comments');
  }
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  h1 {
    margin-bottom: 20px;
    color: rgb(97, 59, 25);
    font-family: "Montserrat", sans-serif;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #91551f;
    color: white;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #6a3408;
  }
  h1{
    color: #5a300e;
  }
  </style>