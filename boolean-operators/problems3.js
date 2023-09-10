//  Q1 logical AND assignment

let username = "";
username &&= "tiger"; // username = username && "tiger"

// username = "" && "tiger"
console.log(username); // eval empty string, since empty string is falsy => dont look at "tiger"

//  Q2 logical OR assignment

let vip = 0;
vip ||= 3; // vip = vip || 3

// vip = 0 || 3
console.log(vip); // eval 3, since 0 is falsy => look at 3

//  Q3 nullish coalescing

let loggedIn = null;
loggedIn ??= 0; // loggedIn = loggedIn ?? 0

// logggedIn = null ?? 0
console.log(loggedIn); // eval 0, since left operand is nullish (null / undefined)
