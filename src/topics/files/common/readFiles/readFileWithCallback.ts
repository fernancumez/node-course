import path from "path";
import fs from "fs";

// Read files with callback
export const readFileCallback = (
  outputNameDir: string,
  fileName: string
): void => {
  let filePath = path.join(
    __dirname,
    path.join(`../../${outputNameDir}`, fileName)
  );

  fs.readFile(filePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
    if (err) return console.log(err);

    return console.log(data.toString());
  });
};
