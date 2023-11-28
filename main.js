/*const age = Number(prompt('Сколько вам лет?'));
if (age>= 0 && age<=12){
    console.log('Вы ребенок')
} else if(age>12 && age<18){
    console.log('Вы подросток')
}else if(age>=18 && age<=60){
    console.log('Вы взрослый')
}else if(age>60){
    console.log('Вы пенсионер')
}else{
    console.log('ошибка')
}*/

/*const number = prompt('Введите цифру от 0 до 9');
switch(number){
    case '1':
        console.log('!')
        break
    case '2':
        console.log('@')
        break    
    case '3':
        console.log('$')
        break
    case '5':
        console.log('%')
        break
    case '6':
        console.log('^')
        break   
    case '8':
        console.log('*')
        break
    case '9':
        console.log('(')
        break
    case '7':
        console.log('&')
        break
    case '0':
        console.log(')')
        break
    default:
        console.log('Ошибка')
        break
}*/

/*const number = prompt('Введите трехзначное число');
const arr = number.split('');
if(arr[0]===arr[1] || arr[1] === arr[2] || arr[0] === arr[2]){
    console.log('Есть одинаковые цифры')
} else if(arr[0]!==arr[1] && arr[1] !== arr[2] && arr[0] !== arr[2]){
    console.log('Нет одинаковых цифр')
}*/

/*const number = Number(prompt('Введите год'));
if((number%400===0 || number%4===0)&& number%100!==0){
    console.log('Високосный год')
}else if(Number.isFinite(number)===false){
    console.log('ошибка')
}else {
    console.log('Невисокосный год')
}*/

/*const number = prompt('Введите пятизначное число');
const number1 = number.split('').reverse().join('');
if(number===number1){
    console.log('Число является палиндромом')
}else{
    console.log('Число не является палиндромом')
}*/

/*const number = Number(prompt('Введите сумму в долларах'));
const val = prompt('Введите валюту(EUR, UAN, AZN)');
switch(val){
    case 'EUR':
        console.log(number*0.912);
        break
    case 'UAN':
        console.log(number*7.16);
        break
    case 'AZN':
        console.log(number*1.7);
        break
    default:
        console.log('ошибка')
        break
}*/

/*const summa = Number(prompt('Введите сумму покупки'));
if(summa>=200 && summa<300){
    console.log(summa-summa*0.03)
} else if(summa>=300 && summa<500){
    console.log(summa-summa*0.05)
}else if(summa>=500){
    console.log(summa-summa*0.07)
}else if(summa<200){
    console.log('нет скидки')
}else {
    console.log('ошибка')
}*/

/*const c = Number(prompt('Введите длину окружности'));
const p = Number(prompt('Введите периметр квадрата'));
if(c/3.14<=p/4){
    console.log('да, поместится')
}else if(c/3.14>p/4){
    console.log('нет, не поместится')
}else {
    console.log('ошибка')
}*/

/*let points = 0;
const a = Number(prompt('Выберите правильную формулу дискриминанта: 1)b^2-4ac 2)b-4ac 3)b^2+4ac'));
if(a===1){
    points=points + 2;
}
const b = Number(prompt('Выберите чему равен логарифм пяти по основанию 25: 1)2 2)5 3)1/2'));
if(b===3){
    points=points + 2;
}
const c = Number(prompt('Выберите чему равен тангенс 45 градусов: 1)sqrt3/3 2)1 3)sqrt3'));
if(c===2){
    points=points + 2;
}
console.log(points);*/

/*const a = Number(prompt('Введите день'));
const b = Number(prompt('Введите месяц'));
const c = Number(prompt('Введите год'));
if(a<=30 && (b===1 || b===3 || b===5 || b===7 || b===8 || b===10 || b===12)){
    console.log(`${a+1}.${b}.${c}`)
}else if(a<=29 && (b===6 || b===4 || b===9 || b===11)){
    console.log(`${a+1}.${b}.${c}`)
}else if(a===31 && (b===1 || b===3 || b===5 || b===7 || b===8 || b===10)){
    console.log(`1.${b+1}.${c}`)
}else if(a===30 && (b===6 || b===4 || b===9 || b===11)){
    console.log(`1.${b+1}.${c}`)
}else if(a===31 && b===12){
    console.log(`1.1.${c+1}`)
}else if(a<=27 && b===2){
    console.log(`${a+1}.${b}.${c}`)
}else if(a===28  && b===2 &&((c%400===0 || c%4===0)&& c%100!==0)){
    console.log(`${a+1}.${b}.${c}`)
}else if(a===28 && b===2 &&((c%400!==0 || c%4!==0)|| c%100===0)){
    console.log(`1.${b+1}.${c}`)
}else if( a===29 && b===2 && ((c%400===0 || c%4===0)&& c%100!==0)){
    console.log(`1.${b+1}.${c}`)
}*/

