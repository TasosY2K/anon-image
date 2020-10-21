const pathname = window.location.pathname;

console.log("Loaded core.js");

if (pathname == "/") window.location.replace("/index.html");

if (pathname == "/i.html") {
    const srch = window.location.search;
    if (srch && srch.includes("?l=")) {
        const id = srch.split("=")[1];
        const payload = { id: id };
        fetch("/check", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then((response) => {
            if (response.status == 200) {
                document.getElementById("msg").innerHTML = "Image Found";
                document.getElementById("passContainer").style.display =
                    "inline";
                const password = document.getElementById("passInput");
            } else {
                document.getElementById("msg").innerHTML = "Image Not Found";
            }
        });
    }
}
