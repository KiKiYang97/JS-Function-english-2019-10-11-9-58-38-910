function alphabetSort(message){
    // wirte your code here
    var arr = [];
    var s =new String(message);
    arr =s.split("");
    return arr.sort().join(""); 
  }
  console.log(alphabetSort('hello')); // should return 'ehllo'