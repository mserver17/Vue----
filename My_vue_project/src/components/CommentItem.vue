<template>
  <li :class="{'comment-item': true, positive: comment.reaction === 1, negative: comment.reaction === -1}" >
    <div class="body-comment">
      <h3 class="name">~ {{ comment.author }}</h3> 
      <div class="container-text">
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>

    <div class="info">
      <button 
        @click="showReplyForm = true" 
        class="reply-button"
        style="outline: none;" onfocus="this.style.outline='5px solid #00FFFF';" onblur="this.style.outline='none';">
        <span 
          class="material-symbols-outlined">
          reply
        </span>
      </button>
    <div class="info-data">
      <p class="countReply"><span class="material-symbols-outlined">forum</span> {{ comment.repliesCount }}</p>
      <p> {{ formattedDate }}</p>
    </div>
    </div>
    
    <ReplyForm 
      v-if="showReplyForm" 
      :parentId="comment.id" 
      @close="showReplyForm = false"       
    />
    <ul class="nested-comments">
      <CommentItem 
        v-for="reply in comment.replies" 
        :key="reply.id" 
        :comment="reply"
        class="commItem"
      />
    </ul>
  </li>
</template>

<script setup>
import { ref, computed } from 'vue';
import ReplyForm from './ReplyForm.vue';
import CommentItem from './CommentItem.vue';

const showReplyForm = ref(false);
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});
const formattedDate = computed(() => {
  return new Date(props.comment.createdAt).toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});
</script>

<style scoped>
.name{
  margin-left: 15px;
  font-size: 22px;
  margin-top: 15px;
  margin-bottom: 15px
}
.container-text{
  margin-left: 40px;
  height: auto;
  width: auto;
  background-color: #f9d989;
  padding: 2px 15px 25px 25px;
  border-radius: 0px 10px 10px 30px;
}
.text{
  font-size: 18px;
}
.info{
  display: flex;
  justify-content: space-between;
}
.info-data{
  display: flex;
  justify-content: space-between;
}
.info p {
  margin-left: 25px;
}
.reply-button {
  background-color: #84501c; 
  color: white; 
  border: none;
  padding: 0px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.5s;
}
.reply-button:hover {
  background-color: #422507;
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  vertical-align: middle;
}

</style>