const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const path=require("path");
const app = express()

const sinUpSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const testSchema=mongoose.Schema({
    name:String,
    email:String,
    correct:Number,
    missQuestion:Number,
    answerSet:[String],
    wrong:Number
})

const SingUp=mongoose.model("singUp",sinUpSchema);
const Test=mongoose.model("test",testSchema)
// Macking DataBase
// mongoose.connect('mongodb://0.0.0.0:27017/mcqDB',{useNewUrlParser : true , useUnifiedTopology : true })
mongoose.connect('mongodb://0.0.0.0:27017/mcqDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');

        // Create new user instances
        const user1 = new SingUp({
            name: "Ganesh",
            email: "ganeshgaud1111@gmail.com",
            password: "asdf"
        });
        const user2 = new SingUp({
            name: "Anurag",
            email: "anurag2222@gmail.com",
            password: "zxcv"
        });
        const user3 = new SingUp({
            name: "Jitu",
            email: "jitu3333@gmail.com",  // Fixed email format
            password: "qwer"
        });

        // Save the user instances to the database
        return Promise.all([user1.save(), user2.save(), user3.save()]);
    })
    .then(() => {
        console.log('Users added to the database');
    })
    .catch(error => {
        console.error('Error connecting to the database or saving users:', error);
    })
  

//Onbject
 let currentEmail="";
 let currentUser=""

//Schema

// const questionSchema=mongoose.Schema({
//     test:String,
//     data:{
//         question:String,
//         option:[{a:String},{b:String},{c:String},{d:String}],
//         answer:String
//     }
// })
// const dataSechema=mongoose.Schema({
//     test:[questionSchema]
// })


//collection

// const Data=mongoose.model("data",dataSechema)

//Use
app.use(express.static("public"))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000;

//Defalt user
// const user1=new SingUp({
//     name:"Ganesh",
//     email:"ganeshgaud1111@gmail.com",
//     password:"asdf"
// })
// const user2=new SingUp({
//     name:"Anurag",
//     email:"anurag2222@gmail.com",
//     password:"zxcv"
// })
// const user3=new SingUp({
//     name:"Jitu",
//     email:"jitu3333gmail.com",
//     password:"qwer"
// })

// set
app.set("view engine", "ejs");
// const defaltUserArray=[user1,user2,user3];

// SingUp.insertMany(defaltUserArray,function(err){
//   if(err){
//     console.log("Defalt user are not Stored =>"+err);
//   }
//   else{
//     console.log("SucessFull Inserted Defalt user");
//   }
// })


//Get
app.get('/',(req,res)=>{
    res.render("login",{setEmail:""})
})
app.get('/singUp',(req,res)=>{
   res.sendFile(path.join(__dirname,"views/singUp.html"))
})
app.get('/test', async (req, res) => {
    console.log(currentEmail);
    try {
      const result = await SingUp.findOne({ email: currentEmail }).exec();
      if (result) {
        currentUser = result.name;
      }
      res.sendFile(path.join(__dirname, "views/test.html"));
    } catch (err) {
      console.log(err);
    }
  });
  
app.get("/algebra",(req,res)=>{
   res.render("algebra",{Username:currentUser})
})

app.get("/result", async (req, res) => {
    try {
      const tempResult = {
        testname: "Null",
        Mark: 0,
        wrong: 0,
        Miss: 0,
        name: "Null"
      };
      const result = await Test.findOne({ email: currentEmail }).exec();
      if (result) {
        tempResult.testname = result.name;
        tempResult.Miss = result.missQuestion;
        tempResult.wrong = result.wrong;
        tempResult.Mark = result.correct;
        res.render("result", {
          userName: currentUser,
          email: currentEmail,
          attempt: (tempResult.wrong + tempResult.Mark),
          skip: tempResult.Miss,
          correct: tempResult.Mark,
          wrong: tempResult.wrong
        });
      } else {
        console.log('No result found');
      }
    } catch (err) {
      console.log(err);
    }
  });
  
// app.get("/data",async (req,res)=>{
//     console.log("i ma in data Section")
//     await Data.findOne({test:"maths"},(err,result)=>{
//           if(!err){
//               console.log(result.data)
//               res.json(result.data)
//           }
//           else{
//             console.log("Some error in feach data "+ err);
//           }
//     })
// })

//Post
app.post("/", async (req, res) => {
    console.log("it is post request from login.ejs");
    const Getpassword = req.body.password;
    const Getemail = req.body.email;
    const Getbtn = req.body.btn;
  
    if (Getbtn === "singUp") {
      res.redirect("/singUp");
    } else {
      console.log(Getemail + " , " + Getpassword);
      try {
        const result = await SingUp.findOne({ email: Getemail, password: Getpassword }).exec();
        if (!result) {
          res.render("login", { setEmail: "" });
        } else {
          currentEmail = result.email;
          console.log("email=======>" + currentEmail);
          res.redirect("/test");
        }
      } catch (err) {
        console.log("==>" + err);
      }
    }
  });
  

app.post("/test",(req,res)=>{

    console.log("it is post request from test")
    if(req.body.btn==="restart"){
        res.redirect("/test");
    }
    else{
        const testName=req.body.test;
        const test=new Test({
            name:testName ,
            email:currentEmail,      
        })
        test.save();
        res.redirect(`${testName}`);
    }
})

app.post("/result",(req,res)=>{
    res.redirect("/result")
})

app.post("/posts", async (req, res) => {
    console.log("Hellow");
    console.log(req.body);
  
    const ResultValue = req.body;
  
    try {
      const result = await Test.findOneAndUpdate(
        { email: currentEmail },
        {
          answerSet: ResultValue.AnsArray,
          correct: ResultValue.Mark,
          missQuestion: ResultValue.Miss,
          wrong: ResultValue.wrong
        },
        { new: true }
      ).exec();
      console.log("Result is Stored in Database");
      res.redirect("/result");
    } catch (err) {
      console.log(err);
    }
  });
  

  app.post("/singUp", async (req, res) => {
    console.log("it is post request from singUp");
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const repetPassword = req.body.repetPassword;
    const btn = req.body.btn;
  
    if (btn === "logIn") {
      res.redirect("/");
    } else {
      console.log(password);
      console.log(email);
      if (password !== repetPassword || password === "" || name === "" || email === "" || repetPassword === "") {
        res.redirect("/singUp");
        console.log("Both passwords are different ");
      } else {
        try {
          const result = await SingUp.findOne({ email: email }).exec();
          if (result === null) {
            const newUser = new SingUp({
              name: name,
              email: email,
              password: password
            });
            await newUser.save();
            res.redirect("/");
          } else {
            res.redirect("/singUp");
            console.log("Account Already exists with this email");
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
 })