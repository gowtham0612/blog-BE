const express = require("express");
const app = express();
require("dotenv").config;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.send("hello world")
})


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
