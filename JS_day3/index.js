//1.two parameters

// function sum(a,b){
//     console.log(a+b);

// }
// sum(10,20);

 //  or
//  var sum=(a,b) => a+b;
//  console.log(sum(5,8));

//                     2.Greeting

// var greet=(name)=> "Hello, {name}!";
// console.log(greet("pooji"));


//          3.even number
// var iseven=(num)=>{
//     if(num%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// iseven(7);

//    4.greater number

// var greater=(num)=>{
//     if(num>10){
//         return true;

//     }
//     else{
//         return false;
//     }
// }
// console.log(greater(18))

//    5.comparing String

var number=(str1,str2)=>{
    if(str1.length>str2.length){
        return str1

    }
    else if(str1.length<str2.length){
        return str2
    }
    else{
        return "equal length"
    }

}
console.log(number("pujitha","poojitha"))