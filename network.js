import express from express;
const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to the payment network for Africans Yo!")
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})