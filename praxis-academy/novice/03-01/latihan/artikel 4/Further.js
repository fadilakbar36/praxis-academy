class ValidationError extends Error {
    constructor(message) {
        super(message); 
        this.name = "ValidationError"; //(2)
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}

// Usage
function readUser() {
let user = JSON.parse(json);

if (!user.age) {
    throw new PropertyRequiredError("age");
}
if (!user.name) {
    throw new PropertyRequiredError("name");
}

return user;
}

// Working example with try..catch

try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        alert("Invalid data: " + err.message);
        alert(err.name);
        alert(err.property);
    } else if (err instanceof SyntaxError) {
        alert("JSON Syntax Error: " + err.message);
    } else {
        throw err;
    }
}