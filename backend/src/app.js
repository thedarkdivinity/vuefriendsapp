const express = require('express')
require('./database/conn')
const Friend=require('./models/friends')
const app=express()
const cors=require('cors')
const port=process.env.PORT || 9000
app.use(express.json())
app.use(cors())

// const router = new express.Router()
// router.get("/api",(req,res)=>{
//     res.send("hello")
// })
// app.use(router)
app.get("/",(req,res)=>{
res.send({msg:"INDEX ROUTE"})
})


//GET ALL FRIENDS

app.get("/getFriends",async(req,res)=>{
    try {
        const friendsData= await Friend.find()
        res.send(friendsData)
    } catch (e) {
        res.status(500).send(e)
    }
})


//GET INDIVIDUAL FRIEND
app.get("/getFriend/:id",async(req,res)=>{
try {
    const _id=req.params.id
    const friendData= await Friend.findById({_id})
    if(!friendData)
    {
        return res.status(404).send()
    }
    else{
        res.send(friendData)
    }
    
} catch (e) {
    res.status(500).send(e)
}
})
//UPDATE A FRIEND
app.patch("/updatefriend/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const updateFriends= await Friend.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(updateFriends)
    } catch (e) {
        res.status(404).send(e)
    }
})

//DELETE A FRIEND BY ID
app.delete("/deletefriend/:id",async(req,res)=>{
    try {
        
         const deleteFriend= await Friend.findByIdAndDelete(req.params.id)
         if(!req.params.id)
         {
            return res.status(404).send()
         }
         res.send(deleteFriend)
    } catch (err) {
        res.status(500).send(err)
    }
})

//ADD A NEW FRIEND
app.post("/addfriend",async(req,res)=>{
    try {
        console.log(req.body)
        const friend= new Friend(req.body)
        const createFriend = await friend.save()
        res.status(201).send(createFriend)
    } catch (err) {
        res.status(400).send(err)
    }


   
    })

app.listen(port,()=>{
    console.log(`Server running at ${port}`)
})