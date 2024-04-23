<template>
  <div class="container pt-5">
    <button @click="showModal = true" class="btn btn-primary">Написать комментарий</button>
    <dialog v-if="showModal" @close="closeModal" class="modal">
      <form @submit.prevent="handleSubmit" class="modal-content">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="comment.author" class="form-control mb-3" required />
        <textarea v-model="comment.text" rows="3" class="form-control" required></textarea>
        <button type="submit" class="btn btn-primary mt-3">Отправить</button>
        <button @click="closeModal" class="btn btn-secondary mt-3">Отмена</button>
      </form>
    </dialog>
    <div v-if="toastsVisible" class="toast">{{ toastsContent }}</div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useComments } from '../hooks/useComments';

const toastsContent = ref('');
const toastsVisible = ref(false);
const dialogVisible = ref(false);
const { postComments } = useComments();

const comment = reactive({
  author: '',
  text: '',
  reaction: 0,
  parentId: null,
});

const showModal = ref(false);

function closeModal() {
  showModal.value = false;
  dialogVisible.value = false;
}

async function handleSubmit() {
  if (!comment.author || !comment.text) return;

  await postComments(comment, toastsContent, toastsVisible, dialogVisible);
  comment.author = '';
  comment.text = '';
  showModal.value = false;
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #eee;
  padding: 10px;
  border-radius: 5px;
}
</style>

