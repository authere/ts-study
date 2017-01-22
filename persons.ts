interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user: Person = { firstName: "Janes", lastName: "User" };

document.body.innerHTML = greeter(user);
