import {
  createFileWithCallback,
  createFileWithPromise,
} from "./functions/createFiles";
import {
  readFileWithPromise,
  readFileWithCallback,
} from "./functions/readFiles";

import { data } from "./common/data";

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
