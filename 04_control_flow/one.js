//If
const isUserLoggedIn = true

if(2 == "2"){
  console.log("Executed");
}
if(2 === "2"){
  console.log("Executed");
}else if(2 !== "2"){
  console.log("Not Executed");
} 

const score = 200;

if(score > 100){
  const power = "fly"
  console.log(`User power: ${power}`);
}

// short hand notation
const balance = 1000

// if(balance > 500)console.log("test"),
// console.log("Second Line");

/*
if (balance < 500){
  console.log("less than 500");
} else if (balance < 750){
  console.log("less than 500");
} else if (balance < 900){
  console.log("less than 900");
}else {
  console.log("less than 1200");
}
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
  console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle){
  console.log("User logged IN")
}



