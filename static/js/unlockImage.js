import { viewFullImage } from "./viewFullImage";
import { downloadImage } from "./downloadImage";

export function unlockImage() {
    const password = document.getElementById("passInput").value;

    fetch("/serve", {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: window.location.search.split("=")[1],
            password: password
        })
    }).then((response) => {
        if (response.status == 200) {
            document.getElementById("passInput").style.borderColor = "#00d42a";
            document.getElementById("msg").style.color = "#00d42a";
            document.getElementById("msg").innerHTML = "Image unlocked";
            document.getElementById("passContainer").style.display = "none";
            document.getElementById("imageContainer").style.display = "inline";
            response.json().then((data) => {
                data = JSON.parse(data);
                document.getElementById("imag").setAttribute("src", data.data);
                document
                    .getElementById("fullImage")
                    .addEventListener("click", () => {
                        viewFullImage(data.data);
                    });
                document
                    .getElementById("downloadImage")
                    .addEventListener("click", () => {
                        downloadImage(data.data);
                    });
            });
        } else {
            document.getElementById("passInput").style.borderColor = "#d40f1c";
            document.getElementById("msg").style.color = "#d40f1c";
            document.getElementById("msg").innerHTML = "Wrong password";
        }
    });
}
