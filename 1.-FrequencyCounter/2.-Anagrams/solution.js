function validAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};
0
    for(let i =0 ; i< first.length; i++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i< second.length ; i++){
        let letter = second[i];
        //can´t find letter or letter is zero then it´s not an anagram
        if(!lookup[letter]){
            return false;
        }
        else{
            lookup[letter] -= 1;
        }
    }
    return true; 
}