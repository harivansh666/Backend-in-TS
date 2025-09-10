import { Request, Response } from "express"
import { Book } from "../models/Book.model"

interface IResponse {
    success: boolean,
    message: string,
    data?: any
}

export const getBooks = async (req: Request, res: Response) => {
    try {

        const all_books = await Book.find()

        if (!all_books) {
            res.status(404).json(
                {
                    success: false,
                    message: "not Book yet in db",
                } as IResponse
            )
        }
        res.status(200).json(
            {
                success: true,
                message: "Here is list of books",
                data: all_books
            } as IResponse
        )
    } catch (error: any) {
        console.log(error)
    }
}

export const addBook = async (req: Request, res: Response) => {

    const { name, author, publishYear, price, discription } = req.body

    try {
        const book = await Book.create({
            name,
            author,
            publishYear,
            price,
            discription
        })
        return res.status(201).json({
            success: true, message: "Booke added successfully", data: book
        } as IResponse)


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false, message: "Booke not added"
        } as IResponse)
    }
}

export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const updated_book = await Book.findByIdAndUpdate({ _id: id }, {
            name: "mukesh ke ghodi",
            discription: "aaa reha aa bro",
            publishYear: 2006,
            price: 160

        }, { new: true })
        console.log(updated_book)

    } catch (error: any) {
        console.log(error)

    }
}