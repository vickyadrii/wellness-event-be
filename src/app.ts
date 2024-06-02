import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "@/routes";
import { dbConfig } from "@/configs/dbConfig";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
  methods: [],
  allowedHeaders: [],
  credentials: true,
};

dbConfig();

app.options("*", cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
