
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

