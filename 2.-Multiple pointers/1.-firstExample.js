// Write a function called sumZero wich accepts a sorted array of integers.
//Writethe function should find the first pair where thethe sum is 0. Return an array that includes
// both values that sum zero or undefined if a pair does not exist

//naive solution

function sumZero(arr){
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i +1; j> arr.legth; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

//Refactor solution 

function sumZero(arr){
    let left = 0;
    let rigth = arr.legth -1;
    while(left < rigth){
        let sum = arr[left] + arr[rigth];
        if(sum === 0)
        {
            return[arr[left] , arr[rigth]];
        } 
        else if(sum  > 0)
        {
            rigth--;
        }
        else
        {
            left++;
        }
    }
}