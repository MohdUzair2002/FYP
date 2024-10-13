const moongoose=require("moongoose")

const book=new moongoose.schema(
    {
        url:
        {
            type:String,
            required:true,
        },
        title:
        {
            type:String,
            required:true,
        },
        author:
        {
            type:String,
            required:true,
        },
        price:
        {
            type:Number,
            required:true,
        },
        desc:
        {
            type:String,
            required:true,
        },
        language:
        {
            type:String,
            required:true,
        },
        
        
    },
    {timestamps:true}

)
module.exports=moongoose.model("books",book)