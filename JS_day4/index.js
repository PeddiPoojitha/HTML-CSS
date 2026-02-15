//       1.Basic Callback Execution

// function  processNumber(number,callback){
//     var result=number*2
//     callback(result);
    
// }
// function displayresult(value){
//     console.log("result:",value);
    
// }
// processNumber(5,displayresult)

//    2. Callback with Array Iteration

// function forEachElements(arr,callback){
//     for(i=0;i<arr.length;i++) {
//         callback(arr[i])

//     }

// }
// function printElements(elements){
//     console.log("elements");
    
// }
// forEachElements([10,20,50,60],printElements)

//                   3.    Simple Delayed Callback

// function  sayHello(name,callback){
//     setTimeout(function(){
//         var message="Hello,"+name+"!"
//         callback(message)
//     },1000)


// }
// function displaymessage(message){
//     console.log(message);
    

// }
// sayHello("poojitha",displaymessage)

//           4.  Callback on Condition


// function checkEven(number,evencallback,oddcallback){
//     if(number%2==0){
//         evencallback(number)

//     }
//     else{
//         oddcallback(number)
//     }

// }
// function even(num){
//     console.log(num+"is even");
    
// }
// function odd(num){
//     console.log(num+"is odd")
// }
// checkEven(11,even,odd)

//       5. Sequential Callbacks

function performTask(number,callback1,callback2){
   var add=callback1(number);
   var final=callback2(add);
   console.log("final result:"+final);
}
function add(num){
   return num+5;

}
function multiply(num){
    return num*2;

}
performTask(6,add,multiply)