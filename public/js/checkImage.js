export function checkImage(id) {
    fetch("/check", {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: id })
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