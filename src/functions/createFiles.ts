import { verifyFilesAndDirectories } from "../common/verifyFilesAndDirectories";
import { createDirectory } from "../common/createDirectory";
import { createFile } from "../common/createFileWithPromise";
import { createFileCallback } from "../common/createFileWithCallback";
import { data } from "../common/data";
import {
  fileNameWithPromise,
  fileNameWithCallback,
  outputNameDir,
} from "../constants";

// Create file with promises
export const createFileWithPromise = async () => {
  try {
    let contentFile: string = JSON.stringify(data);

    const isDirectoryExist: boolean = await verifyFilesAndDirectories(
      `../functions/${outputNameDir}`
    );

    const isFileExist: boolean = await verifyFilesAndDirectories(
      `../functions/${outputNameDir}/${fileNameWithPromise}`
    );

    // Check if the directory and file exists
    if (!isDirectoryExist) await createDirectory(outputNameDir);
    if (!isFileExist)
      await createFile(outputNameDir, fileNameWithPromise, contentFile);
  } catch (error) {
    console.error(error);
  }
};

// Create file with callbacks
export const createFileWithCallback = () => {
  let contentFile: string = JSON.stringify(data);

  verifyFilesAndDirectories(`../functions/${outputNameDir}`)
    .then((res) => {
      if (res) {
        verifyFilesAndDirectories(
          `../functions/${outputNameDir}/${fileNameWithCallback}`
        )
          .then((res) => {
            if (!res)
              createFileCallback(
                outputNameDir,
                fileNameWithCallback,
                contentFile
              );
          })
          .catch((err) => console.error(err));
      } else {
        createDirectory(outputNameDir).then(() =>
          verifyFilesAndDirectories(
            `../functions/${outputNameDir}/${fileNameWithCallback}`
          )
            .then((res) => {
              if (!res)
                createFileCallback(
                  outputNameDir,
                  fileNameWithCallback,
                  contentFile
                );
            })
            .catch((err) => console.error(err))
        );
      }
    })
    .catch((err) => console.error(err));
};
