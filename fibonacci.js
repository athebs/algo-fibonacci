function fibonacci(num) {

  /** f(n) =  F(n-1) + f(n-2)
   * f= num and n is the index of num 
   * intial values are 0 1 
   * 
   * set arr [0,1]
   * sum values of arr 
   * append value to arr 
   * for loop in range of num 
   */
    if (num === 0 || num === 1 ){
      return num
    } else {
      return sequenceFinder(num)
    }
  }
  
  function sequenceFinder(num){
    let numOne = 0;
    let numTwo = 1;
    let numThree;
    
    for ( let i = 2; i<= num; i++){
    
      numThree = numOne + numTwo
      
      numOne = numTwo;
      numTwo = numThree;
    
    }
    return numThree;
  }
    
  }

console.log(fibonacci(0))
console.log(fibonacci(1))
fibonacci(5)

module.exports = fibonacci;
