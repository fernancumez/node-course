import {
  createFileWithCallback,
  createFileWithPromise,
} from "./functions/createFiles";

const main = async (): Promise<void> => {
  try {
    await createFileWithPromise();
    createFileWithCallback();
  } catch (error) {
    console.error(error);
  }
};

main();
