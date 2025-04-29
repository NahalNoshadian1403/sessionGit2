function removeNullUndefined(obj) {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}

// مثال:
let sample = {
    name: "Ali",
    age: null,
    city: undefined,
    job: "Developer"
};

console.log(removeNullUndefined(sample));
