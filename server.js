const express = require('express');//it returns a function .so we have to call express().
const path = require('path'); // Import path module
const app = express()//now express()function is returning a object so app contains the obj
console.log(app);
app.listen(3000);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render("./index.ejs");//when we are sending files we have to use render//so basically ejs finds the viewa folder by defalut (thats why we crete views folder) and tehrn search for index file.ifwe do not give extension of ejs then it will not work.we have to set viewengine as ejs.
  // app.set('view engine', 'ejs');
})
app.get("/htmlfile",(req,res)=>{
   
    // res.sendFile(require("./xx.html"))--->wrong syntax
    res.sendFile(path.join(__dirname, "xx.html"));
})