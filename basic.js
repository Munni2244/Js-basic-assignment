// concat
const groups1=[2,67,44,33,8,23,45,12,14,7];
const groups2=[1,67,84,33,8,23];
const concatResult= groups1.concat(groups2);
console.log("concat", concatResult);

// every
const numbers=[61,67,84,33,88,23];
const everyResult= numbers.every(data=> data<50 && data);
console.log("every", everyResult);

// fill
const fillArry=[61,67,84,33,88,23,8,9,99,6];
const fillResult= fillArry.fill(100, 1,7);
console.log("fill", fillResult);

// filter 
const filterArray=[2,67,44,33,8,23,45,12,14];
const filterResult= filterArray.filter(data=> data>15);
console.log("filter", filterResult);

// map 
const mapArray=[11,67,44,343,86,23,45,12,14];
mapArray.map(data=> console.log("map", data));

// find 
const findArray=[11,67,44,343,86,23,45,12,14];
const findResult=findArray.find(data=> data==23 && data );
console.log("find",findResult);

// findIndex 
const indexArray=[11,67,44,343,86,23,45,12,14];
const findIndexResult=indexArray.findIndex(data=> data>86 && data );
console.log("findIndex",findIndexResult);

// foreach 
const arryNumbers=[11,67,44,343,86,23,45,12,14];
// 
arryNumbers.forEach((data ,index) => {
    console.log(index ,":", data);

});

// common array
const arrayNumbers=[11,67,44,343,86,23,45,12,14];

// from
let myName= "MARIA MUNNI"
const fromResult= Array.from(myName);
console.log(fromResult);

// indexOf
const indexOf=arrayNumbers.indexOf(86);
console.log("indexOf",indexOf);

// isArray
const isArray=Array.isArray(arrayNumbers);
console.log("isArray",isArray);

// join
const names=["maria",  "munni"]
const join=names.join(" ");
console.log("join:",join);

// pop
const pop=arrayNumbers.pop();
console.log("pop:",arrayNumbers);

// push
const push=arrayNumbers.push(66);
console.log("push:",arrayNumbers);

// revers
const reverse=arrayNumbers.reverse();
console.log("revers:",reverse);

// shift
const shift=arrayNumbers.shift();
console.log("shift:",shift ,arrayNumbers);

// slice
const sliceString= "European It Institute"
const slice=sliceString.slice(0,11);
console.log("slice:",slice );

// some
const some=arrayNumbers.some(data=> data==23 && data );
console.log("some",some);

// sort
const friends=["Nila", "mim", "humayra", "Munni"]
const sort=friends.sort();
console.log("sort",sort);

// splice
const friendslist=["Nila", "mim", "humayra", "Munni"]
const splice=friendslist.splice(1);
console.log("splice",splice);

// unshift
const friends2=["Nila", "mim", "humayra", "Munni"]
const unshift=friends2.unshift("Rupa");
console.log("unshift",unshift,friends2);

//use spread operator
const count1=[2,67,44,33,8,23,45,12,14,7];
const count2=[1,67,84,33,8,23];
const result=[...count1,...count2];
console.log("use spread operator",result);

//use entries
const friendslist2=["Nila", "mim", "humayra", "Munni"]
const entries=friendslist2.entries();
for (const [index,value] of entries) {
    console.log( index,value);
}
// console.log("entries",entries.next().value);

//use hasOwnProp
const hasOwnPropertyList=["Nila", "mim", "humayra", "Munni"]
console.log("hasOwnProperty1",hasOwnPropertyList.hasOwnProperty(4));
console.log("hasOwnProperty2",hasOwnPropertyList.hasOwnProperty(2));

//use keys
const friendslist4=["Nila", "mim", "humayra", "Munni"]
const keys=friendslist4.keys();
for (const count of keys) {
    console.log(count);
}
//use value
const values=friendslist4.values();
for (const data of values) {
    console.log(data);
}

// merging two object
const obj1={name:"maria", roll:12}
const obj2={class:12, country:"bangladesh"}
const mergingResult={...obj1,...obj2}
console.log("merging two obj", mergingResult);

// for loop
for (let i = 0; i<=20; i++) {
    console.log("arrr",i);

}
// for of loop
const forArray=["maria", 12,"moon",45,645]
for (const value of forArray) {
    console.log("use for of", value);
}
// for of loop
const obj3={name:"maria", roll:12}
for (const key in obj3) {
  console.log("using for in", key);
}
