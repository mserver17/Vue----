<template>
  <div id="app">
    <h1>Comments App</h1>
    <AddCommentForm @comment-added="handleCommentAdded" />
    <CommentsList />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AddCommentForm from './components/AddCommentForm.vue';
import CommentsList from './components/CommentsList.vue';
import { useComments } from './hooks/useComments';

const { comments, addComment, fetchComments } = useComments();

onMounted(() => {
  fetchComments();
});

const handleCommentAdded = (newComment) => {
  comments.value.push(newComment);
};
</script>

<style>

</style>
