const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 80;


const staticPath = path.join(__dirname,"../static");
const viewPath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");


app.use(express.static(staticPath));


app.set('view engine', 'hbs');
app.set('views', viewPath);


hbs.registerPartials(partialPath);




app.get("/",(req,res)=>{    
    res.render('index');
});
app.get("/about",(req,res)=>{    
    res.render('about');
});
app.get("/weather",(req,res)=>{    
    res.render('weather');
});
app.get("/service",(req,res)=>{    
    res.status(404).render('error')
});
app.get("*",(req,res)=>{    
    res.status(404).render('error');
});







app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})















