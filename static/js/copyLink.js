export function copyLink() {
    navigator.clipboard.writeText(
        document.getElementById("imageLink").innerHTML
    );
    document
        .getElementById("imageLink")
        .animate(
            [
                { backgroundColor: "rgb(235, 235, 235)" },
                { backgroundColor: "rgb(38, 154, 255)" },
                { backgroundColor: "rgb(235, 235, 235)" }
            ],
            {
                duration: 250,
                iterations: 1
            }
        );
}
