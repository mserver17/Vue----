<template>
   <div class="modal">
    <dialog open class="modal-content">
      <form @submit.prevent="handleSubmit">
        <div class="form-content">
          <div class="input-group">
            <h3>Ответ на комментарий:</h3>
            <input type="text" v-model="reply.author" class="input-control" placeholder="Ваше имя" required />
            <textarea v-model="reply.text" class="input-control" placeholder="Напишите ответ" required></textarea>
          </div>

          <ReactionSelector v-model:reaction="reply.reaction" />

      </div>
        <div class="action-buttons">
          <button type="submit" class="btn-form-send"
          style="outline: none;" onfocus="this.style.outline='5px solid #00FFFF';" onblur="this.style.outline='none';">
          Отправить ответ</button>
          <button 
            type="button" 
            @click="$emit('close')" 
            class="btn-form-cancel"
            style="outline: none;" onfocus="this.style.outline='5px solid #00FFFF';" onblur="this.style.outline='none';">
            Закрыть
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

const props = defineProps({
  parentId: Number
});
const emit = defineEmits(['close']); 
const toastsContent = ref('');
const toastsVisible = ref(false);
const toastType = ref('success'); 
const { postReply } = useComments();

const reply = reactive({
  author: '',
  text: '',
  reaction: 0,
  parentId: props.parentId
});

const handleSubmit = async () => {
  if (reply.author.trim() && reply.text.trim()) {
    try {
      await postReply(reply);
      toastsContent.value = 'Ответ на комментарий успешно добавлен';
      toastType.value = 'success';
      toastsVisible.value = true;
      setTimeout(() => { toastsVisible.value = false; }, 3000); 
      reply.author = '';
      reply.text = '';
      emit('close');
    } catch (error) {
      toastsContent.value = `Ошибка при добавлении ответа: ${error.message}`;
      toastType.value = 'error';
      toastsVisible.value = true;
      setTimeout(() => { toastsVisible.value = false; }, 5000); 
      console.error('Failed to post reply:', error);
    }
  }
};
</script>


<style scoped>
.form-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
}

.reaction-group {
  flex: 1; 
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.input-group {
  flex: 9;  
  margin-right: 10px; 
}

.form__label {
  display: flex;
  align-items: center;
  margin: 10px 0px;
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
  border-bottom: 2px solid #61370e;
  opacity: 1;
  transition: all 0.2s linear;
  transform: scale(1.2);
}
.form__radio + .form__img {
  opacity: 0.5;
}
</style>