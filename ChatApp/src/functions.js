export function resolveAuthError(code){
    switch(code){
        case "auth/wrong:password" :
            return "Invalid Password";

        case "auth/user-not-found":
            return "User not found";
        
        case "auth/null-value":
            return "Email address or password cannot be empty !"

        default: 
            break;
    }
}