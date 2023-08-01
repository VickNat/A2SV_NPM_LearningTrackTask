const lodash_ = require('lodash');

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

function debouncedLog(){
  console.log("Function called");
}

const updatedUsers = lodash_.map(users, user => ({...user, age: 21}))
const filteredUsers = lodash_.filter(users, user => (user.name === 'John'))
const chunkedUsers = lodash_.chunk(users, 2)
const debounced = lodash_.debounce(debouncedLog, 1000)

console.log(updatedUsers);
console.log(filteredUsers);
console.log(chunkedUsers);
debounced()