console.log("Loaded core.js");

let pathname = window.location.pathname;

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
            document.getElementById("msg").style.display = "none";
            if (response.status == 200) {
                document.getElementById("passContainer").style.display =
                    "inline";
                const password = document.getElementById("passInput");
            } else {
                document.getElementById("notFound").style.display = "inline";
            }
        });
    }
}
