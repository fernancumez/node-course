import {
  createFileWithCallback,
  createFileWithPromise,
} from "./functions/createFiles";

import { data } from "./common/data";

const main = async (): Promise<void> => {
  try {
    let contentFile: string = JSON.stringify(data);

    await createFileWithPromise("dataPromise.txt", contentFile);
    createFileWithCallback("dataCallback.txt", contentFile);
  } catch (error) {
    console.error(error);
  }
};

main();
