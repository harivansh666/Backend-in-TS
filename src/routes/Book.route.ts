import { Router, Request, Response } from "express";
import { addBook, getBooks, updateBook } from "../controller/Book.controller";

const BookRouter = Router()

BookRouter.get('/all-books', getBooks)
BookRouter.post('/add-books', addBook)
BookRouter.post('/update-book/:id', updateBook)

export { BookRouter }