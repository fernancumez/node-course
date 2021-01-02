import {
  createFileWithCallback,
  createFileWithPromise,
} from "./topics/files/createFiles";
import {
  readFileWithPromise,
  readFileWithCallback,
} from "./topics/files/readFiles";

import { data } from "./common/files/dataFiles";

const main = async (): Promise<void> => {
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

main();
