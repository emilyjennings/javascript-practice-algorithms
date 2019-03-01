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

//return length of shortest word in string

function findShort(string){
  let array = string.split(" ")
  let sortedArray = array.sort(function(a, b){return a.length - b.length})
  let shortest = sortedArray[0].length

  return shortest
}

//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
 //take apart the string and make sure each first character in each word is capitalize


 //take an array and return a new array with only the elements that are numbers

 function filter_list(l) {

  let array = []
  for (let i=0; i < l.length; i++) {

    if (typeof(l[i]) != "string") {
      array.push(l[i])
    }
  }
  return array


}
