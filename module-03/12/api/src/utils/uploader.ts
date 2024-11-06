import { Request } from "express";
import multer from "multer";
import { join } from "path";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

export const SingleUploader = (filePrefix: string, folderName?: string) => {
  const maxSize = 1 * 1024 * 1024;
  const defaultDir = join(__dirname, "../../public");

  console.log(defaultDir);

  const storage = multer.diskStorage({
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback
    ) => {
      const destination = folderName ? defaultDir + folderName : defaultDir;
      cb(null, destination);
    },
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: FileNameCallback
    ) => {
      const originalNameParts = file.originalname.split(".");
      console.log(originalNameParts);
      const fileExtension = originalNameParts[originalNameParts.length - 1];
      const newFileName = filePrefix + Date.now() + "." + fileExtension;

      cb(null, newFileName);
    },
  });

  return multer({ storage: storage, limits: { fileSize: maxSize } }).single(
    "file"
  );
};
