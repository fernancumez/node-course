import { Greeter } from "./ConstructorFunctions";

export const workingWithClasses = () => {
  const greeter: Greeter = new Greeter();
  console.log(greeter.greet());

  const greeterMaker: typeof Greeter = Greeter;
  greeterMaker.standardGreeting = "Hey There!";

  let greeter2: Greeter = new greeterMaker();
  console.log(greeter2.greet());
};
