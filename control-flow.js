let userRole = 'admin';
let accessLevel;

if (userRole === 'admin') {
  accessLevel = 'full';
} else if (userRole === 'editor') {
    accessLevel = 'medium';
    } else {
        accessLevel = 'none';
}

console.log("Access Level:", accessLevel); // Output: full

//logged in as admin, so accessLevel is full
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
    case 'admin':
        userCategory = 'superuser';
        break;
    case 'editor':
        userCategory = 'poweruser';
        break;
    case 'subscriber':
        userCategory = 'regularuser';
        break;
    default:
        userCategory = 'trialuser';
    }

console.log("User Category:", userCategory); // Output: regularuser

//**** */
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? 'User is logged in' : 'User is not logged in';

console.log("Authentication Status:", authenticationStatus); // Output: User is logged in