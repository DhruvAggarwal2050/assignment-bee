const express  = require("express")
const path = require("path")
const app = express()
const PORT = 8080
app.use(express.json())
filepath=path.join(__dirname,"/views/index.ejs")

app.set('view engine', 'ejs');



app.get("/welcome",(req,res)=>{
    let name="SAM"
    const d = new Date();
    const time = d.getTime();

    res.render(filepath,{name,time})
})





app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on PORT ${PORT} at http://localhost:${PORT}`);
    }
})