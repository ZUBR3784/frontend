const canvas = document.querySelector('#myCanvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



window.addEventListener('resize',() =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circle();
})

function circle() {
    // const ctx = canvas.getContext('2d')
    // arc(x,y,radius,startAngle,endAngle,clockwise)
    // startAngle - начальн угол

    // clockwise - направл движ по час стрел
    // clockwise by default - true / false

    // Math.PI - 3.14
    // C = 2PiR



    // // первая задача

    // const centerX = canvas.width / 2;
    // const centerY = canvas.height / 2;
    // let radius = 10;
    // for (let i = 0; i < 10; i++) {
    //     ctx.beginPath();
    //     ctx.arc(centerX,centerY,radius,0,2*Math.PI);
    //     ctx.stroke();
    //     ctx.closePath();
    //     radius+=20;   
    // }





    // // task2
    // let x = 200;
    // let y = 200;
    // for (let i = 0; i < 4; i++) {
    //     if (i==1 || i==2) {
    //         ctx.beginPath()
    //         ctx.arc(x, y, 100, 0, Math.PI)
    //         ctx.stroke()
    //     } else {
    //         ctx.beginPath()
    //         ctx.arc(x, y, 100, 0, 2 * Math.PI)
    //         ctx.stroke()
    //     }
        
    //     x += 200
    // }



    // // task3
    // ctx.beginPath();
    // ctx.arc(100, 100, 100, 0, 2 * Math.PI);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(canvas.width -100, 100, 100, 0, 2 * Math.PI);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(canvas.width -100,canvas.height -100, 100, 0, 2 * Math.PI);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(100,canvas.height -100, 100, 0, 2 * Math.PI);
    // ctx.stroke();





    // task4

    const data = [
        {
            title: 'javascript',
            amount: 150000
        },
        {
            title: 'python',
            amount: 140000
        },
        {
            title: 'golang',
            amount: 130000
        },
        {
            title: 'java',
            amount: 120000
        }
    ];
    
    const ctx = canvas.getContext('2d');
    const gap = 20;
    const height = 60;
    const maxWidth = canvas.width - 2*gap;
    let maxAmount = data.reduce((acc, val)=> val.amount > acc ? val.amount : acc,0);
    let y = gap;
    data.forEach((item) =>{
        const length = (item.amount / maxAmount) * maxWidth;
        ctx.fillStyle = 'green';
        ctx.fillRect(gap,y,length,height);
        ctx.fillStyle = 'white';
        ctx.font = '18px Arial'
        ctx.fillText(`${item.title} - ${item.amount}`, gap * 2, y+height / 2);

        y+=gap+height;


    })
}

circle()