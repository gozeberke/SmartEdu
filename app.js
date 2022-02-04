const express = require('express');
const mongoose=require('mongoose')
const pageRoute=require('./routes/pageRoute')
const courseRoute=require('./routes/courseRoute')
const port = 3000;
const app = express();

// Connect DB
mongoose.connect('mongodb://localhost/smartedu-db')
.then(()=>{
  console.log(('Db Connected Successfuly'))
});

// Template Engine
app.set("view engine","ejs")
//Middlewares
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Routes
app.use('/',pageRoute);
app.use('/courses',courseRoute)

  

app.listen(port, () => {
  console.log(`Server is running port ${port}`);
});
