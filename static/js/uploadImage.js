import { copyLink } from "./copyLink.js";
import { setImageNumber } from "./setImageNumber.js";

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

export function uploadImage() {
    let imagePassword = document.getElementById("imagePassword").value;
    let imageData = document.getElementById("imageToUpload").files[0];
    document.getElementById("msg").innerHTML = "";
    document.getElementById("uploadBtn").className = "lockBtn";
    document.getElementById("uploadBtn").innerHTML = "Uploading Image...";
    getBase64(imageData).then((b64Data) => {
        fetch("/upload", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pass: imagePassword, imgData: b64Data })
        }).then((response) => {
            if (response.status == 200) {
                response.json().then((data) => {
                    setImageNumber();
                    setInterval(() => {
                        document.getElementById("uploadBtn").className = "";
                        document.getElementById("uploadBtn").innerHTML =
                            "Upload again";
                    }, 3000);
                    document.getElementById("uploadBtn").innerHTML =
                        "Image Uploaded";
                    document.getElementById(
                        "msg"
                    ).innerHTML = `<span id="msgContainer"><a href="javascript:void(0);" id="copyHref">Copy</a> this link to share it</span><br><a id="imageLink" href="/i.html?l=${data.id}" target="_blank">${window.location.protocol}//${window.location.hostname}/i.html?l=${data.id}</a>`;
                    document
                        .getElementById("copyHref")
                        .addEventListener("click", copyLink);
                });
            } else {
                document.getElementById("uploadBtn").className = "lockBtn";
                document.getElementById("uploadBtn").innerHTML =
                    "Upload Failed";
            }
        });
    });
}
