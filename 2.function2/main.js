function palindrome(message){
    var flag = true;
    for(let i=0,j=message.length-1; i<message.length/2;i++,j--){
        if(message[i]!=message[j]){
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true