//Question 3

let Science = 'Physics, Chemistry, Biology, Technical Drawing'
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


//Question 5


  function findNearestPowerOf2(num) {  
    let power = Math.ceil(Math.log2(num));  // Find the power of 2 that is greater than or equal to the input
    let lowerPower = Math.pow(2, power - 1);  //Find the power of 2 that is less than the input number
    let upperPower = Math.pow(2, power); //Find the power of 2 that is greater than the input number

    let pwr;
    if (Math.abs(num - lowerPower) <= Math.abs(num-upperPower)){
      pwr = lowerPower;
    } else {
     pwr = upperPower;
    }

    console.log(`The number ${pwr} is the power of 2 nearest to ${num}`);
  }
  
//Example usage
findNearestPowerOf2(12);
findNearestPowerOf2(3);

//The number 8 is the power of 2 nearest to 12
//The number 2 is the power of 2 nearest to 3