//Palidrome là một chuỗi không thay đổi khi đảo chiều
const isPalindrome = (string) =>{

        if(string === string.split('').reverse().join('')){
            return string + " là một chuỗi Polidrome"
        }else{
            return string + " không phải là một chuỗi Polidrome"
        }
}

console.log(isPalindrome("Killua"));