import { verifyFilesAndDirectories } from "../../common/files/verifyFilesAndDirectories";
import { readFilePromise } from "../../common/files/readFiles/readFileWithPromise";
import { readFileCallback } from "../../common/files/readFiles/readFileWithCallback";
import { outputNameDir } from "../../constants";

// Read file with promises / async await
export const readFileWithPromise = async (fileName: string): Promise<void> => {
  try {
    const isDirectoryExist: boolean = await verifyFilesAndDirectories(
      `../../topics/files/${outputNameDir}`
    );

    const isFileExist: boolean = await verifyFilesAndDirectories(
      `../../topics/files/${outputNameDir}/${fileName}`
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
  verifyFilesAndDirectories(`../../topics/files/${outputNameDir}`)
    .then((isDirectoryExist) => {
      if (isDirectoryExist)
        verifyFilesAndDirectories(
          `../../topics/files/${outputNameDir}/${fileName}`
        )
          .then((isFileExist) => {
            if (isFileExist) readFileCallback(outputNameDir, fileName);
          })
          .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};
