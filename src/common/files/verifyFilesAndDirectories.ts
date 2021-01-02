import path from "path";
import fs from "fs";

// Check if the directory or file exists
export const verifyFilesAndDirectories = async (
  dirPath: string
): Promise<boolean> => {
  try {
    await fs.promises.stat(path.join(__dirname, dirPath));
    return true;
  } catch (error) {
    return false;
  }
};
