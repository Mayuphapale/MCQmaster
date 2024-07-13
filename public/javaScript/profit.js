let a="a^2+2ab+b^2";
let b="a^2-2ab+b^2";
let c="a^2+2ab-b^2";
let d="a^2-2ab-b^2";

// let ResultValue.AnsArray=[]
let noQuestion=24;
let currentQuestion=0;
let mark=0;
let wrong=0;
let missQuestion=0;
// let noAns=0;
// let minute;
// let secound;
const ResultValue={
    Mark:0,
    wrong:0,
    Miss:0,
    AnsArray:[String]
}

// 0-> seen  1->give ResultValue.AnsArray  -1=> not seen
for(let i=0;i<noQuestion;i++){
    ResultValue.AnsArray[i]="-1";
}
//  let obj2=run();
//  console.log(obj2)
let profitLossQuestions = [
    {
      question: "A man bought a cycle for $1200 and sold it at a loss of 25%. What is the selling price of the cycle?",
      options: [
        { a: "$900" },
        { b: "$800" },
        { c: "$1000" },
        { d: "$1100" }
      ],
      answer: "a"
    },
    {
      question: "A man bought an article for $1500 and sold it for $1200. Find his loss percentage.",
      options: [
        { a: "20%" },
        { b: "25%" },
        { c: "30%" },
        { d: "15%" }
      ],
      answer: "a"
    },
    {
      question: "A shopkeeper sells an article at a profit of 10%. If he had bought it for $20 less and sold it for $10 less, he would have gained 14 2/7%. Find the cost price of the article.",
      options: [
        { a: "$180" },
        { b: "$200" },
        { c: "$150" },
        { d: "$175" }
      ],
      answer: "a"
    },
    {
      question: "A trader bought an article for $240 and sold it for $300. What is the profit percentage?",
      options: [
        { a: "20%" },
        { b: "25%" },
        { c: "30%" },
        { d: "15%" }
      ],
      answer: "b"
    },
    {
      question: "A man buys an article for $50 and sells it for $45. Find the loss percentage.",
      options: [
        { a: "10%" },
        { b: "15%" },
        { c: "5%" },
        { d: "20%" }
      ],
      answer: "a"
    },
    {
      question: "A man bought an article and sold it for $2500, thereby making a profit of 25%. What was the cost price of the article?",
      options: [
        { a: "$2000" },
        { b: "$2200" },
        { c: "$2300" },
        { d: "$2400" }
      ],
      answer: "a"
    },
    {
      question: "A person bought an article for $500 and sold it for $450. Find his loss percentage.",
      options: [
        { a: "10%" },
        { b: "12%" },
        { c: "15%" },
        { d: "8%" }
      ],
      answer: "a"
    },
    {
      question: "A man sells two articles at $990 each. On one, he gains 10% and on the other, he loses 10%. Find his overall gain or loss percentage.",
      options: [
        { a: "1% loss" },
        { b: "1% gain" },
        { c: "No profit, no loss" },
        { d: "2% loss" }
      ],
      answer: "a"
    },
    {
      question: "If the cost price of 20 articles is equal to the selling price of 16 articles, what is the profit percentage?",
      options: [
        { a: "20%" },
        { b: "25%" },
        { c: "30%" },
        { d: "15%" }
      ],
      answer: "b"
    },
    {
      question: "A shopkeeper buys 100 units of an article at $8 each and spends $200 on transportation. If he sells them at $10 each, what is his profit percentage?",
      options: [
        { a: "20%" },
        { b: "25%" },
        { c: "30%" },
        { d: "35%" }
      ],
      answer: "a"
    },
    {
      question: "A man bought 15 kg of rice at $20 per kg and 25 kg of rice at $18 per kg. He mixed them and sold the mixture at $19 per kg. What is his profit or loss percentage?",
      options: [
        { a: "1% loss" },
        { b: "2% profit" },
        { c: "1% profit" },
        { d: "2% loss" }
      ],
      answer: "a"
    },
    {
      question: "A trader buys two articles for $400 each. He sells one at 10% profit and the other at 10% loss. What is his overall profit or loss percentage?",
      options: [
        { a: "No profit, no loss" },
        { b: "1% profit" },
        { c: "1% loss" },
        { d: "2% loss" }
      ],
      answer: "c"
    },
    {
      question: "A man bought an article for $800 and sold it for $960. What is the profit percentage?",
      options: [
        { a: "15%" },
        { b: "20%" },
        { c: "25%" },
        { d: "30%" }
      ],
      answer: "c"
    },
    {
      question: "A shopkeeper sells an article for $1500 at a profit of 25%. What is the cost price of the article?",
      options: [
        { a: "$1200" },
        { b: "$1000" },
        { c: "$1100" },
        { d: "$1150" }
      ],
      answer: "a"
    },
    {
      question: "A man sells an article at a gain of 10%. If he had sold it for $5 more, he would have gained 12 1/2%. Find the cost price of the article.",
      options: [
        { a: "$100" },
        { b: "$200" },
        { c: "$250" },
        { d: "$150" }
      ],
      answer: "b"
    },
    {
      question: "If selling price of an article is doubled, the profit triples. Find the profit percentage.",
      options: [
        { a: "100%" },
        { b: "150%" },
        { c: "200%" },
        { d: "300%" }
      ],
      answer: "a"
    },
    {
      question: "A trader sells an article at a loss of 10%. If the selling price was increased by $50, there would be a gain of 5%. What is the cost price of the article?",
      options: [
        { a: "$200" },
        { b: "$300" },
        { c: "$400" },
        { d: "$500" }
      ],
      answer: "b"
    },
    {
      question: "A man buys an article for $300 and sells it for $250. Find his loss percentage.",
      options: [
        { a: "16 2/3%" },
        { b: "20%" },
        { c: "15%" },
        { d: "25%" }
      ],
      answer: "a"
    },
    {
      question: "A man sold an article for $240, thereby gaining 20%. What is the cost price of the article?",
      options: [
        { a: "$200" },
        { b: "$180" },
        { c: "$150" },
        { d: "$250" }
      ],
      answer: "a"
    },
    {
      question: "A trader marks his goods 20% above cost price and gives a discount of 10%. What is his profit percentage?",
      options: [
        { a: "8%" },
        { b: "10%" },
        { c: "12%" },
        { d: "15%" }
      ],
      answer: "b"
    },
    {
      question: "A trader sells an article at a profit of 15%. If he had bought it for 20% less and sold it for $12 more, he would have gained 35%. Find the cost price of the article.",
      options: [
        { a: "$60" },
        { b: "$75" },
        { c: "$80" },
        { d: "$100" }
      ],
      answer: "d"
    },
    {
      question: "A man buys an article for $150 and sells it for $200. What is his profit percentage?",
      options: [
        { a: "25%" },
        { b: "30%" },
        { c: "33.33%" },
        { d: "35%" }
      ],
      answer: "c"
    },
    {
      question: "A trader sold an article for $200 at a loss of 20%. What is the cost price of the article?",
      options: [
        { a: "$250" },
        { b: "$240" },
        { c: "$220" },
        { d: "$260" }
      ],
      answer: "a"
    },
    {
      question: "If selling price of an article is increased by 20%, the profit doubles. Find the profit percentage.",
      options: [
        { a: "25%" },
        { b: "30%" },
        { c: "33.33%" },
        { d: "50%" }
      ],
      answer: "c"
    },
    {
      question: "A man buys an article for $300 and sells it for $400. What is his profit percentage?",
      options: [
        { a: "25%" },
        { b: "30%" },
        { c: "33.33%" },
        { d: "35%" }
      ],
      answer: "c"
    },
    {
      question: "A man sold an article for $240, thereby gaining 20%. What is the cost price of the article?",
      options: [
        { a: "$200" },
        { b: "$180" },
        { c: "$150" },
        { d: "$250" }
      ],
      answer: "a"
    },
    {
      question: "A man bought an article for $250 and sold it for $200. Find his loss percentage.",
      options: [
        { a: "20%" },
        { b: "25%" },
        { c: "30%" },
        { d: "15%" }
      ],
      answer: "b"
    },
    {
      question: "A man sells an article at a gain of 10%. If he had sold it for $20 more, he would have gained 15%. Find the cost price of the article.",
      options: [
        { a: "$200" },
        { b: "$300" },
        { c: "$400" },
        { d: "$500" }
      ],
      answer: "c"
    },
    {
      question: "A trader marks his goods 25% above cost price and gives a discount of 20%. What is his profit percentage?",
      options: [
        { a: "2%" },
        { b: "3%" },
        { c: "4%" },
        { d: "5%" }
      ],
      answer: "d"
    },
    {
      question: "A man bought an article for $600 and sold it for $720. What is the profit percentage?",
      options: [
        { a: "15%" },
        { b: "20%" },
        { c: "25%" },
        { d: "30%" }
      ],
      answer: "c"
    }
  ];
  
  // You can now integrate this array into your existing quiz system
  
  
