import { ref } from 'vue';

const toastsContent = ref('');
const toastsVisible = ref(false);
const toastType = ref('');

export const useSubmitHandler = () => {
  const handleSubmit = async (action, payload, successMessage, closeHandler) => {
    if (payload.author.trim() && payload.text.trim()) {
      try {
        await action(payload);
        toastsContent.value = successMessage;
        toastType.value = 'success';
        toastsVisible.value = true;
        setTimeout(() => { toastsVisible.value = false; }, 3000);
        payload.author = '';
        payload.text = '';
        if (closeHandler) closeHandler();
      } catch (error) {
        toastsContent.value = `Ошибка: ${error.message}`;
        toastType.value = 'error';
        toastsVisible.value = true;
        setTimeout(() => { toastsVisible.value = false; }, 5000);
      }
    }
  };

  return { handleSubmit, toastsContent, toastsVisible, toastType };
};