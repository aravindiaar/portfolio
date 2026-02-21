import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const app = express();
const httpServer = createServer(app);

app.use(express.static(ROOT, {
  index: "index.html",
  extensions: ["html"],
}));

app.use((_req, res) => {
  res.sendFile(path.join(ROOT, "index.html"));
});

const port = parseInt(process.env.PORT || "5000", 10);
httpServer.listen({ port, host: "0.0.0.0" }, () => {
  console.log(`Static portfolio serving on port ${port}`);
});
