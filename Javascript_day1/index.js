                                     //1.online librarymemberShip
// var library="PremiumMemeberShip";
// if(library=="basicMemberShip"){
//     console.log("Access to only free books");
    
// }
// else if(library=="StandardMemberShip"){
//     console.log("Access to free books and discounted paid books");
// }
// else if(library=="PremiumMemeberShip"){
//     console.log("Access to all books, including exclusive content")
// }
// else{
//     console.log("invalid memebership");
// }


                           //2. E-Commerce Discount Application


// var commerce="VIP";
// var purchaseAmount=500;
// var discount=0;
// if(purchaseAmount<0){
//     console.log("invalid amount");
    
// }
// else if(commerce=="Regular"){
//     if(purchaseAmount<100){
//         discount=0;
//     }
//     else if(purchaseAmount<=500){
//         discount=0.05;
//     }
//     else{
//         discount=0.10;
//     }
//     var finalAmount=purchaseAmount-(purchaseAmount*discount);
//     console.log("final amount:"+finalAmount);
// }
// else if(commerce=="VIP"){
//     if(purchaseAmount<100){
//        discount=0.10;
//     }
//     else if(purchaseAmount<=500){
//         discount=0.15;
//     }
//     else{
//         discount=0.20;
//     }
//     var finalAmount=purchaseAmount-(purchaseAmount*discount);
//     console.log("final amount:"+finalAmount);
// }
// else{
//     console.log("invlaid");
// }


                         //3.ScholarShip eligibility

// var gpa=3.0;
// var extracurricularActivities=2;
// var communityServiceHours=120;
// var eligibility=false;
// if(gpa>=3.5){
//     console.log("Eligible for Merit-Based Scholarship");
//     eligibility=true;
    
// }
// else if(gpa>=3.0 && extracurricularActivities>=2){
//     console.log("Eligible for LeaderShip Scholarship");
//     eligibility=true;

// }
// else if(gpa>=2.5 && communityServiceHours>=100){
//     console.log("Eligible for Community Service Scholarship");
//     eligibility=true;
// }
// else{
//     console.log("not eligibile for scholarship");
// }

                                         //4.Movie Ticket Pricing

// var days="Saturday";
// var age=70;
// var price;
// if(age<0){
//     console.log("invalid age");
    
// }
// else{
//     if(days=="Monday"|| days=="Tuesday" ||days=="WednesDay" ||days=="Thursday" ||days=="Friday"){
//         price=12;
//         if(age<12 && age>=65){
//         price=price*0.5;
//         }
//         console.log("ticket price:"+price);
//     }
//     else if(days=="Saturday" ||days=="Sunday"){
//         price=15;
//         if(age<12 && age>=65){
//             price=price*0.7;
//         }
//         console.log("ticket price:"+price);
//     }
//     else{
//         console.log("invalid");
//     }
// }

 
                                    //5.Event Registration Validation

var age=19;
var registeredCount=90;
var email="user@example.com";
if(age<18){
    console.log("Registration failed: User must be at least 18 years old.");

}
else if(registeredCount>=100){
     console.log("Registration failed: Event is full.");
}
else if(email==="" || !email.includes("@") || !email.includes(".")){
    console.log("Registration failed: Invalid email address.");
}
else{
    console.log("Registration successful!");
}

