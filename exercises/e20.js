
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let retArr1 = [];
  let retArr2 = [];
  let retArr = [];
  for (let elem of array) {
    for (let letter of elem) {
      if (letter == 'a') {
        retArr1.push(elem);
      } 
    }
    let boo = true;
    for (let name of retArr1) {
      if (name == elem) {
        boo = false;
      }
    }
    if (boo == true) {
      retArr2.push(elem);
    }
  }
  retArr[0] = retArr1;
  retArr[1] = retArr2;
  return retArr;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
