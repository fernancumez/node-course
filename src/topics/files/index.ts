import {
  createFileWithCallback,
  createFileWithPromise,
} from "./operations/createFiles";
import {
  readFileWithPromise,
  readFileWithCallback,
} from "./operations/readFiles";

import { data } from "./dataFiles";

const fileSystem = async (): Promise<void> => {
  try {
    let contentFile: string = JSON.stringify(data);

    // Create files with promises and callbacks
    await createFileWithPromise("dataPromise.txt", contentFile);
    createFileWithCallback("dataCallback.txt", contentFile);

    // Read files with promises and callbacks
    await readFileWithPromise("dataPromise.txt");
    readFileWithCallback("dataCallback.txt");
  } catch (error) {
    console.error(error);
  }
};

fileSystem();
