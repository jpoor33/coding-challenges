/**
 * @param {number} n
 * @return {string[]}
 */


var fizzBuzz = function(n) {
    
    let answer = [];

    for (let i = 0; i <= n; i++) {
        let out = ""; 

        if (i % 3 === 0 && i % 5 === 0) {
            out = out + "FizzBuzz";
        }else if(i % 3 === 0){
            out = out + "Fizz";
        }else if (i % 5 === 0){
            out = out + "Buzz";
        }else{
            out = out + i;
        } 
        answer[i] = out;
    };
        answer.splice(0,1);
        return answer;
    };