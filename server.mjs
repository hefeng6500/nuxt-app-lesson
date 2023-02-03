const { handler } = await import("./.output/server/index.mjs");
import express from "express";

const app = express();
const port = 8080;

app.get("/", async function (req, res) {
  const { statusCode, headers, body } = await handler({ rawPath: "/" });
  res.send(body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
