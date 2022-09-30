const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://sayush:Sayush12@cluster0.i38yayc.mongodb.net/?retryWrites=true&w=majority',{

    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to database")
}).catch((e)=>{
    console.log(e)
    console.log("Unable to connect with database")
})
