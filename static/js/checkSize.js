export function checkSize() {
    const fileSize =
        document.getElementById("imageToUpload").files[0].size / 1024 / 1024;
    if (fileSize) {
        if (fileSize > 1) {
            document.getElementById("uploadBtn").className = "lockBtn";
            document.getElementById("msg").innerHTML = "Image can't exceed 5MB";
        } else {
            document.getElementById("msg").innerHTML = "";
        }
    }
}
