import { is } from "ts-runtime-checks";
function getName(user) {
    var isValid = typeof user === "object" && user !== null && typeof user.name === "string" && typeof user.age === "number" && (typeof user.address === "object" && user.address !== null && typeof user.address.city === "string" && typeof user.address.state === "string");
    if (!isValid) {
        throw new Error("Invalid user");
    }
    return user.name;
}
function getState(user) {
    if (typeof user !== "object" || user === null)
        throw new Error("Expected user to be an object");
    if (typeof user.address !== "object" || user.address === null)
        throw new Error("Expected user.address to be an object");
    if (typeof user.address.city !== "string")
        throw new Error("Expected user.address.city to be a string");
    if (typeof user.address.state !== "string")
        throw new Error("Expected user.address.state to be a string");
    return user.address.state;
}
function getUser() {
    return {
        name: "Vamshi",
        age: 25,
        address: {
            address_city: "Hyderabad",
            address_state: "Telangana",
        },
    };
}
var vamshiName = getName(getUser());
var vamdhiState = getState(getUser());
console.log("name ", vamshiName);
console.log("state ", vamdhiState);
