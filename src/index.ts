import { is, type Assert } from "ts-runtime-checks";

type IUser = {
  name: string;
  age: number;
  address: {
    city: string;
    state: string;
  };
};

function getName(user: Pick<IUser, "name">) {
  const isValid = is<IUser>(user);
  if (!isValid) {
    throw new Error("Invalid user");
  }
  return user.name;
}

function getState(user: Assert<Pick<IUser, "address">>) {
  return user.address.state;
}

function getUser(): any {
  return {
    name: "Vamshi",
    age: 25,
    address: {
      address_city: "Hyderabad",
      address_state: "Telangana",
    },
  };
}

const vamshiName = getName(getUser());

const vamdhiState = getState(getUser());

console.log("name ", vamshiName);
console.log("state ", vamdhiState);
