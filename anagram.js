/* Problem:
Write a function that checks if two words are anagrams.
    is_anagram('cellar', 'recall') # returns True
    is_anagram('arm', 'elbow') # returns False
*/

function is_anagram(str, anotherStr) {
    if(str.length !== anotherStr.length) {
        return false;
    }
    let object = {};
    for(let i = 0; i < str.length; i++) {
        object[str[i]] = (object[str[i]] || 0) + 1;
    }
    // console.log(object);
    for(let i = 0; i < anotherStr.length; i++) {
        // console.log(anotherStr[i]);
        if(!object[anotherStr[i]]) {
            return false;
        }
        object[anotherStr[i]]--;
    }
    return true;
}

const isAnagram = is_anagram("cellar", "recall");
// const isAnagram = is_anagram("arm" ,"elbow");
console.log(isAnagram);