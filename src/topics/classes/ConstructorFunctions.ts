export class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;

  // constructor(message: string) {
  //   this.greeting = message;
  // }

  greet() {
    if (this.greeting) {
      return `Hello ${this.greeting}`;
    } else {
      Greeter.standardGreeting;
    }
  }
}
