/*
    Difficulty: Easy    

    Write an extension for array that returns the N smallest elements as an array, sorted smallest first, where N is an integer parameter.

    Samples:
    [1, 2, 3, 1002, 4].solution(3) == [1, 2, 3]
    ["q", "f", "k"].solution(10)   == ["f", "k", "q"]
    [250, 15].solution(3)          == [15, 250]
    [].solution(3)                 == []
*/


Array.prototype.solution1 = function(n) {
    if(n>this.length){
        n=this.length;
    }
    if(typeof this[0]=='number'){
        this.sort((a,b)=>a-b);
    }
    else{
        this.sort();
    }
    
    return this.slice(0,n);
}


Array.prototype.solution2 = function(n) {
    if(n>this.length){
        n=this.length;
    }
    let i=0;
    if(typeof this[0]=='number'){
         //this is a number array
         while(i<n){

         }
    }
    else{
         
    }
    
    return this.slice(0,n);
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test

// import big string for test


// test solution1()
console.log([1, 2, 3, 1002, 4].solution1(3));
console.log(["q", "f", "k"].solution1(10));


/*
************************* PERFORMANCE RESULTS *************************

*/