const prompt = require('prompt-sync')({sigint: true});

// let arr = ["apple", "banana", "orange", "grape", "watermelon"];

function userPrompt (arrayTheme){
    let counter = 5
    let userArray =[]
    while (counter != 0) {
    let newThing = prompt(`please add ${counter} items to the array involving ${arrayTheme}`)
    userArray.push(newThing)
    counter --;
        if(counter == 0){
            return userArray
        }
        
    }
}
function getAnotherArray(){
    let counter = 1
    let userArray = []
    while(counter != 0){
    let newThing =prompt('please add something to the array. To stop enter n')
    userArray.push(newThing)
    if(newThing == 'n'){
        counter == 0
        return userArray 
    }
        }
}
function getLongList (arrayTheme){
    let counter = 10
    let userArray =[]
    while (counter != 0) {
    let newThing = prompt(`please add ${counter} items to the array involving ${arrayTheme}`)
    userArray.push(newThing)
    counter --;
    console.log('there is not 10 items in the array')
        if(counter == 0){
            return userArray
        }
        
    }
}

function getArray (arrayTheme){
    let counter = 5
    let userArray =[]
    while (counter != 0) {
    let newThing = prompt(`please add ${counter} items to the array involving ${arrayTheme} enter n to exit if you dont want to add anymore items`)
    if(newThing != 'n'){
    userArray.push(newThing)
    counter --;
    }else{
        if(counter == 0){
            return userArray
            }
        if (newThing == 'n'){
            return userArray
            }
        }
    } 
}


function getLast(arr) {
    let accLast = arr.length - 1;
    console.log(`the last item in the array is ${arr[accLast]}`)
}

function getFirst(arr) {
    let accFirst = arr[0];
    console.log(`the first item in the array is ${accFirst}`)
}

function countEm(arr){
    console.log(`the length of the arr is ${arr.length}`)
}
//I messed this up... I looked it up, possibly something to do with my literals, probbly not gonna finish this...it kinda works.
function getThird(userArray) {
    let last = userArray[userArray.length]
    console.log(last)
    if (userArray.length >= 4){
    console.log(`the 4th item in the array is ${userArray[3]}`)
    }
    else{
        console.log(`the last item in the array is ${last}`)
    } 
}

//Only check for positive integers in it's current state.
function isItANumber(arr){
    if (arr[0] > 0) {
        console.log('the first item is a number')
    } else {
        console.log('the first item is not a number')
    }
}

// getFirst(userPrompt("fruits"))
// getLast(userPrompt("fruits"))
//getThird(getArray("fruits"))
//countEm(getLongList("fruits"))
//isItANumber(getAnotherArray())