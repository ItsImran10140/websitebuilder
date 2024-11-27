import {
  generateUploadButton,
  generateUploadDropzone,
  generateUploader,
  generateReactHelpers,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

const UploadButton = generateUploadButton<OurFileRouter>();
const UploadDropzone = generateUploadDropzone<OurFileRouter>();
const Uploader = generateUploader<OurFileRouter>();
const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();

// import { generateComponents } from "@uploadthing/react";
// import { generateReactHelpers } from "@uploadthing/react/hooks";

// import type { OurFileRouter } from "@/app/api/uploadthing/core";

// const { UploadButton, UploadDropzone, Uploader } =
//   generateComponents<OurFileRouter>();

// const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();

export { UploadButton, UploadDropzone, Uploader, useUploadThing, uploadFiles };
