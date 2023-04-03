
// Создайте класс Circle, который рендерит окружность в двумерной плоскости. Класс должен иметь следующие свойства и методы:
// x и y: Координаты x и y центра окружности (плавающие значения).
// радиус: Радиус окружности (float).
// color: Цвет окружности (строка).
// Конструктор: Инициализирует свойства (x, y, радиус и цвет) значениями по умолчанию (0, 0, 1 и "черный").
// area(): Вычисляет и возвращает площадь круга.
// render(ctx): Рендеринг окружности на холсте с использованием заданного контекста 2D-рендеринга.
// Доп. задача: добавить еще методы для стилизовки кругов.


class Circle{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    area(areaOfCircle){
        return areaOfCircle = Math.PI*this.radius**2;

    }
    render(ctx){
        const canvas = document.querySelector('#canvas');
        const ctxx = canvas.getContext('2d');
        ctxx.beginPath();
        console.log(this.x);
        ctxx.strokeStyle = this.color;
        ctxx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctxx.stroke();


    }
}




const ctx = new Circle(50, 50, 10, 'red');
ctx.render()
console.log(ctx.area());
console.log(ctx);
