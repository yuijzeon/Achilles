const express = require("express");
const path = require("path");

const app = express();

app.use('/hello', (() => {
    const router = express.Router();

    router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "dist/index.html"));
    });

    router.use("/", express.static("dist"));

    return router;
})());

app.listen(process.env.PORT || 3000);
