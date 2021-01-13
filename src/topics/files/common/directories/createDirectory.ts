import path from "path";
import fs from "fs";

// Create directory
export const createDirectory = async (dirName: string): Promise<void> => {
  try {
    await fs.promises.mkdir(path.join(__dirname, `../../${dirName}`));
  } catch (error) {
    console.error("Create directory error", error);
  }
};
