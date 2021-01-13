import { verifyFilesAndDirectories } from "../common/directories/verifyFilesAndDirectories";
import { readFilePromise } from "../common/readFiles/readFileWithPromise";
import { readFileCallback } from "../common/readFiles/readFileWithCallback";
import { outputNameDir } from "../constants";

// Read file with promises / async await
export const readFileWithPromise = async (fileName: string): Promise<void> => {
  try {
    const isDirectoryExist: boolean = await verifyFilesAndDirectories(
      `../../${outputNameDir}`
    );

    const isFileExist: boolean = await verifyFilesAndDirectories(
      `../../${outputNameDir}/${fileName}`
    );

    // Check if the directory and file exists
    if (!isDirectoryExist) return;
    if (!isFileExist) return;

    await readFilePromise(outputNameDir, fileName);
  } catch (error) {
    console.error(error);
  }
};

// Read file with callback and promise hell
export const readFileWithCallback = (fileName: string) => {
  verifyFilesAndDirectories(`../../${outputNameDir}`)
    .then((isDirectoryExist) => {
      if (isDirectoryExist)
        verifyFilesAndDirectories(`../../${outputNameDir}/${fileName}`)
          .then((isFileExist) => {
            if (isFileExist) readFileCallback(outputNameDir, fileName);
          })
          .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};
