function same(arr1, arr2){
    //if legth are menas it doesnt meets the condition, diferent return false
    if(arr1.legth !== arr2.legth){
        return false;
    }
    for(let i = 0; i < arr1.legth;i++){
        // search for a element in arr2 that is the square(**2) of the current element in the arr1
        let correctIndex = arr2.indexOf(arr1[i] ** 2)//this is a loop
        //if the method indexOf return -1 means it doesn´t have the element searched so return false
        if(correctIndex === -1)
        {
            return false;
        }
        //if the element was founded splice remove one element from the correct index
        arr2.splice(correctIndex,1);
    }
    return res;
}