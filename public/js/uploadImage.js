console.log("Loaded uploadImage.js");

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

const uploadImage = () => {
    document.getElementById("msg").innerHTML = "Uploading Image...";
    let imagePassword = document.getElementById("imagePassword").value;
    let imageData = document.getElementById("imageToUpload").files[0];
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
                    console.log(data);
                    document.getElementById(
                        "msg"
                    ).innerHTML = `Image Uploaded<br><a href="/i.html?l=${data.id}" target="_blank">copy this link to access it</a>`;
                });
            } else {
                document.getElementById("msg").innerHTML =
                    "Image Could Not Be Uploaded";
            }
        });
    });
};

document.getElementById("uploadBtn").addEventListener("click", uploadImage);
