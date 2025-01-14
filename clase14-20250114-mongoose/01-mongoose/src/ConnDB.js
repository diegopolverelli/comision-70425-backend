import mongoose from "mongoose"

export const conectaDB=async(url, dbName)=>{
    try {
        await mongoose.connect(
            url,
            {
                dbName: dbName
            }
        )
        console.log(`DB online!`)
    } catch (error) {
        console.log(`Error al conectar a db: ${error.message}`)
    }
}

//mongodb+srv://backend70425:CoderCoder123@cluster0.3dgtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase14
