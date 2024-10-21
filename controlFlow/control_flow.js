//let userRole = "admin";
//let accessLevel;
//let isLoggedIn = true;
//let userMessage;
let userType = "subscriber";
let userCategory
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

switch (userType) {
    case "admin": 
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Authentication Status: ", authenticationStatus);