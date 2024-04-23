import { ref } from 'vue'
import axios from 'axios'

export function useComments() {
  const comments = ref([])
  
  async function fetchComments() {
    try {
      const response = await axios.get('http://194.67.93.117:80/comments')
      comments.value = response.data.reverse()
    } catch (error) {
      console.log(error)
    }
  }

  async function postComments(comment, toastsContent, toastsVisible, dialogVisible) {
    try {
      const url = 'http://194.67.93.117:80/comments'
      const commentBody = {
        author: comment.author,
        text: comment.text,
        reaction: comment.reaction,
        parentId: comment.parentId,
      }

      const response = await axios.post(url, commentBody, {
        headers: {
          'Content-Type': 'application/json',
          Username: 'mserver17',
        },
      })

      comments.value.push(response.data);
      toastsContent.value = 'Comment added successfully!';
      toastsVisible.value = true;
      dialogVisible.value = false;
    } catch (error) {
      toastsContent.value = `Error submitting comment: ${error.message}`;
      toastsVisible.value = true;
      console.log(error.message);
    }
  }

  return {
    comments,
    fetchComments,
    postComments,
  }
}

