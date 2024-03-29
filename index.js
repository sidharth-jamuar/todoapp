const app=require('express')();
const bodyParser=require('body-parser');
const mongoose=require("mongoose");
const keys=require("./config/keys")
const cors=require("cors");

app.use(cors({origin:"http://localhost:3000"}))
const PORT=process.env.PORT || 3004;
mongoose.Promise=global.Promise;
mongoose.connect(keys.mongoDBURI,{useNewUrlParser:true},()=>{
  console.log("connected to database")
})
app.use(bodyParser.json())
require("./routes/userRoutes")(app)
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
})