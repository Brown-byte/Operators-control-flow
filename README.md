# Operators-control-flow

1, Arithmetic Operators : + , * , / , % , - , ** , ++ , --
2, Assignment Operators : = , * , *= , += , ++ , --
3, Comparison Operators : > , < , >= , <= , === , !==
4, Logical Operators: && , || , !
5, Bitwise Operators : & , ! , ^ , - , << , >> , >>>


2, Arithmetic Operators
- let x = 5;
let y = 6;
console.log (x + y); // 11

- let x = 10;
let y = 5;
console.log (x - y); // 5


Assignment Operators
- let y = 20;
console.log (y); //20

- let x = 15;
  x++;
  console.log (x++); //16


Comparison Operators
- let x = 2;
 console.log (x < 0); //false

- let x = 5;
console.log (x <= 3); // false


Logical Operators
- let x = true;
let y = false;
let z = 3;

console.log (x && y); // false
console.log (y && y); // true
console.log ((z > 2) && (z < 5)) // true

- let x = true;
let y = false;
console.log (!x); //false
console.log (!y); //true


Bitwise Operators
- let x = 12;
let y = 25;

result = a & b;
console.log(result); //8

- let x = 12;
let y = 25;

result = a | b; 
console.log(result); //29

3,  let Science = 'Physics, Chemistry, Biology, Technical Drawing'
   let SocialScience = 'Accounting, Commerce, Marketing, Geography'
   let GeneralSubs = 'English, Mathematics'
   let Arts = 'Government, Economics, Literature, History'

   let Dept = "Arts"


if (Dept === "Science"){
   console.log(" The subjects for Science are: " + Science + " " + GeneralSubs)
}
else if (Dept === "SocialScience"){
    console.log("The subjects for Social Science are: " + SocialScience + " " + GeneralSubs)
}

else if (Dept === "Arts"){
    console.log("The subjects for Arts are: " + Arts + " " + GeneralSubs)
}
else{
    console.log(GeneralSubs)
}
//The subjects for Arts are: Government, Economics, Literature, History English, Mathematics

4, Output is 1 , 8 , 15
