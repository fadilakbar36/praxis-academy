class ValidationError extends Error {
    constructor(message) {
        super(message); 
        this.name = "ValidationError"; //(2)
    }
}

// Usage
function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("No field: age");
    }

    return user;
}

//Working example with try..catch

try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message);
} 
else if (err instanceof SyntaxError) {
    alert("JSON Syntax Error: " + err.message);
} 
else {
    throw err;
}
}
