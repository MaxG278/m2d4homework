const names = document.getElementById("names")
const numbers = document.getElementById("numberTeam")
const result = document.getElementById("result")
const button = document.getElementById("button")

function function1() {
    result.innerHTML = ""
    const nameNode = names.value
    const totalTeam = numbers.value
    let person = nameNode.split(" ")


    let random = person.sort(() => Math.random() - 0.5)
    console.log(random)
    
    function chunk(array, size) {
        if (array.length <= size) {
          return [array] }
        else {
          return [array.slice(0, size), ...chunk(array.slice(size), size)];  
        }
  }  
  let team = chunk(random, totalTeam);
  for (let i = 0; i < team.length; i++) {
    result.innerHTML += `<p> Team-${i + 1}: ${team[i]} </p>`;  }                        
}

