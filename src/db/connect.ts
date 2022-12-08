import mongoose from "mongoose"


export const dbConnect = async (url: string) => {
    try {
        await (await mongoose.connect(url)).set('strictQuery', false)
        console.log('connected to the db')
    } catch (err: any) {
        console.error(err.message)
    }


}