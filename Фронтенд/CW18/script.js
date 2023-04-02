// panding
// Типы данных!!!!
// patch
// HTTP methods
// От Starta University 7 всем 07:18 PM
// throw
// ajax
// Task queue
//www.jsv9000.app/
// single thread
//developer.mozilla.org/en-US/docs/Web/API/Response/json






// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
//   });
//   promise1.then(() => {
//     console.log(3);
//   });
//   console.log(4);
  




// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//   });
//   promise1.then(() => {
//     console.log(3);
//   });
//   console.log(4);




// console.log("start");
// const promise1 = new Promise((resolve,reject) => {
// 	console.log(1);
// })

// promise1.then(res => {
// 	console.log(2)
// })
// console.log("end");





// const id =1;
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   .then(response => response.json())
//   .then(post => {
//     console.log('Данные поста:', post);
//     const userId = post.userId; // id автора поста

//     // получаем данные автора поста
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then(response => response.json())
//       .then(author => {
//         console.log('Данные автора:', author);
//       });
//   });




async function getPostAndAuthor() {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postData = await postResponse.json();
  
    const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
    const authorData = await authorResponse.json();
  
    return { post: postData, author: authorData };
  }
  
  getPostAndAuthor(id)
    .then(data => console.log(data))
    .catch(error => console.error(error));







// async function getPostAndCommentById(commentId) {

//     // Получение комментария по ID
//     const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
//     const comment = await commentResponse.json();
//     // console.log(comment);

//     // Получение поста по ID комментария
//     const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postId}`);
//     const post = await postResponse.json();

//     console.log(`Post title: ${post.title}\nComment: ${comment.body}`);
  	
// }

// Пример использования
// getPostAndCommentById(1);






// async function getPostAndCommentById(commentId) {

//     // Получение комментария по ID
//     const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
//     const comment = await commentResponse.json();
//     console.log(comment);

//     // Получение поста по ID комментария
//     const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postId}`);
//     const post = await postResponse.json();
//     // console.log(post);
	
// 	  const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
// 	  const authorData = await authorResponse.json();

	//   console.log(authorData);

    // console.log(`Post title: ${post.title}\nComment: ${comment.body}`);
  	
// }

// // Пример использования
// getPostAndCommentById(1);


  