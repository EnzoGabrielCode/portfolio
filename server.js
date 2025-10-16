import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import portfolioRoutes from "./src/routes/portifolioRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", portfolioRoutes);

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
