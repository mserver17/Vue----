
<template>
  <div id="app">
    <div class="container">
      <h1>CommEnd</h1>
      <AddCommentForm @comment-added="handleCommentAdded" />
      <CommentsList />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AddCommentForm from './components/AddCommentForm.vue';
import CommentsList from './components/CommentsList.vue';
import { useComments } from './hooks/useComments';

const { comments, postComment, fetchComments } = useComments();

onMounted(() => {
  fetchComments();
});

const handleCommentAdded = (newComment) => {
  comments.value.push(newComment);
};
</script>

<style>
#app {
  background-color: #ffe8aa; 
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0%;

  /* height: auto;
  width: 100%;
  background: linear-gradient(45deg,#ffd979,#080142,rgb(255, 215, 128),#23d5ab);
  background-size: 300% 300%;
  animation: color 12s ease-in-out infinite */
}


.container h1{
  text-align: center; 
  margin: 0; 
  padding: 20px 0; 
}


</style>
