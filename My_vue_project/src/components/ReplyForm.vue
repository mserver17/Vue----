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
      <div class="reaction-group">
          <label class="form__label">
            <span class="visually-hidden">Нравится</span>
            <input
              v-model="reply.reaction"
              type="radio"
              name="reaction"
              value="1"
              class="form__radio visually-hidden"
              required
            />
            <svg
                class="form__img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="7.656"
                  style="fill: #f8de40"
                />
                <path
                  d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z"
                  style="fill: #e7c930"
                />
                <path
                  style="fill: #f06880"
                  d="M9.58 6.983A1.528 1.528 0 0 0 7.5 7.1l-.449.45L6.6 7.1a1.529 1.529 0 0 0-2.083-.113 1.472 1.472 0 0 0-.058 2.136L6.68 11.34a.518.518 0 0 0 .737 0l2.22-2.221a1.471 1.471 0 0 0-.057-2.136zM19.483 6.983A1.528 1.528 0 0 0 17.4 7.1l-.449.45-.451-.45a1.529 1.529 0 0 0-2.083-.113 1.471 1.471 0 0 0-.057 2.136l2.221 2.221a.517.517 0 0 0 .736 0l2.221-2.221a1.472 1.472 0 0 0-.055-2.14z"
                />
                <path
                  d="M16.666 12.583H7.334a.493.493 0 0 0-.492.544c.123 1.175.875 3.842 5.158 3.842s5.035-2.667 5.158-3.842a.493.493 0 0 0-.492-.544z"
                  style="fill: #864e20"
                />
                <path
                  style="fill: #f06880"
                  d="M12 16.969a6.538 6.538 0 0 0 2.959-.6 1.979 1.979 0 0 0-1.209-.853c-1.344-.3-1.75.109-1.75.109s-.406-.406-1.75-.109a1.979 1.979 0 0 0-1.209.853 6.538 6.538 0 0 0 2.959.6z"
                />
            </svg>
          </label>
          <label class="form__label">
            <span class="visually-hidden"> Нейтрально </span>
            <input
              v-model="reply.reaction"
              type="radio"
              required
              name="reaction"
              value="0"
              class="form__radio visually-hidden"
              checked
            />
            <svg
              class="form__img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="7.656"
                style="fill: #f8de40"
              />
              <path
                d="M7.055 7.313A1.747 1.747 0 1 0 8.8 9.059a1.747 1.747 0 0 0-1.745-1.746zM16.958 7.313A1.747 1.747 0 1 0 18.7 9.059a1.747 1.747 0 0 0-1.742-1.746z"
              />
              <path
                d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z"
                style="fill: #e7c930"
              />
              <path
                d="M17.051 12.78c-.139.122-.276.247-.418.366-.28.241-.566.476-.852.708a.218.218 0 0 1-.245.019l-.034-.019a50.552 50.552 0 0 1-.951-.564c-.2-.119-.394-.241-.59-.364a.218.218 0 0 0-.243.009l-.134.1c-.149.109-.3.214-.449.321-.3.215-.6.423-.9.633l-.106.074a.217.217 0 0 1-.248 0l-.106-.074c-.3-.21-.606-.417-.9-.632-.15-.107-.3-.212-.449-.321l-.134-.1a.218.218 0 0 0-.243-.008c-.2.122-.391.244-.589.363-.157.1-.316.19-.474.285s-.319.186-.478.279l-.033.019a.214.214 0 0 1-.245-.019 35.584 35.584 0 0 1-.853-.709c-.141-.119-.278-.244-.418-.366s-.275-.249-.41-.377c.168.08.335.161.5.247s.33.169.492.258c.228.121.453.247.677.374a.217.217 0 0 0 .242-.02l.2-.16c.145-.113.289-.228.436-.339.291-.225.587-.446.882-.665l.074-.055a.217.217 0 0 1 .246-.009l.1.064.464.3.461.3c.19.124.377.25.565.377a.217.217 0 0 0 .243 0c.187-.127.374-.254.564-.377.154-.1.306-.2.462-.3l.464-.3.1-.062a.215.215 0 0 1 .246.008l.074.054a60.924 60.924 0 0 1 1.52 1.166.215.215 0 0 0 .241.019c.225-.127.451-.253.68-.376.162-.089.328-.171.492-.258s.331-.167.5-.247c-.147.129-.283.256-.423.378z"
              />
            </svg>
        </label>
          <label class="form__label">
            <span class="visually-hidden">Не нравится</span>
            <input
              v-model="reply.reaction"
              type="radio"
              name="reaction"
              value="-1"
              class="form__radio visually-hidden"
              required
            />
            <svg
              class="form__img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="7.656"
                style="fill: #009345"
              />
              <path
                d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z"
                style="fill: #017b3f"
              />
              <path
                d="M9.6 8.833 9.021 8.6a22.797 22.797 0 0 0-2.138-.774 18.44 18.44 0 0 0-1.1-.3h-.012a.246.246 0 0 0-.186.448l.01.006c.325.2.656.392.991.573q.281.15.564.291a.245.245 0 0 1 0 .439q-.285.141-.564.292c-.335.18-.667.369-.992.573l-.016.01a.246.246 0 0 0 .187.447h.018c.374-.088.741-.19 1.105-.3s.723-.234 1.079-.362c.179-.064.355-.134.532-.2l.526-.213.573-.232a.246.246 0 0 0 .002-.465zM14.405 8.833l.574-.235a22.797 22.797 0 0 1 2.138-.774 18.44 18.44 0 0 1 1.1-.3h.012a.246.246 0 0 1 .186.448l-.01.006c-.325.2-.656.392-.991.573q-.28.15-.564.291a.245.245 0 0 0 0 .439q.285.141.564.292c.335.18.667.369.992.573l.016.01a.246.246 0 0 1-.187.447h-.018c-.374-.088-.741-.19-1.105-.3s-.723-.234-1.079-.362c-.179-.064-.355-.134-.532-.2l-.526-.213-.573-.232a.246.246 0 0 1 .003-.463zM17.051 13.32c-.139-.122-.276-.247-.418-.366a38.03 38.03 0 0 0-.852-.708.216.216 0 0 0-.245-.019l-.034.019c-.319.185-.636.372-.951.564-.2.119-.394.241-.59.364a.218.218 0 0 1-.243-.009l-.134-.1c-.149-.109-.3-.214-.449-.322-.3-.214-.6-.422-.9-.632l-.106-.074a.217.217 0 0 0-.248 0l-.106.074c-.3.21-.606.417-.9.632-.15.107-.3.212-.449.321l-.134.1a.218.218 0 0 1-.243.008c-.2-.122-.391-.244-.589-.363-.157-.1-.316-.19-.474-.285s-.319-.186-.478-.279l-.033-.019a.214.214 0 0 0-.245.019c-.287.232-.572.467-.853.709-.141.119-.278.244-.418.366s-.275.249-.41.377c.168-.08.335-.161.5-.247s.33-.169.492-.258c.228-.121.453-.247.677-.374a.217.217 0 0 1 .242.02l.2.16c.145.113.289.228.436.339.291.225.587.446.882.665l.074.055a.215.215 0 0 0 .246.008l.1-.063.464-.3.461-.3c.19-.124.377-.25.565-.378a.219.219 0 0 1 .243 0c.187.127.374.254.564.377.154.1.306.2.462.3l.464.3.1.063a.215.215 0 0 0 .246-.008L14.03 14c.295-.219.59-.44.882-.665.214-.165.426-.332.638-.5a.215.215 0 0 1 .241-.019c.225.127.451.253.68.376.162.089.328.171.492.258s.331.167.5.247a14.588 14.588 0 0 0-.412-.377z"
              />
              <path
                d="M17.051 12.78c-.139.122-.276.247-.418.366-.28.241-.566.476-.852.708a.218.218 0 0 1-.245.019l-.034-.019a50.552 50.552 0 0 1-.951-.564c-.2-.119-.394-.241-.59-.364a.218.218 0 0 0-.243.009l-.134.1c-.149.109-.3.214-.449.321-.3.215-.6.423-.9.633l-.106.074a.217.217 0 0 1-.248 0l-.106-.074c-.3-.21-.606-.417-.9-.632-.15-.107-.3-.212-.449-.321l-.134-.1a.218.218 0 0 0-.243-.008c-.2.122-.391.244-.589.363-.157.1-.316.19-.474.285s-.319.186-.478.279l-.033.019a.214.214 0 0 1-.245-.019 35.584 35.584 0 0 1-.853-.709c-.141-.119-.278-.244-.418-.366s-.275-.249-.41-.377c.168.08.335.161.5.247s.33.169.492.258c.228.121.453.247.677.374a.217.217 0 0 0 .242-.02l.2-.16c.145-.113.289-.228.436-.339.291-.225.587-.446.882-.665l.074-.055a.217.217 0 0 1 .246-.009l.1.064.464.3.461.3c.19.124.377.25.565.377a.217.217 0 0 0 .243 0c.187-.127.374-.254.564-.377.154-.1.306-.2.462-.3l.464-.3.1-.062a.215.215 0 0 1 .246.008l.074.054a60.924 60.924 0 0 1 1.52 1.166.215.215 0 0 0 .241.019c.225-.127.451-.253.68-.376.162-.089.328-.171.492-.258s.331-.167.5-.247c-.147.129-.283.256-.423.378z"
              />
            </svg>
          </label>
        </div>
      </div>
        <div class="action-buttons">
          <button type="submit" class="btn-form-send">Отправить ответ</button>
          <button @click="$emit('close')" class="btn-form-cancel">Закрыть</button>
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
import { reactive, defineProps, defineEmits, ref } from 'vue';
import { useComments } from '../hooks/useComments';

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
  border-bottom: 2px solid #138308;
  opacity: 1;
  transition: all 0.2s linear;
  transform: scale(1.2);
}
.form__radio + .form__img {
  opacity: 0.5;
}
</style>