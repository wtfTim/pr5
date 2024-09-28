'use strict';

// let user = new Object();
// let user = {
//     name: 'Alina',
//     age: 20,
//     "pets name": 'Ars'
// };

// console.log(user['pets name'])

// user.surname = 'Халиуллина'

// console.log(user)


// let fruit = prompt('Фрукт', 'Lemon')
// let shop = {
//     [fruit] : 10
// }

// console.log(shop.lemon)


// for (let key in shop){
//     console.log(key, shop[key])
// }


// let a = 5;
// let b = a;

// let user = {name:'Al'}
// let user2 = user;

// // user2.age=10;
// // console.log(user)

// for(let key in user){
//     user2[key] = user[key];
// }


// let user ={
//     name: 'Alina',
//     sayHi(){
//         alert(`Hi ${user, name}`);
//     }
// }

// let user2 = user;
// user = null
// user2.sayHi();


// function sayHi(){
//     alert(this.name)
// }

// let user = {
//     name: 'Al'
// }

// let user2 = {
//     name: 'La'
// }

// user.fun = sayHi;
// user2.fun = sayHi;

// user.fun();
// user2.fun();


// let str = 'Hello';

// console,log(str[0])
// console,log(str.at(-1))


// for(let letter of str){
//     console.log(letter)
// }

// console.log(str.toUpperCase())
// console.log(str[0].toLowerCase)


// user = {
//     name: 'John';
//     surname: 'Smith';

//     let name2 = name;
//     name2: 'Pete';

// }


// let arr = [1, 2, 3, 'Apple', {name:'Alina'}, function(){alert('hi')}, [1,2]];

// console.log(arr[0])
// console.log(arr.at(-2))

// arr[0] = 'cat'

// console.log(arr[4].name)
// arr[5]()


// push добавляет элемент в конец
// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым
// unshift добавляет элемент в начало
// pop удаляет последний элемент


// arr.push(2)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(10)
// console.log(arr)
// arr.shift()
// console.log(arr)


// for(let i=0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for(let elem of arr){
//     console.log(elem)
// }


// let arr = ['apple', 'cucumber', 'water', 'milk'];

// delete arr[1];
// console.log(arr)


// let arr = ['apple', 'cucumber', 'water', 'milk'];

// arr.splice(1, 2, 'banana', 'watermelon', 'owied')

// let arr2 = arr.slice(2,3);
// console.log(arr)
// console.log(arr2)


// arr.forEach((item, index, arr)=>{
//     alert(`у ${item} index = ${index} в массиве: [${arr}]`)
// })


// console.log(arr.indexOf('cucumber'))
// console.log(arr.includes('cucumber')) 
// console.log(arr.includes('erferferf'))


// let users = [
//     {id: 1, name: 'Alina'},
//     {id: 2, name: 'Alina1'},
//     {id: 3, name: 'Alina2'},
// ]
// (a, b)=>{
//     ewrfd
//     were
// }
// a => a+4
// let user = users.find(item => item.id == 3)
// console.log(user.name)


