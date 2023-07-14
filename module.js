// Напишіть функцію min(a,b), яка повертає менше чисел a і b.
function min(a,b){
    if (a>b ){ 
        return b;
    }
    
    return a;
}
console.log (min(5,15))
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

const styleMusic = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];
logItems(array){
    for (let i = 0; i < array.length; i += 1)
console.log(`${i+1} - ${array[i]}`)
}
logItems(styleMusic)

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив


const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
findSmallerNumber(arrayOfNumbers){
    let smollerNumber = arrayOfNumbers[0];
for (const number of numbers){
if(smollerNumber > number){
    smollerNumber = number;
}

}return smollerNumber;
}

console.log(findSmallerNumber(numbers));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
caclculateAverage(...numbers){
    let sum = 0;
    let count 0;
    for( const number of numbers){
        if( typeof mumber === `number`){
            sum += number;
            count += number;
        }


    }
return sum;
}
console.log(caclculateAverage(5,10,5,"hello"));