import express from express;
const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to the payment network for Africans!")
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})