let userRole = 'guest';
let accessLevel;

if (userRole === 'employee') {
  accessLevel = 'full';
} else if (userRole === 'editor') {
    accessLevel = 'medium';
    } else {
        accessLevel = 'none';
}

console.log("Access Level:", accessLevel); // Output: none

//logged in as employee, so accessLevel is full

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
  userMessage = 'Welcome back!';
} else {
  userMessage = 'Please log in';
}

console.log("User Message:", userMessage); // Output: Welcome back!
//**** */

let usertype = 'subscriber';
let userCategory;

switch (usertype) {
    case 'employee':
        userCategory = 'Dietery Staff';
        break;
    case 'enrolled member':
        userCategory = 'Dietician and Dietery Staff';
        break;
    case 'subscriber':
        userCategory = 'Dietery Staff';
        break;

    default:
        userCategory = 'Need to Subscribe';
    }

console.log("User Category:", userCategory); // Output: Dietery Staff

//**** */
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? 'User is logged in' : 'User is not logged in';

console.log("Authentication Status:", authenticationStatus); // Output: User is logged in

