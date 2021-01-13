import { fileSystem } from "./topics/files";
import { workingWithClasses } from "./topics/classes";

const main = async (): Promise<void> => {
  try {
    // Topic 1: Working with file system
    await fileSystem();

    // Topic 2: Working with object oriented programming
    workingWithClasses();
  } catch (error) {
    console.error(error);
  }
};

main();