// let obj=[{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a-b)^2",option:[a,b,c,b],ans:1},{question:"a^2+b^2",option:[a,b,c,b],ans:3},{question:"a^2-b^2",option:[a,b,c,b],ans:4},{question:(a+b)^2,option:[a,b,c,b],ans:2},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0}];
console.log(obj.length)

   
  
let question=document.getElementById("question");
let option0=document.getElementById("option0");
let option1=document.getElementById("option1");
let option2=document.getElementById("option2");
let option3=document.getElementById("option3");

let radio=document.getElementsByClassName("radio");
let td=document.getElementsByClassName("td-q");
let submit=document.getElementById("submit");
td[0].style.backgroundColor="red";


//Timer
let LimtSec = 60;
let LimtMin = 19;
let y;
document.getElementById("minute").innerHTML=LimtMin;
function incrementCount() {
    if(LimtSec===0){
      LimtSec=60;
      LimtMin--;
      document.getElementById("minute").innerHTML=LimtMin;
    }
    if(LimtMin===-1){
        result(true);
        clearInterval(y);
        return;
    }
      LimtSec--;
    document.getElementById("secound").innerHTML=LimtSec;

}
 y= setInterval(incrementCount, 1000);

//dispaly the Question and Opstion

display(currentQuestion);
function display(i){
    question.textContent=obj[i].question;
    option0.textContent=obj[i].option[0].a;
    option1.textContent=obj[i].option[1].b;
    option2.textContent=obj[i].option[2].c;
    option3.textContent=obj[i].option[3].d;
}

