import path from "path";
import fs from "fs";

export const createFileCallback = (
  outputNameDir: string,
  fileName: string,
  contentFile: string
) => {
  fs.writeFile(
    path.join(
      __dirname,
      path.join(`../../functions/${outputNameDir}`, fileName)
    ),

    contentFile,
    (err: NodeJS.ErrnoException | null) => {
      if (err) return console.error(err);
      return console.log("File was created successfully!");
    }
  );
};
