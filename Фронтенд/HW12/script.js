// Задача 1: 
// Используя async await по id комментария выведите в консоль текст поста и комментарий.
// Для этого нужно отправить два запроса к API jsonplaceholder.com: 
// один для получения поста, связанного с данным комментарием - https://jsonplaceholder.typicode.com/comments/${commentId},
//  и второй - для получения самого комментария - https://jsonplaceholder.typicode.com/posts/${comment.postId}
// Здесь функция получает ID комментария в качестве аргумента.


// // Задача 2: 
// // Доработайте прошлое решение таким образом, чтобы помимо текста поста выводилось имя автора.


// async function getTextAndComments(commentId) {
//     const getComment = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
//     const dataComents = await getComment.json();
//     const postId=dataComents.postId;

//     const getPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const post = await getPost.json();
//     const bodyPost= post.body
//     const autorId=post.userId;

//     const getAutor= await fetch(`https://jsonplaceholder.typicode.com/users/${autorId}`);
//     const autor= await getAutor.json();
//     return { comment: dataComents, textPost: bodyPost,nameOfAutor: autor.name };

    
// }

// getTextAndComments(1)
// .then(data=>console.log(data))
// .catch(error=>console.error(error))



// // Задача 3: 
// //  Создать функцию, которая получает id комментария находит id поста. 
// //  По этому идентификатору необходимо вывести все комментарии к этому посту.

// async function getTextAndComments(commentId) {
//         const getComment = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
//         const dataComents = await getComment.json();
//         const idPost = dataComents.postId

//         const getComments = await fetch(`https://jsonplaceholder.typicode.com/comments/`);
//         const comments = await getComments.json();
//         const coments2=[];
//         comments.forEach(element => {
//             if (element.postId===idPost) {
//                 coments2.push(element)
//             }
//         });

//         return {allComments:coments2, post:dataComents}

// }

// getTextAndComments(1)
// .then(data=>console.log(data))
// .catch(error=>console.error(error))







// Задача 1:
// Сделать форму, с помощью которого пользователь отправит id поста, чьи комментарии нужно отрисовывать на странице в виде списка.
// Для получения поста =>    https://jsonplaceholder.typicode.com/comments/ 
// Для получения комментариев =>    https://jsonplaceholder.typicode.com/posts/ /comments 

// const dataOfForm = document.querySelector('#form');
// const input = document.querySelector("#input");
// const ul=document.createElement('ul');

// dataOfForm.onsubmit=(e)=>{
//     e.preventDefault();
//     getComments(input.value)
//     .then((postComments) => {
//         console.log(postComments)})
//     .catch((error) => console.error(error));
// }

// async function getComments(dataFromServer) {
//     ul.innerHTML="";
//     document.body.append(ul);
//     const getComent= await fetch(`https://jsonplaceholder.typicode.com/posts/${dataFromServer}/comments `);debugger
//     const coments = await getComent.json();
    
//     coments.forEach(element => {
//         let li= document.createElement("li");
//         li.innerText=element.name;
//         ul.append(li);
//     });
//     return ;
// }




// // Создать страницу на свободную тему. 
// // Все данные нужно брать по API, которые можете взять 
// // из  https://jsonplaceholder.typicode.com/ 

// // Помимо этого нужно добавить все соответствующие стили 
// // для красивого отображения элементов, а так же обязательно 
// // ваша страница должна быть адаптивной.


const mainPage = document.querySelector('.mainPage');
const asidebarSection = document.querySelector('asidebarSection')
const nameAuthor = document.querySelector('.nameAuthor');
const photo = document.querySelector('.photo');
const autorDate = document.querySelector('.autorDate');
const phone = document.querySelector('.phone');
const email= document.querySelector('.email');
const addres= document.querySelector('.addres');
const postsContainer= document.querySelector('.postsContainer');
const comentsContainer= document.querySelector('.comentsContainer');



const prevUserBtn = document.querySelector('#prev-user');
const nextUserBtn = document.querySelector('#next-user');
const prevPostBtn = document.querySelector('#prev-post');
const nextPostBtn = document.querySelector('#next-post');



let userId= 1;
let postId =1;


prevUserBtn.onclick =()=>{
    if (userId > 1) {
        postsContainer.innerText = "";
        postId=1;
        userId--;
        getUserPage();
    }  
}


nextUserBtn.onclick =()=>{
    if (userId < 10) {
        postsContainer.innerText = "";
        postId=1;
        userId++;
        getUserPage();
    }  
}



prevPostBtn.onclick =()=>{
    if (postId > 1) {
        postsContainer.innerHTML = "";
        postId--;
        getUserPage();
    }  
}

nextPostBtn.onclick =()=>{
    if (postId < 10) {
        postsContainer.innerHTML = "";
        postId++;
        getUserPage();
    }  
}



async function getUserPage() {
    try {
        const getDateAboutUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        const getComents = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const getFotoUser = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${userId}`);

        if (getDateAboutUser.status!==200) { 
            
            throw new Error('Ошибка запроса!')
        } else {
            const dateAboutUser = await getDateAboutUser.json();
            const getUserPosts = await getPosts.json();
            const getComentsToPost = await getComents.json();
            const fotoUser = await getFotoUser.json();


            fotoUser.forEach(element => {
                photo.setAttribute('src',element.url)
            });

            
            
            const post = document.createElement("ol");
            post.classList.add("post");
            post.innerText = `The ${postId} post: ${getUserPosts.title}`;
            postsContainer.append(post);


           getComentsToPost.forEach(element => {
                const coment = document.createElement("li");
                coment.classList.add("coment");
                coment.innerText = `Coment: ${element.name}`;
                post.append(coment);
            });

            nameAuthor.textContent = dateAboutUser.name;
            phone.textContent = `phone : ${dateAboutUser.phone}`;
            email.textContent = `email : ${dateAboutUser.email}`;
            addres.textContent = `addres : ${dateAboutUser.address.street}`;

        }  
    }

    catch (e){console.error(e)}
}

getUserPage(nameAuthor)



