// // Создать функцию, которая получает id пользователя и выводит 
// // в консоль данные о пользователе. Если такого пользователя нет, 
// // необходимо вызвать исключение “Такого пользователя нет”. 
// // Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>


// const userId = -1


// async function getId() {
//     try {
//         const getID = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         if (getID.status !== 200) {
//             throw new Error("Нет такого поста!!");
//         }else{
//             const result = await getID.json()
//             console.log(result);}
//     } catch (error) {
//         console.error(error);
//     }
// }
// getId()


// 2)	Доработать ранее созданную функцию таким образом, 
// чтобы помимо данных о пользователе (имя и почта) получить 
// все посты пользователя.Эти данные функция должна возвращать.
// Ссылка: 
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

// Данные должны быть в виде объекта 

// {
// 	user: {name, email},
// 	posts: [...]
// }


// const userId = 1;

// async function getId(){
//     try{
//         const getId = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         if (getId.status !== 200){
//             throw new Error('Такого пользователя нет');
//         }
//         const result = await getId.json();
//         // console.log(result);
//         const resultGetPosts = await getPosts.json();
//         const obj = {user: {name: result.name, email: result.email}, posts: resultGetPosts,};
//         return obj;   
//         // console.log(obj);    
//     }catch (error){
//         console.error(error);
        
//     }
// } 
// getId();






// Создать функцию, которая получает данные о пользователе и  
// добавляет div с данными о пользователе и всеми его постами. 
// Возвращаемая карточка должна иметь следующую структуру.

/* <div class=”user-container”>
	<div class=”user”>
		<p>Имя пользователя</p>
		<p>Почта пользователя</p>
	</div>
	<div class=”posts”>
		<div class=”item”>
			<p>Название поста</p>
			<p>Текст поста</p>
		</div>
		<div class=”item”>
			<p>Название поста</p>
			<p>Текст поста</p>
		</div>
		….….
	</div>
</div */

// const userId = 1;

// async function getId(){
//     try{
//         const getId = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         if (getId.status !== 200){
//             throw new Error('Такого пользователя нет');
//         }
//         const result = await getId.json();
//         // console.log(result);
//         const resultGetPosts = await getPosts.json();
//         const obj = {user: {name: result.name, email: result.email}, posts: resultGetPosts,};
//         return obj;   
//         // console.log(obj);    
//     }catch (error){
//         console.error(error);
        
//     }
// } 
// getId();



// const container = document.querySelector(".container");

// async function getDateUsers() {
//     const userContainer = document.createElement("div");

//     userContainer.classList.add("userContainer");
//     const date = await getId();

//     const user = document.createElement("div");
//     user.classList.add("user");

//     const userNameP = document.createElement("p");
//     userNameP.innerText = date.user.name

//     const userEmailP = document.createElement("p");
//     userEmailP.innerText = date.user.email

//     const userPosts = document.createElement("div");
//     userPosts.classList.add("posts");

//     user.append(userNameP, userEmailP);
    

//     const datePost = date.posts
//     datePost.forEach(element => {
//         const item = document.createElement("div");
//         item.classList.add("item");
//         const title = document.createElement("h3");
//         title.innerText = `title: ${element.title}`

//         const body = document.createElement("p");
//         body.innerText = `body: \n${element.body}`

//         item.append(title,body);
//         userPosts.append(item)
        

//     });
    
//     userContainer.append(user, userPosts);
//     container.append(userContainer);
    
    
// }
// getDateUsers()






// 4)	Добавить в интерфейсе две кнопки (<- , ->) позволяющая переключаться между пользователями. 
// При нажатии на стрелку в лево должен отправиться запрос на получение данных про пользователя с меньшим id, 
// а при нажатии на кпопку в право данные про следующего пользователя.


let userId = 1;


async function getId(){
        try{
            const getId = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            if (getId.status !== 200){
                throw new Error('Такого пользователя нет');
            }
            const result = await getId.json();
            
            const resultGetPosts = await getPosts.json();
            const obj = {user: {name: result.name, email: result.email}, posts: resultGetPosts,};
            return obj;   
               
        }catch (error){
            console.error(error);
            
        }
    } 
    getId();



const container = document.querySelector(".container");

async function getDateUsers() {
    const userContainer = document.createElement("div");

    userContainer.classList.add("userContainer");
    const date = await getId();

    const user = document.createElement("div");
    user.classList.add("user");

    const userNameP = document.createElement("p");
    userNameP.innerText = date.user.name

    const userEmailP = document.createElement("p");
    userEmailP.innerText = date.user.email

    const userPosts = document.createElement("div");
    userPosts.classList.add("posts");

    user.append(userNameP, userEmailP);
    

    const datePost = date.posts
    datePost.forEach(element => {
        const item = document.createElement("div");
        item.classList.add("item");
        const title = document.createElement("h3");
        title.innerText = `title: ${element.title}`

        const body = document.createElement("p");
        body.innerText = `body: \n${element.body}`

        item.append(title,body);
        userPosts.append(item)
        

    });
    
    userContainer.append(user, userPosts);
    container.append(userContainer);
    
    
}
getDateUsers()





const lastBtn = document.querySelector(".last");
const nextBtn = document.querySelector(".next");


lastBtn.onclick = () => {
    if (userId > 1) {
        container.innerHTML = "";
        userId--;
        getDateUsers();
    }  
}

nextBtn.onclick = () => {
    container.innerHTML = "";
    userId++;
    getDateUsers();
}

