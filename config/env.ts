import dotenv from 'dotenv'

dotenv.config()

export const port = process.env.PORT
export const url:string = process.env.MONGO_URI as string