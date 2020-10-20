console.log("Loaded uploadImage.js");

getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

const uploadImage = () => {
    let imagePassword = document.getElementById("imagePassword").value;
    let imageData = document.getElementById("imageToUpload").files[0];
    getBase64(imageData).then((b64Data) => {
        let payload = {
            pass: imagePassword,
            imgData: b64Data
        };

        console.log(payload);

        fetch("/upload", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then((response) => {
            console.log(response);
        });
    });
};
