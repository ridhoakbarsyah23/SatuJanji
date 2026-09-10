// Upload adapter: Cloudinary in production and local files in development.
import { createHash, randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

const maxFileSize = 4 * 1024 * 1024;
const allowedTypes = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
} as const;

type AllowedMimeType = keyof typeof allowedTypes;

function hasValidSignature(buffer: Buffer, type: AllowedMimeType) {
  if (type === "image/jpeg") {
    return buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  }
  if (type === "image/png") {
    return buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  }
  return (
    buffer.length >= 12 &&
    buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
    buffer.subarray(8, 12).toString("ascii") === "WEBP"
  );
}

async function validateFile(file: File) {
  if (!file.size) throw new Error("File foto kosong.");
  if (file.size > maxFileSize) throw new Error(`Ukuran ${file.name} melebihi batas 4 MB.`);
  if (!(file.type in allowedTypes)) throw new Error(`${file.name} harus berformat JPG, PNG, atau WebP.`);

  const type = file.type as AllowedMimeType;
  const buffer = Buffer.from(await file.arrayBuffer());
  if (!hasValidSignature(buffer, type)) throw new Error(`Isi file ${file.name} tidak sesuai dengan format gambarnya.`);
  return { buffer, extension: allowedTypes[type] };
}

async function uploadToCloudinary(file: File) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) return null;

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const folder = "satujanji/prewedding";
  const signature = createHash("sha1")
    .update(`folder=${folder}&timestamp=${timestamp}${apiSecret}`)
    .digest("hex");
  const body = new FormData();
  body.set("file", file);
  body.set("api_key", apiKey);
  body.set("timestamp", timestamp);
  body.set("folder", folder);
  body.set("signature", signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body,
  });
  if (!response.ok) throw new Error("Upload foto ke penyimpanan cloud gagal.");

  const result = (await response.json()) as { secure_url?: string };
  if (!result.secure_url) throw new Error("Penyimpanan cloud tidak mengembalikan URL foto.");
  return result.secure_url;
}

export async function storePreweddingFile(file: File) {
  const { buffer, extension } = await validateFile(file);
  const cloudUrl = await uploadToCloudinary(file);
  if (cloudUrl) return cloudUrl;

  if (process.env.NODE_ENV === "production") {
    throw new Error("Penyimpanan foto production belum dikonfigurasi. Lengkapi konfigurasi Cloudinary terlebih dahulu.");
  }

  const uploadDirectory = path.join(process.cwd(), "public", "uploads", "prewedding");
  const fileName = `${Date.now()}-${randomUUID()}.${extension}`;
  await fs.mkdir(uploadDirectory, { recursive: true });
  await fs.writeFile(path.join(uploadDirectory, fileName), buffer);
  return `/uploads/prewedding/${fileName}`;
}

export function readUploadedFiles(formData: FormData, field: string, maxFiles: number) {
  const files = formData
    .getAll(field)
    .filter((value): value is File => value instanceof File && value.size > 0);
  if (files.length > maxFiles) throw new Error(`Maksimal ${maxFiles} foto dapat diunggah sekaligus.`);
  return files;
}
