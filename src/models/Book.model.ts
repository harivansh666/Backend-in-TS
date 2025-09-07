import mongoose, { Schema } from "mongoose"

interface IBook {
    name: string,
    author: string,
    publishYear: number,
    price: number,
    discription: string
}

const BookSchema = new Schema<IBook>({
    name: { type: String, required: [true, "Book name is required"], trim: true },
    author: { type: String, required: true },
    publishYear: { type: Number, required: true },
    price: { type: Number, required: true },
    discription: { type: String, required: true },

}, { timestamps: true })

export const Book = mongoose.model<IBook>("Book", BookSchema) 