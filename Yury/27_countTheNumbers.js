/*
    Difficulty: Easy    

    Write an extension for array of integers that returns the number of times a specific digit appears in any of its numbers.

    Samples:
    [5, 15, 55, 515].solution("5") == 6
    [5, 15, 55, 515].solution("1") == 2
    [55555].solution("5")          == 5
    [55555].solution("1")          == 0
*/


// solution1()

Array.prototype.solution1=function(num){
    let count=0;
    
    //'abc'.split('');
    
    this.forEach(
       function(item){
           //console.log(item,num);
           item=item.toString();
           num=num.toString();
           let firstIndex=0;
           while(item.indexOf(num,firstIndex)!='-1'){
            count++;
            firstIndex=item.indexOf(num,firstIndex);
           }
       }
    );
    
    return count;

}


// solution2()

Array.prototype.solution2=function(num){
    let num=num.toString();
    let count=0;
    for(let i=0; i<this.length; i++){
        let item=this[i].toString();
        for(let j=0; j<item.length; j++){
            if(item[j]==num){
                count++;
            }
        }
    }
    return count;
}


// solution3()


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test

// test solution1()

console.log([5, 15, 55, 515].solution2(15));
// test solution2()


// test solution3()


/*
************************* PERFORMANCE RESULTS *************************


*/