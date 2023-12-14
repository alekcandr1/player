// function showMe() {
//     console.log("Hellow!");
// }
// showMe();


// function showMeNew(value) {
//     console.log(value);
// }
// showMeNew("Hellow!")


// function showMessage2(val = "Hellow!") {
//    console.log(val)
// }
// showMessage2()


// function showMessage3(val = "Hellow!") {
//     console.log(val)
// }
// showMessage3('By!')


// // Стрелочная функция

// const newSum = (a, b) => {
//     console.log(a + b)
// }
// newSum(3, 4)


// const newSum2 = (a, b) => console.log(a + b)

// const one = function() {
//     alert('word');
// };
// const two = one;
// two();




// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );



//   let ask = (question, yes, no) => confirm(question) === true ? console.log(yes) : console.log(no);
//   ask('Вы согласны?', 'Вы согласны', 'Вы отменили исполнение');



// // 1
// let isPositive = (num) => console.log(num > 0 ? true : false)
// isPositive(10);

// //2
// let dayOfWeek = "Monday"; 

// if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") { 
//     dayOfWeek = "dayOff" 
// } else { 
//     dayOfWeek = "weekday" 
// } 

// switch (dayOfWeek) { 
//     case "weekday": 
//         console.log("Будний день"); 
//         break; 

//     case "dayOff": 
//         console.log("Выходной день"); 
//         break; 
//     default: 
//         console.log("Некорректное значение дня недели"); 
// } 

// //3
// let isInRange = (num) => console.log((num <= 20 && num >= 10) || (num === 0 || num === 100) ? true : false)
// isInRange(-1);
// isInRange(10);
// isInRange(11);
// isInRange(21);
// isInRange(0);
// isInRange(100);


// let prep = { 
//     name: "Igor", 
//     sizes: { 
//         height: 177, 
//         weight: 80 
//     } 
// }; 

// function newPrep(oldPrep, key, value) {
//     return { ...oldPrep, sizes: { ...oldPrep.sizes }, [key]: value};
// }
// let prep2 = newPrep(prep, 'isMarried', 'yes');

// console.log(prep2);


// // 1
// let fruits = ["Яблоко", "Апельсин", "Слива"]; 

// console.log(fruits[0]); 
// console.log(fruits[1]); 
// console.log(fruits[2]); 

// fruits.push('Бананас'); 
// console.log(fruits); 

// fruits.unshift('Бананас');
// console.log(fruits); 

// fruits.shift() 
// console.log(fruits); 

// fruits.pop() 
// console.log(fruits); 

// console.log(fruits.join(',')) 

// console.log(fruits.indexOf("Апельсин")); // выведет 1 
// console.log(fruits.indexOf("Груша")); // выведет -1, так как "Груша" не является элементом массива 

// let slicedFruits = fruits.slice(1, 2); // (start, end) 
// console.log(slicedFruits); // выведет ["Апельсин"] 

// // Создание нового массива, содержащего элементы от индекса 1 (включительно) и до конца массива 
// let secondSlicedFruits = fruits.slice(1); 
// console.log(secondSlicedFruits) // ['Апельсин', 'Слива'] 


// let arr = ['сдавайтесь', 'сдавайтесь', 'Не сдавайтесь', 'не сдавайтесь', 'никогда, черт вас подери не сдавайтесь', 'при первой же трудности всегда сдавайтесь'];
// console.log(arr.slice(2, arr.length - 1).join(','));


// 2
const users = [
    {
        id: 1,
        name: 'John',
        surName: 'Doe',
        address: '123 Main St'
    },
    {
        id: 2,
        name: 'Jane',
        surName: 'Smith',
        address: '456 Elm St'
    },
    {
        id: 3,
        name: 'Tom',
        surName: 'Johnson',
        address: '789 Oak St'
    }
];

// console.log(users.filter(user => user.id <= 2));
// console.log(users.filter(user => user.name === 'Tom'));

// for(let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// let i = 0;
// while(i < users.length) {
//     console.log(users[i]);
//     i++;
// };

// users.forEach(user => console.log(user));

// let mappedUsers = users.map(user => user);
// console.log(mappedUsers);

// обновить имя у второго юзера
// console.log(users.map(user => (user.id === 2 ? { ...user, name: 'Alice' } : user)));


// добавить новый объект 
// const newUser = { 
//     id: 4, 
//     user: 'Emily', 
//     surName: 'Davis', 
//     address: '321 Pine St' 
// }; 
// console.log([ ...users, newUser]);

// Задание
// const tasks = [ 
//     { id: 1, title: "HTML&CSS", isDone: true }, 
//     { id: 2, title: "JS", isDone: true }, 
//     { id: 3, title: "ReactJS", isDone: false } 
// ] 

// const iLike = tasks.map(task => (task.id === 2 ? { ...task, title: 'I like JS'} : task));
// console.log(iLike);

// tasks.push({id: 4, title: "Next", isDone: false });
// console.log(tasks);

// 4
// const numbers = [
//     [1, 2, 3, 4, 5],
//     [10, 20, 30, 40, 50],
//     [100, 200, 300, 400, 500],
// ];
// numbers.map(number => {
//     number.map(num => console.log(num));
// });


//learn
//1
// function checkAge(age) {
//     return age > 18 ? true : confirm('Родители разрешили?')
// }

// checkAge(19);

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );

// learn obj
// 1
// const user = {
//     name: 'John',
//     surname: 'Smith',   
// }
// user.name = 'Pete';
// delete user.name;

// 2
// function isEmpty (obj) {
//  for (let key in obj) {
//     return false;
//  }
//  return true;

// }

// let schedule = {};
// alert( isEmpty(schedule) );

// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert(sum);


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {

//     for (let key in obj) {
//         debugger;
//         typeof obj[key] == 'number' ? (obj[key] *= 2) : key;
//     }

// }

// multiplyNumeric(menu);
// console.log(menu);

// const styles = ['Джаз', 'Блюз','рок', 'поп'];

// styles.push('Рок-н-ролл');
// console.log(styles);

// styles[Number((styles.length - 1) / 2)] = 'Классика';
// console.log(styles);

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );