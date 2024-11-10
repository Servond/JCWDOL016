import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import * as streamifier from "streamifier";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "./envConfig";

cloudinary.config({
  api_key: CLOUDINARY_API_KEY || "",
  api_secret: CLOUDINARY_API_SECRET || "",
  cloud_name: CLOUDINARY_CLOUD_NAME || "",
});

export const cloudinaryUpload = (
  file: Express.Multer.File
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      (error, result: UploadApiResponse) => {
        if (error) {
          console.log("error");
          return reject(error);
        }
        resolve(result);
      }
    );
    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
};
