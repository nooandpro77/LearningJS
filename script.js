document.getElementById("testbtn").onclick = function(){
    document.getElementById("testh1").innerHTML ="hi";
}



// this is called IIFE (Immediately Invoked Function Expression)
// it is commonly used for declaring var so that those variables 
// dont mixup with keywords i guess
(function(){


    var hooman = 15; // this dont mix things with (window ~write it chrome console and see) object

    

})();

//***************************************************************//

/*          Acess Mofifiers                */
/*        Variable    Scoping               */

// now aside from "iife" we can use blocks too
// Blocks are represented by "{}"
// any variable inside this block will be only accessible
// to this block only

// EXAMPLE //

{
    let y = 10;     // this y is not accessible to window object anymore
    const x = 15;   // same as above

    // if we use var inside this or iife the purpose will be mehs
}