// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let clientName = [];
  let nameArr = [];
  for (let i of array) {
    nameArr.push(i.name);
  }

  for (let j of nameArr) {
    for (const k of j) {
      let result = letter.toLowerCase();
      let k2 = k.toLowerCase();
      if (k2 == result) clientName.push(j);
    }
  }
  return clientName;
}
 



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
