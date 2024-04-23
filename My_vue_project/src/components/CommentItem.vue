<template>
  <li>
    <p>{{ comment.author }}: {{ comment.text }}</p>
    <button @click="toggleReplyForm">Ответить</button>
    <div v-if="showReplyForm">
      <AddCommentForm :parentId="comment.id" />
    </div>
    <ul>
      <CommentItem v-for="reply in comment.replies" :key="reply.id" :comment="reply" />
    </ul>
  </li>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import AddCommentForm from './AddCommentForm.vue';

const props = defineProps({
comment: Object
});

const showReplyForm = ref(false);

const toggleReplyForm = () => {
showReplyForm.value = !showReplyForm.value;
};
</script>

<style scoped>

</style>
