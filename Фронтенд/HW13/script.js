const container = document.querySelector(".container");
const lastBtn = document.querySelector(".last");
const nextBtn = document.querySelector(".next");



let userId = 1; 


if (localStorage.getItem('userId')!=='') {
        const takeUserId =localStorage.getItem('userId');
        userId = JSON.parse(takeUserId);
        
    } 


async function getId(){
        try{
            const getId = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);


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




async function getDateUsers() {
    const userContainer = document.createElement("div");

    userContainer.classList.add("userContainer");

    const date = await getId();

    const user = document.createElement("div");
    user.classList.add("user");

    const userNameP = document.createElement("p");
    userNameP.innerText = date.user.name;

    const userEmailP = document.createElement("p");
    userEmailP.innerText = date.user.email;

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




lastBtn.onclick = () => {
    if (userId > 1) {
        container.innerHTML = "";
        userId--;

        let userToLocal = JSON.stringify(userId);
        localStorage.setItem('userId',userToLocal);


        getDateUsers();
    } else{
        alert('Такого пользователя нет')
    }  
}







nextBtn.onclick = () => {
    if (userId < 10) {
      container.innerHTML = "";
    userId++;


    let userToLocal = JSON.stringify(userId);
    localStorage.setItem('userId',userToLocal);

    getDateUsers();  
    } else {
        alert('Такого пользователя нет')
    }
    
}

