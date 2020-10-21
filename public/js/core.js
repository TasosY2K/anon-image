import { uploadImage } from "./uploadImage.js";
import { checkImage } from "./checkImage.js";
import { unlockImage } from "./unlockImage.js";

const pathname = window.location.pathname;

switch (pathname) {
    case "/":
        console.log(1);
        window.location.replace("/index.html");
        break;
    case "/index.html":
        console.log(2);
        document.getElementById("uploadBtn").addEventListener("click", uploadImage);
        break;
    case "/i.html":
        console.log(3);
        document.getElementById("unlockBtn").addEventListener("click", unlockImage);

        const srch = window.location.search;

        if (srch && srch.includes("?l=")) {
            const id = srch.split("=")[1];
            checkImage(id)
        } else {
            window.location.replace("/index.html");
        }

        break;
}
