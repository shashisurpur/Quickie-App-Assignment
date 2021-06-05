  
import axios from 'axios';

const url = 'https://quickie-app-assignment.herokuapp.com/posts';

export const getPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);