//Next Question
document.getElementById("next").addEventListener("click",function(){
    console.log("helow")
    currentQuestion++;
    display(currentQuestion);
    console.log(ResultValue.AnsArray[currentQuestion]);
    cleraRadio();
});


//Pervious Question
document.getElementById("prev").addEventListener("click",function(){
    console.log("helow")
    currentQuestion--;
    display(currentQuestion);
    cleraRadio();
   
});

//Slelect Question from Multi-Question Area
for (let i = 0; i <td.length ; i++) {
    td[i].addEventListener("click",function(){
    td[i].textContent=i+1;
    currentQuestion=i;
    display(i);
    cleraRadio();

    })
}


//radio button
console.log(radio)
let prev;
let x=true;
for(let i=0;i<radio.length;i++){
    radio[i].addEventListener("click",function(){

        if(x){
            radio[i].checked=true;
            x=false;
            prev=radio[i].id;
        }
        else{
            document.getElementById(prev).checked=false
            prev=radio[i].id;
           
        }

        if(radio[i].checked){
            switch (i) {
              case 0:
                ResultValue.AnsArray[currentQuestion]="a";
                break;
                case 1:
                  ResultValue.AnsArray[currentQuestion]="b";
                  break;
                  case 2:
                    ResultValue.AnsArray[currentQuestion]="c";
                    break;
                    case 3:
                      ResultValue.AnsArray[currentQuestion]="d";
                      break;
            
              default:
                break;
            }
            td[currentQuestion].style.backgroundColor="green";
            console.log(ResultValue.AnsArray[currentQuestion]);
        }
        else{
            ResultValue.AnsArray[currentQuestion]="-1";
            td[currentQuestion].style.backgroundColor="red";
        }
    });
}

//next redio clear (unCheked)
function cleraRadio(){
    x=true;
    if(ResultValue.AnsArray[currentQuestion]==="-1"){
        td[currentQuestion].style.backgroundColor="red";
        for (let i = 0; i < 4; i++) {
            radio[i].checked=false;
        }
    }
    else{
        console.log("bskjjhd")
        radio[ResultValue.AnsArray[currentQuestion]].checked=true;
    }
}

//Submit
submit.addEventListener("click",function(){
      var txt;
      if (confirm("Are you sure to submit the pepar")) {
        txt = true;
      } else {
        txt = false;
      }
     result(txt);
})


function  result(val){
    
  if(val){
     for (let i = 0; i < noQuestion; i++) {
          if(ResultValue.AnsArray[i]===obj[i].answer){
            ResultValue.Mark++;
          }
          else if(ResultValue.AnsArray[i]==="-1"){
            ResultValue.Miss++;
          }
          else{
            ResultValue.wrong++;
          }
      }
     
      console.log(ResultValue)
     

      fetch("http://localhost:3000/posts",{

        method: 'POST',

        body :JSON.stringify(ResultValue),
        headers: {
         'Content-Type': 'application/json',
        }

      }).then(function(res){
        return res.json();
      }).then(function(data){
        console.log('Success:',+data);
      })

    }
    else{
        console.log("continue...")
    }
}

async function run() {
  console.log("i am ain feach data")
  let res = await fetch("https://localhost:3000/data");
  let data = await res.json();
  console.log(data);
  return data;
}