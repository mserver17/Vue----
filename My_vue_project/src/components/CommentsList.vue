<template>
  <div class="container">
    <div class="comments" v-if="comments && comments.length">
      <h2>Список комментариев ({{ comments.length }})</h2>
      <ul class="container-commItem">
        <CommentItem 
          class="commItem" 
          v-for="comment in comments" 
          :key="comment.id" 
          :comment="comment" 
          :class="{'commItem': true, positive: comment.reaction === 1, negative: comment.reaction === -1}"/>
      </ul>
    </div>
    <div v-else>
      <p v-if="error">Ошибка загрузки комментариев: {{ error.message }}</p>
      <p v-else>Загрузка комментариев...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import CommentItem from './CommentItem.vue';
import { useComments } from '../hooks/useComments';

const { comments, fetchComments, error } = useComments();

onMounted(async () => {
  try {
    await fetchComments();
  } catch (err) {
    console.error('Failed to fetch comments:', err);
    error.value = err;
  }
});
</script>


<style scoped>
.container-commItem{
  margin-top: 20px;
}
.commItem{
  background-color: #ffd26a;
  border: 1px solid #ffc233;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 10px 5px rgba(0,0,0,0.1);
  padding: 8px 20px;
  list-style: none;

}
.positive {
  background-color: #9dff24;
}
.negative {
  background-color: #ff5744;
}
.comments {
  margin-top: 20px;
  padding: 20px;
  background-color: #fee08c;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 700px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  font-family: "Montserrat", sans-serif;
}

.comments h2 {
  color: #272626;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal; 
}
</style>