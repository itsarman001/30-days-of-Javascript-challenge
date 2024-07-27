// Task 8
import axios from "axios";

const todoData = axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

console.log(todoData);
