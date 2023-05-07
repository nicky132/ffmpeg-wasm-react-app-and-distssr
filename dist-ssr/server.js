const express = require("express");

const app = express();

app.use((_, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});
app.use(express.static(__dirname));

app.listen(3001, () => {
  console.log("listening on port 3000");
});