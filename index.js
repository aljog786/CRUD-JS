const express=require('express');
const mongoose=require('mongoose');
const router=require('./routes/routes');
const cors = require('cors');



const app=express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.use(cors());

//middleware
app.use(express.json()); 

app.use('/curries',router);

mongoose.connect("mongodb+srv://aljog786:alb786ert@cluster0.ycbceo2.mongodb.net/myDB?retryWrites=true&w=majority")
.then(()=>console.log('connected to Database'))
.then(()=>{
    app.listen(5000)
})
.catch((err)=>console.log(err));





// alb78re6t
