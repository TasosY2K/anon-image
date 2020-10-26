export function viewFullImage(data) {
    const Window = window.open("");
    Window.document.write(`<img src="${data}">`);
}
