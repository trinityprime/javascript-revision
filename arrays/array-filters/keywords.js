// array filters => result array = set of elements from the input array filtered based on what the filter function is made to return (true or false)

//  ex1

const things = ["box", "car", "badger"];

const thingFilter = things.filter((thing) => {
  return thing.startsWith("b");
});

console.log(thingFilter); // returns box and badger only.

// ex2

const nums = [5, 6, 7, 8, 9, 10];

const evenNumbers = nums.filter((num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(nums);
console.log(evenNumbers);
