// var a=["abc", "kjl", "yut", "omn", "abc","mno","xyz"];
// var b=[1,2,3,4,5];

// if we want to find the "qwe" value in our array, this approach will work.

// var i =a.indexOf("qwe");
// console.log (i);

// the value of -1 shows that this value is not here in the array.

// now if i want to find any string value in the array then we can go for this approach.

// // lets take example of qwe again

// var i = a.indexOf("qwe");
// if (i != -1){
//     console.log("Word found");

// }
// else {
//     console.log("Not found")
// }

// // If i want to know about the number of strings in the Array, than i have to use the lenght method

// var count = a.length;
// console.log(count);

// NOw if i want to find the last string valuie than i can go for a.slice

// var lastElement = a.slice(-1);
// console.log(lastElement);

// now if i want to reverse the Array, i will uise the array method of .reverse, in reverse ()we will not add any number in the bracket

// var rev = a.reverse();
// console.log(rev);


// Now if i wish to combine two arrays together than i will use array method of join

// let take exapmle arrays

// var combineLetters = a.join();
// console.log(combineLetters);

// when we see this console log we see abc and other are seperated by comma and we dont need that so what we will do id that we add ()in the join bracket like this

// var combineLetters = a.join("");
// console.log(combineLetters);


// now if i want to concatentate two arrays together
// var combineArray = a.concat(b);
// console.log(combineArray);
// console.log(a);
// console.log(b);


// check class register for notes

// var existing = a.includes("xyz")
// console.log(existing);


// var i = a.lastIndexOf("abc");
// console.log(i);



// NOw for Loop starts

// syntax for loop is like this,

// for( var i = 0; i<10; i++){
//     console.log(i);
// }

// now i want to replace this var i numbers with the var a, so this is what i will do

// for ( var i =0; i<10; i++){

//     console.log(a[i]);
// }

// Now i want to stop this loop till the var a array value, what i will do in this is that, i will give the limitation of for loop based on the lenght of var a, acha var a boht upar hy tou wahan ja kar dakh lana

// for ( var i =0; i<a.length; i++){

//     console.log(a[i]);
// }

// var a=["abc", "kjl", "yut", "omn", "abc","mno","xyz"];

// var b = "mno"

// for (var i =0; i<a.length; i++){
//     if(b==a[i]){
//         console.log("Yes we found it")
//     }
// }


// for (var i=0; i<10;i++){
//     for(var j = 0; j<5;j++){
//         console.log(i,j)
//     }
// }

// var a = ["A", "B","C", "D","E"];
// var b = [1,2,3,4,5,6,7,8,9];

// for(i=1; i<10;i++)
// {
//    for( j=0;j<5;j++){
//     console.log(i+a[j])
//    }
// }
var a = ["A", "B","C", "D","E", "f"];
var b = [1,2,3,4,5,6,7,8,9];

for(i=0; i<b.length;i++)
{
   for( j=0;j<a.length;j++){
    console.log(b[i]+a[i])
   }
}

