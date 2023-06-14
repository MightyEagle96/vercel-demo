import express from "express";

const app = express();

app.use(express.json());

app
  .get("/", (req, res) => {
    res.json({ message: "hello", time: new Date() });
  })
  .use("*", (req, res) => {
    res.status(404).send("Route not found");
  });

app.listen(3456, () => {
  console.log("Server is running on port 3456");
});
