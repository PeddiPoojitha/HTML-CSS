// 1. Greeting Function

// function greet(name){
//     return "Hello,"+name+"!"

// }
// console.log(greet("poojitha"));

//              2. Sum Function
// function sum(a,b){
//     return a+b

// }
// console.log(sum(10,5));


//       3. Square Function   

// function square(num){
//     return num*num
// }
// console.log(square(6));

// var square=(num)=>num*num
// console.log(square(6));


//           4.Average Function

// function Average(arr){
//     var sum=0;
//     for(var i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum/arr.length

// }
// console.log(Average([6,7,2]));


//              5.Vowels Function

// function ovewels(str){
//     for(i=0;i<str.length;i++){
//         let ch=str[i].toLowerCase()
//         if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"){
//             return "vowel"

//         }
        
//     }
//     return "not vowels"

// }
// console.log(ovewels("hi"));



//               6.Temperature Converter

function convertTemperature(temp,scale){
    if(scale==="C"){
        return (temp-32)*5/9
    }
    else if(scale==="F"){
        return (temp*9/5)+32
    }
    else{
        return  "invalid scale"
    }


}
console.log(convertTemperature(100,"F"));






