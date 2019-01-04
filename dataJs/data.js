//## FIRST PART ##//

/*const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1967 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, LudWig",
  "Begin, Wenachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Meter",
  "Ben-Curion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// 1st exercise
const fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);

console.table(fifteen);

// 2nd exercise
const fullNames = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);

console.table(fullNames);

// 3rd exercise
const birthday = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(birthday);

// 4rd exercise
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5th exercise
const oldest = inventors.sort(function(a, b) {
  const young = a.passed - a.year;
  const old = b.passed - b.year;
  return old > young ? 1 : -1;
});
console.table(oldest);

//6th exercise  -- WIKIPEDIA
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));
// const de = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes("de"));

//7th exercise
const alpha = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(", ");
  const [bLast, bFirst] = b.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);*/
//##################//
//## SECOND PART ##//
//##################//

// const people2 = [
//   { name: "Wes", year: 1988 },
//   { name: "Kait", year: 1986 },
//   { name: "Irv", year: 1970 },
//   { name: "Lux", year: 2015 }
// ];
// const comments = [
//   { text: "Love this!", id: 523423 },
//   { text: "Super good", id: 823423 },
//   { text: "You are the best", id: 2039842 },
//   { text: "Ramen is my fav food ever", id: 123523 },
//   { text: "Nice Nice Nice!", id: 542328 }
// ];
// // Some and Every Checks
// // Array.prototype.some() // is at least one person 19 or older?
// // const isAdult = people2.some(function(person) {
// //   const currentYear = new Date().getFullYear();
// //   return currentYear - person.year >= 19;
// // });

// const isAdult = people2.some(
//   person => new Date().getFullYear() - person.year >= 19
// );
// console.log({ isAdult });

// // Array.prototype.every() // is everyone 19 or older?
// const allAdult = people2.every(
//   person => new Date().getFullYear() - person.year >= 19
// );
// console.log({ allAdult });

// // Array.prototype.find()

// // Find is like filter, but instead returns just the one you are looking for
// // find the comment with the ID of 823423

// // const comment = comments.find(function(comment) {
// //   if (comment.id === 823423) {
// //     return true;
// //   }
// // });

// const comment = comments.find(comment => comment.id === 823423);

// console.log(comment);

// // Array.prototype.findIndex()
// // Find the comment with this ID
// // delete the comment with the ID of 823423
// const index = comments.findIndex(comment => comment.id === 823423);

// console.log(index);
// console.table(comments);

// //REDUX
// const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

// console.table(newComments);

// //SPLICE
// comments.splice(index, 1);

// console.table(comments);

// // 3 DEV TOOLS! //
// const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];
// function makeGreen() {
//   const p = document.querySelector("p");
//   p.style.color = "#BADA55";
//   p.style.fontSize = "50px";
// }
// // Regular
// // Interpolated
// // Styled
// // warning!
// console.warn("Oh Snap!");
// // Error :|
// console.error("You stepped on shit");
// // Info
// console.info("vegan shit");
// // Testing
// const h1 = document.querySelector("h1");
// console.assert(h1.classList.contains("ola"), "It doesn't contain ola");
// // clearing
// // Viewing DOM Elements
// console.log(h1);
// console.dir(h1);
// // Grouping together
// dogs.forEach(dog => {
//   console.group(`${dog.name}`);
//   console.log(`Name: ${dog.name}`);
//   console.log(`Age: ${dog.age}`);
//   console.log(`Human years: ${dog.age * 7}`);
//   console.groupEnd(`${dog.name}`);
// });
// // counting
// console.count("p");
// // timing
// console.time("fetching data");
// fetch("https://api.github.com/users/wesbos")
//   .then(data => data.json())
//   .then(data => {
//     console.timeEnd("fetching data");
//     console.log(data);
//   });

//#################//
//## THIRD PART ##//
//################//
//References VS Copies

let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

const players = ["Wes", "Sarah", "Ryan", "poppy"];

const team = players;

console.log(players, team);

team[3] = "Lux";

console.log(players, team);

//Copies of arrays

const team2 = players.slice();
team2[3] = "BRB";

console.log(players, team2);

const team3 = [].concat(players);
console.log(team3);

const team4 = [...players];
console.log(team4);

const team5 = Array.from(players);
console.log(team5);

//Copies of objects

const person = {
  name: "Anto",
  age: 27,
  other: {
    dog: "Yes",
    cat: "Yes"
  }
};

const me = person;
me.lastname = "Pisani";
console.log(person, me);

//Only 1 level deep :'(
const me2 = Object.assign({}, person, { color: "Green" });
console.log(person, me2);
me2.other.cat = "ofc";
console.log(person, me2);

const me3 = { ...person };
console.log("person, me3");
console.log(person, me3);

////////////////////
//Youtube Exercise//
////////////////////

//convert into nodelist into an array
const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
// [... ] == Array.from

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
