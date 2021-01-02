import path from "path";
import fs from "fs";

// Create file
export const createFilePromise = async (
  outputNameDir: string,
  fileName: string,
  contentFile: string
): Promise<void> => {
  try {
    const filePath = path.join(
      __dirname,
      path.join(`../../../topics/files/${outputNameDir}`, fileName)
    );

    await fs.promises.writeFile(filePath, contentFile);
    console.log("File was created successfully!");
  } catch (error) {
    console.error(error);
  }
};
