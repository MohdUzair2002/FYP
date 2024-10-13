const moongoose=require("moongoose")

const conn=async () => {

    try {
        await moongoose.connect(process.env.URI)
        console.log("Connected to DataBase")
     }

    catch (error) {
        console.log(error)
    }
}

conn();