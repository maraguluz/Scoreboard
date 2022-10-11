// @ts-nocheck
import './style.css'

function setupTeam(id: string){
  console.log(id)
  let score = 0;
const inputElement = document.querySelector(`.${id} input`) as HTMLInputElement

const headers = document.querySelector(`.${id} h2`) as HTMLHeadingElement

const addButton = document.querySelector(`.${id} .add`) as HTMLElement
//the I tag is used as an icon and then use CSS to add an image to it 
// is the same as const addButton = document.querySelector('.add) or (.team1 .add)

const minusButton = document.querySelector(`.${id} .subtract`) as HTMLElement

const scoreElement = document.querySelector(`.${id} .h3`) as HTMLHeadElement

const resetButton = document.querySelector('.reset') as HTMLButtonElement

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

// function displayWinner(){
//   alert('You win!');
// }
// //let score = 0;

// function resetScore(event: Event){
//   score = 0
//   scoreElement.innerText = score.toString()
// }
// resetButton?.addEventListener('click', resetScore)

// function incrementScore(event: Event){
//   if (score < 22){
//     score += 1
//     scoreElement.innerText = score.toString()
//   }  
//   if (score ===21){
//     displayWinner()
//   }
// }  
// // addButton.addEventListener('click', ()=>(console.log('add'))) this is how you sanity check in your console on the browser 
// addButton?.addEventListener('click', incrementScore)

// function decreaseScore(event: Event){
//   if (score > 0) {
//     score -= 1
//     scoreElement.innerText = score.toString()
//   }  
// }
// minusButton?.addEventListener('click', decreaseScore)  



// }




setupTeam('team1')
setupTeam('team2')
//if you put anything in updateTeam thats what would console.log in line 4
//but then on line 5 the queryselector wouldnt be able to find that class if it doesnt exist (it would be null)
// so a closure is a snapshot or an occurance of what variables are in scope 
//every time you use {} it makes a closure 
//closures are cool because it basically involves a function inside a function 

//want to use .querySelector as little as possible because that will take a while 
//thats why we cant put in const inputElement and const headers in the function below to make it one function

