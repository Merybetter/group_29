let item_1 = 5
console.log(item_1);
let item_2 = 3
console.log(item_2);

let item_3 = (item_1 + item_2);
console.log(item_3);
let item_4 = "yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
let item_5 = item_3;
console.log(item_5);
let item_6 = 15
console.log(item_6);
let item_6_type = typeof item_6;
console.log(item_6_type);
console.log("item_6 ==", item_6, "item_6_type ==", item_6_type);
let item_7 = String(item_6);
let item_7_type = typeof item_7;
console.log("item_7 ==", item_7, "item_7_type ==", item_7_type);
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
//     console.log("you don’t have access cause your age is" + age_1 + "It’s less then");
// } else if (age_1 >= age_2 & age_1 < age_3) {
//     console.log("Welcome!");
// } else if (age_1 > age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work")}

// const checkAge = function(age) {
//     if (age < age_2) {
//         console.log("you don’t have access cause your age is" + age + "It’s less then");
//     } else if (age >= age_2 & age < age_3) {
//         console.log("Welcome!");
//     } else if (age > age_3) {
//         console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work")}
// }
// checkAge(18)

// const checkAge = function(age) {
//     if(typeof age == "number") {

//     if (age < age_2) {
//         console.log("you don’t have access cause your age is" + age + "It’s less then" + age_2)
//     } else if (age >= age_2 && age < age_3) {
//         console.log("Welcome!")
//     } else if(age > age_3) {
//         console.log("Keep calm and look Culture channel")
//     } else {
//         console.log("Technical work")
//     }
// } else { console.log("go to home")}
// }
// checkAge("fug66")
const checkAge = function(age) {
    age = Number(age)
    if(!isNaN(age)) {

    if (age < age_2) {
        console.log("you don’t have access cause your age is" + age + "It’s less then" + age_2)
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!")
    } else if(age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
} else { console.log("go to home")}
}
checkAge("fug66")
checkAge("22")
checkAge(-30)

let agePrompt = prompt("enter age")
checkAge(agePrompt)