// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.


function Calculator() {
    this.a = 0,
    this.b = 0,

    this.read = function () {
        this.a = +prompt("Введіть значення а");
        this.b = +prompt("Введіть значення b");
        console.log(this.a, this.b)
    },

        this.sum = function () {
        return this.a + this.b;
    },

    this.mul = function () {
        return this.a * this.b;
    }

}


let calculator = new Calculator;
calculator.read();

alert("Sum is:" + calculator.sum());
alert("Mul is:" + calculator.mul());





