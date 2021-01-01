import fs from "fs";
import path from "path";

// Read file with promise
export const readFilePromise = async (
  outputNameDir: string,
  fileName: string
): Promise<void> => {
  try {
    let filePath = path.join(
      __dirname,
      path.join(`../../functions/${outputNameDir}`, fileName)
    );

    const data: Buffer = await fs.promises.readFile(filePath);

    console.log(data.toString());
  } catch (error) {
    console.error(error);
  }
};
