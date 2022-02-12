// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers) sum += n;

// console.log(sum);

// numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// 17 array from range

// const numbers = arrayFromRange(-10, -4);
// console.log(numbers);
// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

//18 includes

// const numbers = [1, 2, 3, 4];
// console.log(numbers.includes());
// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }

// // 19 except
// const numbers = [1, 2, 3, 4];
// const output = except(numbers, [1, 3]);
// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array) if (!excluded.includes(element)) output.push(element);
//   return output;
// }

// // 20 moving an element (bingung)
// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 0, 1);

// console.log(output);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error("invalid offset.");
//     return;
//   }

//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(index + offset, 0, element);
//   return output;
// }

// // 21 count occurances (bingung)
// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurrences(number, 1);
// console.log(count);
// function countOccurrences(array, searchElement) {
//   return array.reduce((accumulator, current) => {
//     const occurence = (current === searchElement) ? 1 : 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurence;
//   }, 0);
// }

// 22 get max
// const numbers = [1, 2, 3, 4];
// const max = getMax([1, 3, 4, 1]);
// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return underfined;

//   //   let max = array[0];

//   //   for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];

//   //   return max;
//   // }\
//   // bisa juga

//   return array.reduce((a, b) => (a > b ? a : b));
// }

//23 movies (eror)

// const movies = [
//   { title: "a", year: 2018, rating: 4.5 },
//   { title: "b", year: 2018, rating: 4.7 },
//   { title: "c", year: 2018, rating: 3 },
//   { title: "d", year: 2017, rating: 4.5 },
// ];

// // mau dapetin film 2018 rating > 4
// // sort them by their rating
// //descending order
// //pick their tittle

// const titles = movies
//   .filter((m) => m.year === 2018 && m.rating >= 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reserve()
//   .map((m) => m.title);

// console.log(titles);

// 1. function

// function walk () {
//     console.log ('walk');
// }

// 2. hoisting

// 3. arguments

// function nilai(a, b) {
//   return a + b;
// }

// console.log(nilai(1, 2));

// 4. the rest operator (lebih di  persingkat biasanya buat menghitung )

// function nilai(discount, ...prices) {
//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

// console.log(nilai(0.1, 20, 30));

// 5. default parameters
// function interest(principal, rate = 3.5, years = 5) {
//   return ((principal * rate) / 100) * years;
// }

// console.log(interest(10000, undefined, 5));

// 6. getters and setters | get : akses properti , set : ubah2
//7. try and catch sama pake contoh no 6 blm berungsi full

// const person = {
//   firstName: "Rifqy",
//   lastName: "Yusuf",
//   set fullName(value) {
//     if (typeof value !== "string") throw new Error("value is not a string");

//     const parts = value.split("");
//     if (parts.length !== 2) throw new Error();
//     ("enter ad first and last name");

//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// try {
//   person.fullName = "";
// } catch (e) {
//   alert(e);
// }

// console.log(person);

//8. local vs global scope (paham cara kerja tapi gapaham arti)

// const color = "red";

// function start() {
//   const massage = "hi";
//   const color = "blue";
//   console.log(color);
// }

// function stop() {
//   const massage = "bye";
// }

// start();

//9. let vs var

//var untuk function scoop
//let untuk block scoop

// function start() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// start();

//10. the this keyword & 11. changing menggunakan this, cara nya bikin const self = this (terbaru)

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach((tag) => {
//       console.log(this.title, tag);
//     });
//   },
// };

// video.showTags();

// 12 . sum of arguments
// console.log(sum(1, 2, 3, 4));

// function sum(...items) {
//   if (items.leght === 1 && Array.isArray(items[0])) items = [...items[0]];

//   return items.reduce((a, b) => a + b);
// }

// 13. area circle  membuat circle menggunkan object syntax
//circle.radius = 2

// const circle = {
//   radius: 1,
//   get area() {
//     return Math.PI * this.radius * this.radius;
//   },
// };

// console.log(circle.area);

// 14. eror handling (bagaimana membaca eror) (uunspected token)

try (
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences (null, 1);
    console.log(count);
)

catch (e) {
    console.log(e.massage)
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(Array))
        throw new Error ('invalid array.')

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

