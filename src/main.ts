import './style.css'

function updateTeam(id: string){
  console.log(id)
const inputElement = document.querySelector(`.${id} input`) as HTMLInputElement

const headers = document.querySelector(`.${id} h2`) as HTMLHeadingElement

//when the input happens i want you to set the header as that value 
//which paragraph team1 or team2? 
//IN JS when this function got created 
console.log({inputElement, headers})
function updateName(event: Event){
  
  const elementChanged = event.target
console.log('Update',headers)
  if(elementChanged instanceof HTMLInputElement){
    const currentInputValue = elementChanged.value
    headers.innerText = currentInputValue
  }
  }
inputElement?.addEventListener('input', updateName)
// opporator that says if this is null dont do the thing on the right 
}
updateTeam('team1')
updateTeam('team2')
//if you put anything in updateTeam thats what would console.log in line 4
//but then on line 5 the queryselector wouldnt be able to find that class if it doesnt exist (it would be null)
// so a closure is a snapshot or an occurance of what variables are in scope 
//every time you use {} it makes a closure 
//closures are cool because it basically involves a function inside a function 

//want to use .querySelector as little as possible because that will take a while 
//thats why we cant put in const inputElement and const headers in the function below to make it one function

