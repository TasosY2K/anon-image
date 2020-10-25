export function checkSize() {
    const fileSize =
        document.getElementById("imageToUpload").files[0].size / 1024 / 1024;
    if (fileSize) {
        if (fileSize > 5) {
            document.getElementById("uploadBtn").className = "lockBtn";
            document.getElementById("msg").innerHTML =
                '<span id="sizeSpan">Image can\'t exceed 5MB</span>';
        } else {
            document.getElementById("msg").innerHTML = "";
        }
    }
}
