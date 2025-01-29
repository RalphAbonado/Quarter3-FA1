// Define variables
let nickname = "Ralph";
let heightInInches = 70;
let weightInKg = 70;

// Convert height to feet and inches
let feet = Math.floor(heightInInches / 12);
let inches = heightInInches % 12;
let height = `${feet}’${inches}”`;

// Convert weight to pounds
let weightInLbs = (weightInKg * 2.20462).toFixed(3);

// Display information
alert(`Name: ${nickname}\nHeight: ${height}\nWeight: ${weightInLbs} lbs`);
