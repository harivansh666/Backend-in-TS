import { Router } from "express";
import { BookRouter } from "./Book.route";

export const router = Router();

router.use("/books", BookRouter)