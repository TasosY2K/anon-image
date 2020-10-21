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
            document.getElementById("msg").innerHTML = "Correct Password";
            document.getElementById("passContainer").style.display = "none";
            response.json().then((data) => {
                data = JSON.parse(data);
                console.log(data.data);
                document.getElementById("imag").setAttribute("src", data.data);
            });
        } else {
            document.getElementById("msg").innerHTML = "Wrong Password";
        }
    });
}
