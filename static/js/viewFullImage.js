export function viewFullImage(data) {
    let image = new Image();
    image.src = data;

    let w = window.open("");
    w.document.write(image.outerHTML);
}
