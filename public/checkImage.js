console.log("Loaded checkImage.js");

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
            } else {
                document.getElementById("notFound").style.display = "inline";
            }
        });
    }
}

const unlockImg = () => {
    const password = document.getElementById("passInput").value;
    const payload2 = {
        id: window.location.search.split("=")[1],
        password: password
    };
    console.log(payload2);
    fetch("/serve", {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload2)
    }).then((response) => {
        if (response.status == 200) {
            console.log(response);
            document.getElementById("imag").src = response;
        } else {
            document.getElementById("wrongPass").style.display = "inline";
        }
    });
};
