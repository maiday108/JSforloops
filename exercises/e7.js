// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  
  let returnArray = [];
  let client = array[0];
  for (let i = 1; i < array.length; i++) {
   let clientCheck = array[i];
    if (clientCheck.balance < client.balance && clientCheck.balance > 0 ) {
      client = clientCheck;
    }
  }
  if (client.balance > 0 ) returnArray.push(client);
  return returnArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function