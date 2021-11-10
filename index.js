//write your code here
function stripUpperCase(string){
  let stripped = ""
  for (let i = 0; i  < string.length; i++){
      if (string[i] === string[i].toLowerCase())
      stripped += string[i];
  }
  return stripped
}

console.log(stripUpperCase('Hello!'))