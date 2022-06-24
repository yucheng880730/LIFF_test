import express from "express";
import cors from "cors";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use(express.static("./"));

const port = 5000;

app.get("/", function (req, res) {
  res.render("index.html");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
