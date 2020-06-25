function countWords(message){
    // wirte your code here
    var arr = [];
    var s = new String(message);
    arr = s.split(/[\\b \\.]/g);
    arr = arr.filter(s=>s.length!==0);
    return arr.length;
  }
  
  console.log(countWords('Good morning, I love JavaScript.')); // should return 5