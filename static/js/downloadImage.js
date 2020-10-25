export function downloadImage(data) {
    console.log(data);
    var a = document.createElement("a");
    a.href = data;
    a.download = "download.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
