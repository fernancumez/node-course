import { Animal, Horse, Snake } from "./Animals";
import { Greeter } from "./Greeter";

const workingWithClasses = () => {
  const greeter: Greeter = new Greeter("fernando");
  const sam: Snake = new Snake("Sammy the python");
  const tom: Animal = new Horse("Tommy the palomino");

  greeter.greet();
  sam.move();
  tom.move(34);
};

workingWithClasses();
