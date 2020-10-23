import passwordStrength from "check-password-strength";

export function checkPassword() {
    if (document.getElementById("imageToUpload").files.length > 0) {
        const password = document.getElementById("imagePassword").value;

        if (password) {
            switch (passwordStrength(password).value) {
                case "Weak":
                    document.getElementById("uploadBtn").className = "lockBtn";
                    document.getElementById("passLabel").innerHTML = "weak";
                    document.getElementById("passLabel").style.color =
                        "#d40f1c";
                    document.getElementById("imagePassword").style.borderColor =
                        "#d40f1c";

                    break;
                case "Medium":
                    document.getElementById("uploadBtn").className = "";
                    document.getElementById("passLabel").innerHTML = "medium";
                    document.getElementById("passLabel").style.color =
                        "#e45c01";
                    document.getElementById("imagePassword").style.borderColor =
                        "#e45c01";

                    break;
                case "Strong":
                    document.getElementById("uploadBtn").className = "";
                    document.getElementById("passLabel").innerHTML = "strong";
                    document.getElementById("passLabel").style.color =
                        "#00d42a";
                    document.getElementById("imagePassword").style.borderColor =
                        "#00d42a";

                    break;
            }
        } else {
            document.getElementById("uploadBtn").className = "lockBtn";
            document.getElementById("passLabel").innerHTML = "";
            document.getElementById("passLabel").style.color =
                "rgb(235, 235, 235)";
            document.getElementById("imagePassword").style.borderColor =
                "rgb(235, 235, 235)";
        }
    } else {
        document.getElementById("uploadBtn").className = "lockBtn";
        document.getElementById("passLabel").innerHTML = "";
        document.getElementById("passLabel").style.color = "rgb(235, 235, 235)";
        document.getElementById("imagePassword").style.borderColor =
            "rgb(235, 235, 235)";
    }
}
