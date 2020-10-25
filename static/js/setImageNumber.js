export function setImageNumber() {
    fetch("/stats", {
        method: "get",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        response.json().then((data) => {
            document.getElementById("stats").innerHTML = "Images uploaded: " + data.imageNumber;
        });
    });
}