<template>
  <div class="container">
    <button 
      type="submit"
      @click="showModal = true" 
      class="btn btn-form-send"
      style="outline: none;" onfocus="this.style.outline='5px solid #00FFFF';" onblur="this.style.outline='none';">
      Написать комментарий
    </button>
    <dialog 
      v-if="showModal" 
      @close="closeModal" 
      class="modal">
      <form 
        method="post" 
        @submit.prevent="handleSubmit" 
        class="modal-content">
        <div class="form-body">
          <div class="input-group">
            <div class="form-group">
            <label for="username">Username:</label>
            <input
              placeholder="Ваше имя" 
              type="text" 
              id="username"
              name="username" 
              autocomplete="username" 
              v-model="comment.author" 
              class="input-control" 
              required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea 
              id="message"
              name="message" 
              autocomplete="message"
              v-model="comment.text" 
              class="input-control" 
              placeholder="Ваш комментарии" 
              required>
            </textarea>
          </div>
        </div>

        <ReactionSelector v-model:reaction="comment.reaction" />

      </div>
      <div class="actions">
          <button 
            type="submit" 
            class="btn btn-form-send"
            style="outline: none;" onfocus="this.style.outline='5px solid #00FFFF';" onblur="this.style.outline='none';">
            Отправить
          </button>
          <button
            type="button" 
            @click="closeModal" 
            class="btn btn-form-cancel"
            style="outline: none;" onfocus="this.style.outline='5px solid #00FFFF';" onblur="this.style.outline='none';">
            Отмена
          </button>
      </div>
      </form>
    </dialog>
    <div v-if="toastsVisible" 
        :class="{'toast': true, 
                 'toast-success': toastType === 'success', 
                 'toast-error': toastType === 'error'}">
                 {{ toastsContent }}
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useComments } from '../hooks/useComments';
import ReactionSelector from './ReactionSelector.vue';


const toastsContent = ref('');
const toastsVisible = ref(false);
const toastType = ref('');
const dialogVisible = ref(false);
const { postComment } = useComments(); 

const emit = defineEmits(['create'])
const props = defineProps({
  parentCommentId: {
    type: Number,
    defualt: null,
  },
  visible: {
    type: Boolean,
  },
  sending: {
    type: Boolean,
  },
})

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
  if (comment.author.trim() && comment.text.trim()) {
    try {
      await postComment(comment);
      toastsContent.value = 'Комментарий успешно добавлен';
      toastType.value = 'success';
      toastsVisible.value = true;
      setTimeout(() => { toastsVisible.value = false; }, 3000);
      comment.author = '';
      comment.text = '';
      showModal.value = false;
    } catch (error) {
      toastsContent.value = `Ошибка: ${error.message}`;
      toastType.value = 'error';
      toastsVisible.value = true;
      setTimeout(() => { toastsVisible.value = false; }, 5000);
    } finally {
      showModal.value = false; 
    }
  }
}
</script>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-body {
  display: flex;
  justify-content: space-between;
}
.input-group {
  display: flex;
  flex-direction: column;
}
.input-control {
    width: 150%;
  }
.reactions {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;;
}

.form__label {
  margin-top: 15px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
}
.form__img {
  width: 40px; 
  height: 40px; 
  margin-right: 10px;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0,0,0,0);
  overflow: hidden;
  white-space: nowrap;
}
.form__radio + .form__text {
  font-size: 2rem;
}
.form__radio:checked + .form__img {
  border-bottom: 2px solid #693b0d;
  opacity: 1;
  transition: all 0.2s linear;
  transform: scale(1.2);
}
.form__radio + .form__img {
  opacity: 0.45;
}
</style>

