<template>
  <div class="comments" v-if="comments && comments.length">
    <h2>Список комментариев ({{ comments.length }})</h2>
    <ul>
      <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment"
      v-on="{ 'click': () => console.log('Current comment:', comment) }" />
    </ul>
  </div>
  <div v-else>
    <p>Загрузка комментариев...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import CommentItem from './CommentItem.vue';
import { useComments } from '../hooks/useComments';

const { comments, fetchComments } = useComments();

onMounted(() => {
  fetchComments();
});
</script>

<style scoped>
</style>
