//find the integer that appears an odd number of times

function findOdd(a) {
   var list = {} // create a hash with a list of the elements iteratewd through
   a.forEach(function(e) {
     if(list[e]) list[e]++; //go through each element in the list and move to the next one by incrementing
     else list[e] = 1; //if it's already one that been looked at, move on, otherwise reset the countr to 1
   });

   for(var e in list) {
     if(list[e] % 2) // if the number in the list of elements is divided by two
     return +e;       //return it and stop looking
    }
}
