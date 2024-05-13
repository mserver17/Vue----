import { ref } from 'vue';
import axios from '/axios';

const baseURL = 'http://194.67.93.117:80/comments';

export function useComments() {
  const comments = ref([]);

  async function fetchComments() {
    try {
      const response = await axios.get(baseURL);
      comments.value = response.data.reverse();
      comments.value.forEach(comment => {
        comment.repliesCount = comments.value.filter(c => c.parentId === comment.id).length;
      });
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  }

  async function postComment(comment) {
    try {
      const response = await axios.post(baseURL, comment, {
        headers: {
          'Content-Type': 'application/json',
          Username: 'mserver17',
        },
      });
      comments.value.unshift(response.data);
      return { success: true, message: 'Comment added successfully!' };
    } catch (error) {
      console.error('Error submitting comment:', error);
      return { success: false, message: error.message };
    }
  }

  async function postReply(reply) {
    try {
      const response = await axios.post(baseURL, {
        author: reply.author,
        text: reply.text,
        reaction: reply.reaction,
        parentId: reply.parentId
         
      }, {
        headers: {
          'Content-Type': 'application/json',
          Username: 'mserver17',  
        },
      });
      if (response.data) {
        comments.value.push(response.data); 
      }
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  }
  // async function fetchReplies(commentId) {
  //   try {
  //     const url = `${baseURL}?parentId=${commentId}`;
  //     const response = await axios.get(url);
  //     console.log('Replies for comment', url); 
  //     return response.data.length;
  //   } catch (error) {
  //     console.error('Error fetching replies for comment', commentId, ':', error);
  //     return 0;
  //   }
  // }

  return {
    comments,
    fetchComments,
    postComment,
    postReply,
    // fetchReplies
  }
}



