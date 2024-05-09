<template>
<div>
    <div class="container">
      <h1>EchoEcho</h1>
      <AddCommentForm @comment-added="handleCommentAdded" />
      <CommentsList />
    </div>
  </div>
</template>

<script setup>
import CommentsList from '../components/CommentsList.vue';
import AddCommentForm from '../components/AddCommentForm.vue';

const handleCommentAdded = (newComment) => {
  comments.value.push(newComment);
};
</script>

<style scoped>

</style>