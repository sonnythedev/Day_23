/*
    Difficulty: Easy    

    Extend arrays with a function that returns an array of strings sorted by their lengths, longest first.

    Samples:
    ["a", "abc", "ab"].solution()                      == ["abc", "ab", "a"]
    ["Saki", "Q", "Joe" ,"Chris", "Jordan"].solution() == ["Jordan", "Chris", "Saki", "Joe", "Q"]
    [].solution() == []
*/


// solution1

Array.prototype.solution1=function(){
    //let outputArr=[];
    return this.sort((a,b)=>b.length>a.length);
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import big string for test


// test solution1()
console.log(["a", "abc", "ab"].solution1());

console.log(["Saki", "Q", "Joe" ,"Chris", "Jordan"].solution1());

/*
************************* PERFORMANCE RESULTS *************************

*/