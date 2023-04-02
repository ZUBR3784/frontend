const canvas = document.querySelector('#myCanvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',() =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
})


// методы canvasa:
// 1) getContext - webgL2, webgL3 (для рис 2д и 3д графики)

// 2) strokeRect(x,y,width,height) - метод для рис контура прямоуг(все стили писать до методов т.к. после не читает)
    // strokeRect(x,y,width,height)-зад нач точ(верх правый угол)
    // strokeStyle- изм цвета градиент и узор

// 3) fillRect(x,y,width,height) - метод созд заливки
    // fillStyle - изменен цвета заливки
    // globalAlpha - прозрачность элем

// 4) clearRect(x, y, width, height)
// Очистка прямоугольной области, делая содержимое совершенно прозрачным.

// 5) beginPath - начало пути
// moveTo(x,y) - 50,50
// lineTo(x,y) - 200, 50
// stroke(); - рисует








function draw() {
    // const rec = canvas.getContext('2d');
    // rec.strokeStyle = 'purple';
    // rec.lineWidth = 40; /* */
    // rec.strokeRect(40,40,300,400);
    
    // rec.fillStyle ='yellow';
    // rec.globalAlpha = 0.5;       
    // rec.fillRect( 40, 40 , 300, 400);
    


    // // // отрисовать прямоугольник, который занимает весь размер экрана с отступами по 10 единиц от каждой стороны.
    // // rec.strokeStyle = 'red';
    // // rec.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);


    // const ctx = canvas.getContext("2d");
    // const numOfRec = 10;
    // const avgH = canvas.height / numOfRec;
    // const avgW = canvas.width / numOfRec;

    // for (let i = 0; i < numOfRec; i++) {
    //     const rectH = avgH * (i + 1);
    //     const rectX = avgW * i;
    //     const rectY = canvas.height - rectH;

    //     ctx.fillStyle = "orange";
    //     ctx.fillRect(rectX, rectY, avgW, rectH);
    // }




    // // Написать цикл, который выводит 10 квадратов друг в друге.


    // const square = canvas.getContext("2d");
    // const numOfSq = 20; 
    // const gap = canvas.width / numOfSq / 2;
    // let minWH = canvas.width / numOfSq;
    
    // for (let i = 0; i < numOfSq; i++){
    //     const sqX = canvas.width / 2 - minWH / 2;
    //     const sqY = canvas.height / 2 - minWH / 2;
    //     square.strokeRect(sqX, sqY, minWH, minWH);
        
        
    //     minWH += gap;
    // }



    // const ctx = canvas.getContext("2d");
    // ctx.beginPath();
    // ctx.moveTo(50,300);
    // ctx.lineTo(300, 200); 
    // ctx.lineTo(500, 600); 

    // ctx.stroke();



    // треугольник
    // const triangle = canvas.getContext("2d");
    // triangle.beginPath();
    // triangle.moveTo(800,40);
    // triangle.lineTo(1000,40);  
    // triangle.lineTo(800,450);
    // triangle.closePath();/*доводит линию в начало */


    // triangle.fillStyle = 'red'

    // triangle.fill();

    // triangle.strokeStyle = 'purple';
    // triangle.lineWidth = 20;
    // triangle.strokeRect(800,40,300,400);


























    // // // Написать цикл, который выводит 10 квадратов друг в друге
    // (черновик)
    // const square = canvas.getContext("2d");
    // // const w = 40;
    // // const h = 40;
    // // const width = 400;
    // // const height = 600;
    // // const numOfRec = 10;
    // // const minH = canvas.height / numOfRec;
    // // const minW = canvas.width / numOfRec;
    // const width = 400;
    // const height = 600;
    // // for (let i = 0; i < numOfRec; i++) {
    // //     const w = minW*i;
    // //     const h = minH*i;
    // //     width+=w;
    // //     height+=h;
    //     square.strokeStyle = "red";
    //     square.strokeRect(w, h, width, height);
    // // }


        
}


draw();








