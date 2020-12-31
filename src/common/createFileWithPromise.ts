import path from "path";
import fs from "fs";

// Create file
export const createFile = async (
  outputNameDir: string,
  fileName: string,
  contentFile: string
) => {
  try {
    await fs.promises.writeFile(
      path.join(
        __dirname,
        path.join(`../functions/${outputNameDir}`, fileName)
      ),
      contentFile
    );
    console.log("File was created successfully!");
  } catch (error) {
    console.error("Create file error: ", error);
  }
};
