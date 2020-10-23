import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";

import "bootstrap";
import "../css/bootstrap.min.css";
import "../css/main.css";

import { uploadImage } from "./uploadImage.js";
import { checkPassword } from "./checkPassword.js";
import { checkSize } from "./checkSize.js";
import { checkImage } from "./checkImage.js";
import { unlockImage } from "./unlockImage.js";

const pathname = window.location.pathname;

switch (pathname) {
    case "/":
        window.location.replace("/index.html");

        break;
    case "/index.html":
        const upload = new FileUploadWithPreview("myUniqueUploadId");

        document
            .getElementById("uploadBtn")
            .addEventListener("click", uploadImage);

        document
            .getElementById("clearImage")
            .addEventListener("click", checkPassword);

        document
            .getElementById("imageToUpload")
            .addEventListener("input", checkPassword);

        document
            .getElementById("imageToUpload")
            .addEventListener("input", checkSize);

        document
            .getElementById("imagePassword")
            .addEventListener("input", checkPassword);

        break;
    case "/i.html":
        document
            .getElementById("unlockBtn")
            .addEventListener("click", unlockImage);

        const srch = window.location.search;

        if (srch && srch.includes("?l=")) {
            const id = srch.split("=")[1];
            checkImage(id);
        } else {
            window.location.replace("/index.html");
        }

        break;
}
