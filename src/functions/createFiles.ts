import { verifyFilesAndDirectories } from "../common/verifyFilesAndDirectories";
import { createDirectory } from "../common/createDirectory";
import { createFile } from "../common/createFileWithPromise";
import { createFileCallback } from "../common/createFileWithCallback";
import { outputNameDir } from "../constants";

// Create file with promises
export const createFileWithPromise = async (
  fileName: string,
  contentFile: string
): Promise<void> => {
  try {
    const isDirectoryExist: boolean = await verifyFilesAndDirectories(
      `../functions/${outputNameDir}`
    );

    const isFileExist: boolean = await verifyFilesAndDirectories(
      `../functions/${outputNameDir}/${fileName}`
    );

    // Check if the directory and file exists
    if (!isDirectoryExist) await createDirectory(outputNameDir);
    if (!isFileExist) await createFile(outputNameDir, fileName, contentFile);
  } catch (error) {
    console.error(error);
  }
};

// Create file with callbacks
export const createFileWithCallback = (
  fileName: string,
  contentFile: string
): void => {
  // Verify if the directory exists
  verifyFilesAndDirectories(`../functions/${outputNameDir}`)
    .then((res) => {
      if (res) {
        // Verify if the file exist
        verifyFilesAndDirectories(`../functions/${outputNameDir}/${fileName}`)
          .then((res) => {
            if (!res) createFileCallback(outputNameDir, fileName, contentFile);
          })
          .catch((err) => console.error(err));
      } else {
        // Verify if the file exist
        createDirectory(outputNameDir).then(() =>
          verifyFilesAndDirectories(`../functions/${outputNameDir}/${fileName}`)
            .then((res) => {
              if (!res)
                createFileCallback(outputNameDir, fileName, contentFile);
            })
            .catch((err) => console.error(err))
        );
      }
    })
    .catch((err) => console.error(err));
};
